import { useMemo, useRef, useEffect, useState } from "react";

const COLORS = [
  "#eff1ec",
  "#e3dac9",
  "#424743",
  "#057569",
  "#547d81",
  "#77a3a6",
  "#a3c4b1",
  //"#f97316",
];

const TechPieChart = ({ projects }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const data = useMemo(() => {
    const count = {};
    projects.forEach((project) => {
      project.tech.forEach((tech) => {
        count[tech] = (count[tech] || 0) + 1;
      });
    });
    const total = Object.values(count).reduce((a, b) => a + b, 0);

    // Tri décroissant pour affichage horaire du plus grand au plus petit
    return Object.entries(count)
      .sort((a, b) => b[1] - a[1])
      .map(([name, value]) => ({
        name,
        value,
        percent: ((value / total) * 100).toFixed(1),
        projects: projects.filter((p) => p.tech.includes(name)),
      }));
  }, [projects]);

  useEffect(() => {
    if (!canvasRef.current || typeof window === "undefined") return;

    const loadChart = async () => {
      const { Chart, ArcElement, Tooltip, PieController } =
        await import("chart.js");
      Chart.register(ArcElement, Tooltip, PieController);

      const glowPlugin = {
        id: "glowOnHover",
        afterDatasetDraw(chart) {
          const meta = chart.getDatasetMeta(0);
          const active = chart.getActiveElements();
          if (!active.length) return;
          const el = active[0];
          const arc = meta.data[el.index];
          const ctx = chart.ctx;
          ctx.save();
          // Double passe pour un halo blanc doux
          ctx.shadowColor = "rgba(255, 255, 255, 0.85)";
          ctx.shadowBlur = 18;
          arc.draw(ctx);
          ctx.shadowColor = "rgba(255, 255, 255, 0.4)";
          ctx.shadowBlur = 36;
          arc.draw(ctx);
          ctx.shadowBlur = 0;
          ctx.restore();
        },
      };

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(canvasRef.current, {
        type: "pie",
        plugins: [glowPlugin],
        data: {
          labels: data.map((d) => d.name),
          datasets: [
            {
              data: data.map((d) => d.value),
              backgroundColor: data.map((_, i) => COLORS[i % COLORS.length]),
              borderColor: "rgba(255,255,255,0.15)",
              borderWidth: 2,
              hoverOffset: 10,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          // Démarre à -90° (12h) et tourne dans le sens horaire
          rotation: 0,
          circumference: 360,
          layout: {
            // Padding interne pour que le halo ne soit pas coupé au bord du canvas
            padding: 24,
          },
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false },
          },
          onHover: (_, elements) => {
            setActiveIndex(elements.length ? elements[0].index : null);
          },
        },
      });
    };

    loadChart();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [data]);

  const active = activeIndex !== null ? data[activeIndex] : null;
  const activeColor =
    activeIndex !== null ? COLORS[activeIndex % COLORS.length] : null;

  return (
    <div className="w-full flex flex-col md:flex-row items-stretch gap-6 min-h-[320px]">
      {/* Canvas agrandi pour absorber le padding du halo sans le couper */}
      <div className="flex-shrink-0 w-full md:w-[520px] h-[520px]">
        <canvas ref={canvasRef} />
      </div>

      {/* Fixed info panel avec box-shadow en inline style (Tailwind ne supporte pas les valeurs custom) */}
      <div
        className="flex-1 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 flex flex-col justify-center min-h-[200px] transition-all duration-300"
        style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.25)" }}
      >
        {!active ? (
          <p
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              color: "rgb(85, 85, 85)",
              fontStyle: "italic",
              fontSize: "1.5rem",
            }}
          >
            Survolez une tranche pour voir le détail
          </p>
        ) : (
          <div className="space-y-3">
            {/* Header — % à gauche du nom */}
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-6 h-6 rounded-full flex-shrink-0"
                style={{ background: activeColor }}
              />
              <span
                className="text-sm font-bold px-2 py-0.5 rounded-md"
                style={{
                  background: `${activeColor}22`,
                  fontSize: "1.5rem",
                  color: "rgba(0, 0, 0, 0.72)", //activeColor,
                }}
              >
                {active.percent}%
              </span>
              <span
                className="text-base font-semibold text-grey/90"
                style={{ fontSize: "1.75rem" }}
              >
                {active.name}
              </span>
            </div>

            {/* Divider */}
            <div className="border-t border-grey/10" />

            {/* Projects list */}
            <div className="space-y-1.5">
              <p className="text-xs text-grey/40 uppercase tracking-wider mb-2">
                Projets ({active.projects.length})
              </p>
              {active.projects.map((proj, i) => (
                <div key={i} className="flex items-center gap-5">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: activeColor }}
                  />
                  <span className="text-sm text-grey/80">{proj.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechPieChart;
