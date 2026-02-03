  const [glitchActive, setGlitchActive] = useState(false);

  const normalName = "CAMUZARD Nicolas";
  // const japName = "カミュザール 二コラ";
  // const twName = "卡穆扎爾 尼可拉";
  // glitch ar: كا

  // Mapping direct des segments

  const nameSegments = [
    {
      normal: "CA",
      glitchTw: "卡",
      glitchJp: "カ",
      glitchAr: "كا",
      glitchIn: "का",
      glitchRu: "КА",
    },
    {
      normal: "MU",
      glitchTw: "穆",
      glitchJp: "ミュ",
      glitchAr: "مو",
      glitchIn: "मु",
      glitchRu: "МУ",
    },
    {
      normal: "ZA",
      glitchTw: "扎",
      glitchJp: "ザ",
      glitchAr: "كز",
      glitchIn: "ज़ा",
      glitchRu: "ЗА",
    },
    {
      normal: "RD",
      glitchTw: "爾",
      glitchJp: "ール",
      glitchAr: "ار",
      glitchIn: "र्ड",
      glitchRu: "РД",
    },
    {
      normal: " ",
      glitchTw: " ",
      glitchJp: " ",
      glitchAr: "",
      glitchIn: " ",
      glitchRu: " ",
    },
    {
      normal: "Ni",
      glitchTw: "尼",
      glitchJp: "二",
      glitchAr: "ني",
      glitchIn: "नि",
      glitchRu: "НИ",
    },
    {
      normal: "co",
      glitchTw: "可",
      glitchJp: "コ",
      glitchAr: "كو",
      glitchIn: "को",
      glitchRu: "КО",
    },
    {
      normal: "las",
      glitchTw: "拉",
      glitchJp: "ラ",
      glitchAr: "لا",
      glitchIn: "ला",
      glitchRu: "ЛА",
    },
  ];
  const glitchText = () => {
    return nameSegments
      .map((segment) => {
        const rand = Math.random();
        if (rand < 0.2) return segment.glitchJp;
        if (rand < 0.4) return segment.glitchTw;
        if (rand < 0.6) return segment.glitchAr;
        if (rand < 0.8) return segment.glitchIn;
        if (rand < 0.95) return segment.glitchRu;
        return segment.normal;
      })
      .join("");
  };

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);
  {
    /*}
  const glitchText = () => {
    return nameSegments
      .map((segment) => {
        return Math.random() < 0.7 ? segment.glitch : segment.normal;
      })
      .join("");
  };

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);
*/
  }

  return (
     <h1
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 relative"
            onMouseEnter={() => setGlitchActive(true)}
            onMouseLeave={() => setGlitchActive(false)}
            style={{ fontFamily: "monospace" }}
          >
            {glitchActive ? glitchText() : normalName}
            <style>{`
              @keyframes glitch {
                0% { transform: translate(0); }
                20% { transform: translate(-2px, 2px); }
                40% { transform: translate(-2px, -2px); }
                60% { transform: translate(2px, 2px); }
                80% { transform: translate(2px, -2px); }
                100% { transform: translate(0); }
              }
            `}</style>
          </h1>