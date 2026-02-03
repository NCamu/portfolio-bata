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
  { normal: " ", variants: [" ", "_", "█", " "] }, // espace stable
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

export default function GlitchName() {
  const [text, setText] = useState("");
  const intervalRef = useRef(null);

  useEffect(() => {
    const runGlitch = () => {
      // 🔥 kill l’interval précédent
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      let globalStep = 0;
      const totalSteps = nameSegments.length * 6;

      intervalRef.current = setInterval(() => {
        const currentString = nameSegments
          .map((segment, index) => {
            const segmentProgress = globalStep - index * 4;
            const width = segment.normal.length;

            if (segmentProgress < 0) {
              return pad(segment.variants[0], width);
            }

            if (segmentProgress >= segment.variants.length) {
              return pad(segment.normal, width);
            }

            return pad(segment.variants[segmentProgress], width);
          })
          .join("");

        setText(currentString);
        globalStep++;

        if (globalStep > totalSteps + 10) {
          clearInterval(intervalRef.current);
        }
      }, 130);
    };

    runGlitch();
    const cycle = setInterval(runGlitch, 5700);

    return () => {
      clearInterval(cycle);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <h1
      style={{
        fontFamily: "monospace",
        fontWeight: "600",
        fontSize: "4.5em",
        textAlign: "center",
        letterSpacing: "0.02em",
        //  whiteSpace: "pre", // ⚠️ INDISPENSABLE
        minHeight: "1.2em",
      }}
    >
      {text}
    </h1>
  );
}
