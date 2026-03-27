import { useState, useEffect, useRef } from "react";

const pad = (str = "", length = 0) => String(str).padEnd(length, " ");

const nameSegments = [
  { normal: "CA", variants: ["_", "█", "カ", "卡", "كا", "का", "КА", "CA"] },
  {
    normal: "MU",
    variants: [" ", "_", "█", "ミュ", "穆", "مو", "मु", "МУ", "MU"],
  },
  {
    normal: "ZA",
    variants: [" ", "_", "█", "ザ", "扎", "زا", "ज़ा", "ЗА", "ZA"],
  },
  {
    normal: "RD",
    variants: [" ", "_", "█", "ール", "爾", "رد", "र्ड", "РД", "RD"],
  },
  { normal: " ", variants: [" ", "_", "█", " "] },
  {
    normal: "NI",
    variants: [" ", "_", "█", "ニ", "尼", "ني", "नि", "НИ", "NI"],
  },
  {
    normal: "CO",
    variants: [" ", "_", "█", "コ", "可", "كو", "को", "КО", "CO"],
  },
  {
    normal: "LAS",
    variants: [" ", "_", "█", "ラ", "拉", "لا", "ला", "ЛА", "LAS"],
  },
];

const names = [
  "CAMUZARD NICOLAS",
  "カムザール ニコラ",
  "卡穆扎尔 尼古拉",
  "كاموزارد نيكولا",
  "कामुजार्ड निकोला",
  "КАМУЗАРД НИКОЛА",
];

export default function GlitchName() {
  const [text, setText] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // État pour le hover

  const intervalRef = useRef(null);
  const cycleRef = useRef(null);
  const timeoutRef = useRef(null);

  const runGlitch = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let globalStep = 0;
    const totalSteps = nameSegments.length * 6;

    intervalRef.current = setInterval(() => {
      const currentString = nameSegments
        .map((segment, index) => {
          const segmentProgress = globalStep - index * 4;
          const width = segment.normal.length;
          if (segmentProgress < 0) return pad(segment.variants[0], width);
          if (segmentProgress >= segment.variants.length)
            return pad(segment.normal, width);
          return pad(segment.variants[segmentProgress], width);
        })
        .join("");
      setText(currentString);
      globalStep++;
      if (globalStep > totalSteps + 10) clearInterval(intervalRef.current);
    }, 130);
  };

  useEffect(() => {
    if (isPaused) return;
    runGlitch();
    cycleRef.current = setInterval(runGlitch, 5700);
    return () => {
      clearInterval(cycleRef.current);
      clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isPaused]);

  const handleClick = () => {
    clearInterval(cycleRef.current);
    clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const otherNames = names.filter((n) => n !== text);
    const randomName =
      otherNames[Math.floor(Math.random() * otherNames.length)];

    setText(randomName);
    setIsPaused(true);

    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  return (
    <h1
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        fontFamily: "monospace",
        fontWeight: "600",
        fontSize: "4.5em",
        textAlign: "center",
        letterSpacing: "0.02em",
        minHeight: "1.2em",
        color: "rgba(0, 0, 0, 0.84)",
        cursor: "pointer",
        userSelect: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        marginTop: "-20px",
        marginBottom: "40px",
        transition: "all 0.3s ease", // Transition douce pour le glow
        // Effet de bordure et de lueur
        border: isHovered
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid transparent",
        boxShadow: isHovered
          ? "0 0 15px rgba(0, 0, 0, 0.05), inset 0 0 5px rgba(0, 0, 0, 0.02)"
          : "none",
        textShadow: isHovered ? "0 0 8px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      {text}
    </h1>
  );
}
