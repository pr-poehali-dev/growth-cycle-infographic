import Icon from "@/components/ui/icon";

const ACCENT = "#E9FF60";
const BLACK = "#0C0C0C";
const WHITE = "#FFFFFF";

const cycleSteps = [
  {
    id: 1,
    icon: "ClipboardList",
    label: "Подготовка\nи планирование",
    desc: "Актуализация карт компетенций, калибровка, коммуникация",
    angle: -90,
  },
  {
    id: 2,
    icon: "ScanSearch",
    label: "Процедура\nоценки",
    desc: "Самооценка + оценка руководителем + калибровочная встреча",
    angle: -18,
  },
  {
    id: 3,
    icon: "MessageSquareHeart",
    label: "Обратная связь\nи планирование",
    desc: "Встреча РОП — Сотрудник — HR, формирование ИПР",
    angle: 54,
  },
  {
    id: 4,
    icon: "TrendingUp",
    label: "Развитие\nи мониторинг",
    desc: "Работа по ИПР, чекапы, анализ данных по команде",
    angle: 126,
  },
  {
    id: 5,
    icon: "RefreshCw",
    label: "Замыкание\nцикла",
    desc: "Связь с Performance Review и карьерным ростом",
    angle: 198,
  },
];

const principles = [
  { icon: "Target", label: "Цель", text: "Развитие,\nне контроль" },
  { icon: "Eye", label: "Принцип", text: "Прозрачность\nкритериев" },
  { icon: "Zap", label: "Инициатива", text: "HR, руководитель\nили ты" },
  { icon: "FileCheck", label: "Результат", text: "Конкретный\nплан (ИПР)" },
];

const initiators = [
  {
    icon: "BarChart3",
    role: "HR",
    desc: "Видит тренды по команде и предлагает оценку для точечного развития или диагностики",
    tag: "Данные и тренды",
  },
  {
    icon: "Flag",
    role: "Руководитель",
    desc: "Видит будущие задачи команды и запрашивает оценку для подготовки сотрудников",
    tag: "Стратегия роста",
  },
  {
    icon: "HandHeart",
    role: "Сотрудник",
    desc: "Сам стремится к росту и запрашивает оценку для построения ИПР",
    tag: "Личная инициатива",
  },
];

const results = [
  {
    icon: "MessageCircle",
    title: "Чёткая обратная связь",
    desc: "Поймёшь свои сильные стороны и зоны роста через объективную оценку",
  },
  {
    icon: "CheckSquare",
    title: "ИПР — план действий",
    desc: "Конкретный план на 2–3 ключевые компетенции с поддержкой руководителя и HR",
  },
  {
    icon: "Layers",
    title: "Прозрачность карьеры",
    desc: "Увидишь чёткие критерии для перехода на следующую ступень в компании",
  },
];

function arcPath(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const x1 = cx + r * Math.cos(toRad(startDeg));
  const y1 = cy + r * Math.sin(toRad(startDeg));
  const x2 = cx + r * Math.cos(toRad(endDeg));
  const y2 = cy + r * Math.sin(toRad(endDeg));
  return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;
}

const segmentColors = ["#E9FF60", "#D4F040", "#BFE020", "#A8CC00", "#8FB800"];
const segmentBorder = ["#C8DC40", "#B4CC30", "#9EBB10", "#86A800", "#739600"];

export default function Index() {
  return (
    <div className="min-h-screen font-golos" style={{ background: WHITE, color: BLACK }}>

      {/* ═══ A. HEADER ═══ */}
      <header style={{ background: BLACK, color: WHITE, padding: "40px 48px 36px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: ACCENT, color: BLACK, borderRadius: 100,
              padding: "5px 16px", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24,
            }}
          >
            <Icon name="Sparkles" size={12} style={{ color: BLACK }} />
            Команда Ф5
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
            <div>
              <h1
                className="font-montserrat"
                style={{ fontSize: "clamp(1.8rem, 3.2vw, 3rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: 12, color: WHITE }}
              >
                Твой путь роста:{" "}
                <span style={{ color: ACCENT }}>цикл оценки</span>
                <br />и развития в Команде Ф5
              </h1>
              <p style={{ fontSize: 15, opacity: 0.55, maxWidth: 500, lineHeight: 1.55, margin: 0 }}>
                Процесс, где оценка — это начало твоего развития, а не его итог
              </p>
            </div>

            {/* Principles 2×2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, minWidth: 320 }}>
              {principles.map((p, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 16, padding: "12px 14px",
                    display: "flex", alignItems: "center", gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 36, height: 36, borderRadius: 10, background: ACCENT,
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}
                  >
                    <Icon name={p.icon} size={16} style={{ color: BLACK }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 9, opacity: 0.45, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>
                      {p.label}
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 600, whiteSpace: "pre-line", lineHeight: 1.3, color: WHITE }}>
                      {p.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ═══ MAIN 3-COL GRID ═══ */}
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "250px 1fr 250px", gap: 24, alignItems: "start" }}>

          {/* ── LEFT: Уровни ── */}
          <div>
            <div style={{ background: BLACK, borderRadius: 24, padding: "5px 14px", display: "inline-block", marginBottom: 16 }}>
              <span className="font-montserrat" style={{ color: WHITE, fontWeight: 700, fontSize: 13 }}>
                Уровни глубины
              </span>
            </div>

            {/* Глубокая */}
            <div style={{ background: BLACK, borderRadius: 20, padding: "20px", marginBottom: 12, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: ACCENT, borderRadius: "20px 20px 0 0" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="Star" size={20} style={{ color: BLACK }} />
                </div>
                <div>
                  <div style={{ color: WHITE, fontWeight: 700, fontSize: 13 }}>Глубокая оценка</div>
                  <div style={{ background: ACCENT, color: BLACK, fontSize: 10, fontWeight: 700, padding: "2px 10px", borderRadius: 100, display: "inline-block", marginTop: 4 }}>
                    1 раз в год
                  </div>
                </div>
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginBottom: 10 }}>
                Для 15–20% ключевых сотрудников
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                {["Критические проекты", "Кандидаты на повышение", "Кадровый резерв", "Новые РОПы"].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.8)", fontSize: 12 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Упрощённый */}
            <div style={{ border: `2px solid ${BLACK}`, borderRadius: 20, padding: "20px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#CCCCCC", borderRadius: "18px 18px 0 0" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: BLACK, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="Users" size={20} style={{ color: WHITE }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: BLACK }}>Упрощённый цикл</div>
                  <div style={{ background: BLACK, color: WHITE, fontSize: 10, fontWeight: 700, padding: "2px 10px", borderRadius: 100, display: "inline-block", marginTop: 4 }}>
                    1 раз в 1,5–2 года
                  </div>
                </div>
              </div>
              <div style={{ color: "rgba(0,0,0,0.45)", fontSize: 11, marginBottom: 10 }}>
                Для 30–40% основного ядра
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                {["Стабильные специалисты", "Плановое развитие"].map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(0,0,0,0.7)", fontSize: 12 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: BLACK, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── CENTER: Cycle ── */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 460, aspectRatio: "1/1" }}>
              <svg viewBox="0 0 500 500" style={{ width: "100%", height: "100%", overflow: "visible" }}>
                <defs>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="rgba(0,0,0,0.15)" />
                  </filter>
                </defs>

                {/* Outer subtle ring */}
                <circle cx="250" cy="250" r="230" fill="none" stroke="#EBEBEB" strokeWidth="2" />

                {/* Pie segments */}
                {cycleSteps.map((step, i) => (
                  <path
                    key={i}
                    d={arcPath(250, 250, 218, i * 72 - 90, (i + 1) * 72 - 90)}
                    fill={segmentColors[i]}
                    stroke={WHITE}
                    strokeWidth="3"
                  />
                ))}

                {/* White inner circle */}
                <circle cx="250" cy="250" r="146" fill={WHITE} filter="url(#shadow)" />
                <circle cx="250" cy="250" r="146" fill="none" stroke="#F0F0F0" strokeWidth="1.5" />

                {/* Step number badges on segment midpoints */}
                {cycleSteps.map((step, i) => {
                  const midAngle = (i * 72 + 36 - 90) * (Math.PI / 180);
                  const rn = 185;
                  const nx = 250 + rn * Math.cos(midAngle);
                  const ny = 250 + rn * Math.sin(midAngle);
                  return (
                    <g key={i}>
                      <circle cx={nx} cy={ny} r="16" fill={BLACK} />
                      <text x={nx} y={ny + 5} textAnchor="middle" fontSize="13" fontWeight="900" fill={WHITE} fontFamily="Montserrat, sans-serif">
                        {step.id}
                      </text>
                    </g>
                  );
                })}

                {/* Center text */}
                <text x="250" y="232" textAnchor="middle" fontSize="10" fontWeight="800"
                  fill={BLACK} letterSpacing="2.5" fontFamily="Montserrat, sans-serif">
                  НЕПРЕРЫВНЫЙ
                </text>
                <text x="250" y="252" textAnchor="middle" fontSize="10" fontWeight="800"
                  fill={BLACK} letterSpacing="2.5" fontFamily="Montserrat, sans-serif">
                  ЦИКЛ
                </text>
                <text x="250" y="270" textAnchor="middle" fontSize="9"
                  fill="rgba(0,0,0,0.4)" fontFamily="Golos Text, sans-serif">
                  развития
                </text>

                {/* Center refresh icon background */}
                <circle cx="250" cy="206" r="16" fill={ACCENT} />
                <text x="250" y="212" textAnchor="middle" fontSize="16" fontFamily="sans-serif">↻</text>
              </svg>

              {/* Labels positioned around cycle */}
              {cycleSteps.map((step) => {
                const rPx = 270;
                const rad = (step.angle * Math.PI) / 180;
                const px = 50 + (rPx * Math.cos(rad)) / 5;
                const py = 50 + (rPx * Math.sin(rad)) / 5;
                return (
                  <div
                    key={step.id}
                    style={{
                      position: "absolute", left: `${px}%`, top: `${py}%`,
                      transform: "translate(-50%,-50%)", width: 96,
                      textAlign: "center", pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        width: 34, height: 34, borderRadius: 10, background: BLACK,
                        display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 5px",
                      }}
                    >
                      <Icon name={step.icon} size={16} style={{ color: ACCENT }} />
                    </div>
                    <span style={{ fontSize: "0.58rem", fontWeight: 700, color: BLACK, lineHeight: 1.3, whiteSpace: "pre-line", display: "block" }}>
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Step descriptions */}
            <div style={{ width: "100%", marginTop: 20, display: "flex", flexDirection: "column", gap: 7 }}>
              {cycleSteps.map((step, i) => (
                <div
                  key={step.id}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 12,
                    background: i % 2 === 0 ? "#F7F7F7" : WHITE,
                    border: "1px solid #EFEFEF",
                    borderRadius: 14, padding: "9px 14px",
                    borderLeft: `3px solid ${segmentColors[i]}`,
                  }}
                >
                  <div
                    style={{
                      width: 22, height: 22, borderRadius: 6,
                      background: segmentColors[i],
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, fontSize: 10, fontWeight: 800, color: BLACK,
                    }}
                  >
                    {step.id}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 2, color: BLACK }}>
                      {step.label.replace("\n", " ")}
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(0,0,0,0.45)" }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Инициаторы ── */}
          <div>
            <div style={{ background: BLACK, borderRadius: 24, padding: "5px 14px", display: "inline-block", marginBottom: 16 }}>
              <span className="font-montserrat" style={{ color: WHITE, fontWeight: 700, fontSize: 13 }}>
                Кто запускает?
              </span>
            </div>
            <p style={{ fontSize: 11, color: "rgba(0,0,0,0.45)", marginBottom: 12, marginTop: -8 }}>
              Это сервис по запросу — в удобный момент
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {initiators.map((init, i) => (
                <div
                  key={i}
                  style={{
                    border: `2px solid ${BLACK}`, borderRadius: 20, padding: "16px",
                    position: "relative", overflow: "hidden",
                  }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 4, background: ACCENT }} />
                  <div style={{ paddingLeft: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 38, height: 38, borderRadius: 10, background: BLACK, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon name={init.icon} size={18} style={{ color: ACCENT }} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 14, color: BLACK }}>{init.role}</div>
                        <div style={{ background: ACCENT, color: BLACK, fontSize: 10, fontWeight: 700, padding: "1px 8px", borderRadius: 100, display: "inline-block" }}>
                          {init.tag}
                        </div>
                      </div>
                    </div>
                    <p style={{ fontSize: 11, color: "rgba(0,0,0,0.5)", lineHeight: 1.5, margin: 0 }}>{init.desc}</p>
                  </div>
                </div>
              ))}

              {/* CTA card */}
              <div style={{ background: BLACK, borderRadius: 20, padding: "18px", textAlign: "center" }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                  <Icon name="Rocket" size={20} style={{ color: BLACK }} />
                </div>
                <div style={{ color: WHITE, fontWeight: 700, fontSize: 13, marginBottom: 4 }}>Это сервис по запросу</div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, lineHeight: 1.4 }}>
                  Любая из трёх сторон может запустить процесс в нужный момент
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ═══ E. RESULTS ═══ */}
        <div style={{ marginTop: 36 }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 className="font-montserrat" style={{ fontSize: 22, fontWeight: 800, color: BLACK, marginBottom: 8 }}>
              Что ты получишь в результате?
            </h2>
            <div style={{ width: 56, height: 4, background: ACCENT, borderRadius: 2, margin: "0 auto" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {results.map((r, i) => (
              <div
                key={i}
                style={{
                  background: BLACK, borderRadius: 24, padding: "28px 24px",
                  textAlign: "center", position: "relative", overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: ACCENT }} />
                <div style={{ width: 52, height: 52, borderRadius: 16, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <Icon name={r.icon} size={24} style={{ color: BLACK }} />
                </div>
                <div className="font-montserrat" style={{ color: WHITE, fontWeight: 700, fontSize: 14, marginBottom: 8, lineHeight: 1.3 }}>
                  {r.title}
                </div>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ═══ F. FOOTER ═══ */}
      <footer style={{ background: ACCENT, padding: "28px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div className="font-montserrat" style={{ fontWeight: 800, fontSize: 15, color: BLACK, marginBottom: 4 }}>
              Хочешь узнать больше или запустить процесс?
            </div>
            <div style={{ fontSize: 13, color: "rgba(0,0,0,0.55)" }}>Обратись в HR-отдел напрямую в Telegram</div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["@froggystile", "@Anjleon", "@arkuli"].map((handle) => (
              <a
                key={handle}
                href={`https://t.me/${handle.replace("@", "")}`}
                target="_blank" rel="noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: BLACK, color: WHITE,
                  padding: "10px 18px", borderRadius: 100,
                  fontWeight: 700, fontSize: 13, textDecoration: "none",
                }}
              >
                <Icon name="Send" size={14} style={{ color: ACCENT }} />
                {handle}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
