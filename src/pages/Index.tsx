import Icon from "@/components/ui/icon";

const ACCENT = "#E9FF60";

const cycleSteps = [
  {
    id: 1,
    icon: "ClipboardList",
    label: "Подготовка\nи планирование",
    desc: "Актуализация карт компетенций, калибровка, коммуникация",
    angle: -90,
    color: "#E9FF60",
  },
  {
    id: 2,
    icon: "ScanSearch",
    label: "Процедура\nоценки",
    desc: "Самооценка + оценка руководителем + калибровочная встреча",
    angle: -18,
    color: "#C5F200",
  },
  {
    id: 3,
    icon: "MessageSquareHeart",
    label: "Обратная связь\nи планирование",
    desc: "Встреча РОП — Сотрудник — HR, формирование ИПР",
    angle: 54,
    color: "#AADD00",
  },
  {
    id: 4,
    icon: "TrendingUp",
    label: "Развитие\nи мониторинг",
    desc: "Работа по ИПР, чекапы, анализ данных по команде",
    angle: 126,
    color: "#90CC00",
  },
  {
    id: 5,
    icon: "RefreshCw",
    label: "Замыкание\nцикла",
    desc: "Связь с Performance Review и карьерным ростом",
    angle: 198,
    color: "#76BB00",
  },
];

const principles = [
  { icon: "Target", text: "Развитие,\nне контроль" },
  { icon: "Eye", text: "Прозрачность\nкритериев" },
  { icon: "Zap", text: "Инициатива\nот любой стороны" },
  { icon: "FileCheck", text: "Конкретный\nплан (ИПР)" },
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

function CycleStep({ step }: { step: (typeof cycleSteps)[0] }) {
  const r = 170;
  const rad = (step.angle * Math.PI) / 180;
  const cx = 250 + r * Math.cos(rad);
  const cy = 250 + r * Math.sin(rad);

  return (
    <g>
      <line
        x1="250" y1="250" x2={cx} y2={cy}
        stroke={step.color} strokeWidth="1.5"
        strokeDasharray="4 4" opacity="0.25"
      />
      <circle cx={cx} cy={cy} r="36" fill={step.color} opacity="0.08" />
      <circle cx={cx} cy={cy} r="30" fill="#161616" stroke={step.color} strokeWidth="1.5" />
      <circle cx={cx + 20} cy={cy - 20} r="9" fill={step.color} />
      <text x={cx + 20} y={cy - 16} textAnchor="middle" fontSize="10" fontWeight="800" fill="#0C0C0C">
        {step.id}
      </text>
    </g>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen font-golos" style={{ background: "#0C0C0C", color: "#F0F0F0" }}>

      {/* BG glow blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-180px] right-[-180px] w-[550px] h-[550px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(233,255,96,0.12) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-120px] left-[-120px] w-[450px] h-[450px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(233,255,96,0.07) 0%, transparent 70%)" }} />
      </div>

      <div className="relative" style={{ zIndex: 1 }}>

        {/* ═══ A. HEADER ═══ */}
        <header className="px-6 pt-10 pb-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <div className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(233,255,96,0.12)", border: "1px solid rgba(233,255,96,0.3)", color: ACCENT }}>
              Команда Ф5
            </div>
            <div className="flex items-center gap-2 text-xs opacity-40">
              <Icon name="RefreshCw" size={12} />
              Непрерывный процесс развития
            </div>
          </div>

          <h1 className="font-montserrat font-black leading-none mb-4 animate-fade-up delay-100"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}>
            Твой путь роста:{" "}
            <span style={{ color: ACCENT }}>цикл оценки</span>
            <br />и развития
          </h1>
          <p className="text-lg mb-8 animate-fade-up delay-200"
            style={{ opacity: 0.55, lineHeight: 1.5, maxWidth: "38rem" }}>
            Процесс, где оценка — это начало твоего развития, а не его итог
          </p>

          {/* Principles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-fade-up delay-300">
            {principles.map((p, i) => (
              <div key={i} className="rounded-2xl p-4 flex items-center gap-3 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(233,255,96,0.13)" }}>
                  <Icon name={p.icon} size={16} style={{ color: ACCENT }} />
                </div>
                <span className="text-sm font-medium leading-tight whitespace-pre-line">{p.text}</span>
              </div>
            ))}
          </div>
        </header>

        {/* ═══ B+C+D. THREE-COLUMN MAIN ═══ */}
        <section className="px-6 py-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-6 items-start">

            {/* ── LEFT ── */}
            <div className="space-y-4 animate-fade-left delay-400">
              <h2 className="font-montserrat font-bold text-lg mb-3" style={{ color: ACCENT }}>
                Уровни глубины
              </h2>

              {/* Глубокая */}
              <div className="rounded-3xl p-5 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(233,255,96,0.1) 0%, rgba(233,255,96,0.03) 100%)", border: "1px solid rgba(233,255,96,0.22)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: ACCENT }}>
                    <Icon name="Star" size={20} style={{ color: "#0C0C0C" }} />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Глубокая оценка</div>
                    <div className="text-xs px-2.5 py-0.5 rounded-full mt-1 inline-block font-semibold"
                      style={{ background: ACCENT, color: "#0C0C0C" }}>
                      1 раз в год
                    </div>
                  </div>
                </div>
                <p className="text-xs mb-2.5" style={{ opacity: 0.55 }}>Для 15–20% ключевых сотрудников</p>
                <ul className="space-y-1.5">
                  {["Критические проекты", "Кандидаты на повышение", "Кадровый резерв", "Новые РОПы"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ opacity: 0.8 }}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Упрощённый */}
              <div className="rounded-3xl p-5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.1)" }}>
                    <Icon name="Users" size={20} style={{ color: "#F0F0F0" }} />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Упрощённый цикл</div>
                    <div className="text-xs px-2.5 py-0.5 rounded-full mt-1 inline-block font-semibold"
                      style={{ background: "rgba(255,255,255,0.14)", color: "#F0F0F0" }}>
                      1 раз в 1,5–2 года
                    </div>
                  </div>
                </div>
                <p className="text-xs mb-2.5" style={{ opacity: 0.55 }}>Для 30–40% основного ядра</p>
                <ul className="space-y-1.5">
                  {["Стабильные специалисты", "Плановое развитие"].map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ opacity: 0.7 }}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-white" style={{ opacity: 0.35 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── CENTER: CYCLE ── */}
            <div className="flex flex-col items-center animate-scale-in delay-300">
              <div className="relative w-full" style={{ maxWidth: 480, aspectRatio: "1/1" }}>

                {/* Spinning ring */}
                <div className="absolute inset-0 rounded-full animate-spin-slow pointer-events-none"
                  style={{ background: "conic-gradient(from 0deg, rgba(233,255,96,0.2) 0%, transparent 18%, transparent 100%)", borderRadius: "50%" }} />

                <svg viewBox="0 0 500 500" className="w-full h-full" style={{ overflow: "visible" }}>
                  <defs>
                    <radialGradient id="cg" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#E9FF60" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#0C0C0C" stopOpacity="0" />
                    </radialGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                  </defs>

                  <circle cx="250" cy="250" r="200" fill="url(#cg)" />

                  {/* Dashed ring */}
                  <circle cx="250" cy="250" r="170" fill="none"
                    stroke="rgba(233,255,96,0.13)" strokeWidth="1" strokeDasharray="7 5" />

                  {/* Pie slices background */}
                  {cycleSteps.map((step, i) => {
                    const sa = (i * 72 - 90) * (Math.PI / 180);
                    const ea = ((i + 1) * 72 - 90) * (Math.PI / 180);
                    const r2 = 120;
                    const x1 = 250 + r2 * Math.cos(sa), y1 = 250 + r2 * Math.sin(sa);
                    const x2 = 250 + r2 * Math.cos(ea), y2 = 250 + r2 * Math.sin(ea);
                    return (
                      <path key={i}
                        d={`M 250 250 L ${x1} ${y1} A ${r2} ${r2} 0 0 1 ${x2} ${y2} Z`}
                        fill={step.color} opacity="0.06"
                        stroke={step.color} strokeWidth="0.4" strokeOpacity="0.18" />
                    );
                  })}

                  {/* Node circles */}
                  {cycleSteps.map((step) => <CycleStep key={step.id} step={step} />)}

                  {/* Center */}
                  <circle cx="250" cy="250" r="66" fill="#141414" stroke="#E9FF60" strokeWidth="1.5" filter="url(#glow)" />
                  <circle cx="250" cy="250" r="60" fill="#1C1C1C" />
                  <text x="250" y="237" textAnchor="middle" fontSize="9" fill="#E9FF60" fontWeight="700" letterSpacing="2">НЕПРЕРЫВНЫЙ</text>
                  <text x="250" y="251" textAnchor="middle" fontSize="9" fill="#E9FF60" fontWeight="700" letterSpacing="2">ЦИКЛ</text>
                  <text x="250" y="265" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.4)">развития</text>
                </svg>

                {/* Icon + label overlays */}
                {cycleSteps.map((step) => {
                  const r2 = 230;
                  const rad = (step.angle * Math.PI) / 180;
                  const px = 50 + (r2 * Math.cos(rad)) / 5;
                  const py = 50 + (r2 * Math.sin(rad)) / 5;
                  return (
                    <div key={step.id}
                      className="absolute flex flex-col items-center gap-1 pointer-events-none"
                      style={{ left: `${px}%`, top: `${py}%`, transform: "translate(-50%,-50%)", width: 88 }}>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(233,255,96,0.1)" }}>
                        <Icon name={step.icon} size={15} style={{ color: step.color }} />
                      </div>
                      <span className="text-center font-semibold leading-tight whitespace-pre-line"
                        style={{ fontSize: "0.6rem", color: step.color }}>
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Step list */}
              <div className="mt-5 w-full space-y-2">
                {cycleSteps.map((step) => (
                  <div key={step.id} className="rounded-2xl px-4 py-2.5 flex items-start gap-3"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold"
                      style={{ background: step.color, color: "#0C0C0C" }}>
                      {step.id}
                    </div>
                    <div>
                      <div className="font-semibold text-xs mb-0.5" style={{ color: step.color }}>
                        {step.label.replace("\n", " ")}
                      </div>
                      <div className="text-xs" style={{ opacity: 0.45 }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div className="space-y-4 animate-fade-right delay-400">
              <h2 className="font-montserrat font-bold text-lg mb-3" style={{ color: ACCENT }}>
                Кто запускает?
              </h2>
              <p className="text-xs -mt-2 mb-3" style={{ opacity: 0.45 }}>
                Это сервис по запросу — инициировать может любой
              </p>

              {initiators.map((init, i) => (
                <div key={i} className="rounded-3xl p-5 transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(233,255,96,0.11)" }}>
                      <Icon name={init.icon} size={20} style={{ color: ACCENT }} />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{init.role}</div>
                      <div className="text-xs px-2.5 py-0.5 rounded-full mt-1 inline-block"
                        style={{ background: "rgba(233,255,96,0.1)", color: ACCENT, border: "1px solid rgba(233,255,96,0.2)" }}>
                        {init.tag}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ opacity: 0.55 }}>{init.desc}</p>
                </div>
              ))}

              <div className="rounded-3xl p-5 text-center"
                style={{ background: "linear-gradient(135deg, rgba(233,255,96,0.13) 0%, rgba(233,255,96,0.04) 100%)", border: "1px solid rgba(233,255,96,0.22)" }}>
                <Icon name="Sparkles" size={22} className="mx-auto mb-2" style={{ color: ACCENT }} />
                <div className="font-bold text-sm mb-1">Готов начать?</div>
                <div className="text-xs" style={{ opacity: 0.5 }}>
                  Обратись к HR-команде, и мы запустим твой цикл развития
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══ E. RESULTS ═══ */}
        <section className="px-6 pb-8 max-w-7xl mx-auto">
          <div className="rounded-3xl p-8 relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="absolute top-0 left-0 right-0 h-px rounded-t-3xl"
              style={{ background: "linear-gradient(90deg, transparent, #E9FF60, transparent)" }} />

            <h2 className="font-montserrat font-bold text-2xl mb-6 text-center animate-fade-up">
              Что ты получишь в результате?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {results.map((r, i) => (
                <div key={i} className="rounded-2xl p-6 text-center transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(233,255,96,0.1)" }}>
                    <Icon name={r.icon} size={26} style={{ color: ACCENT }} />
                  </div>
                  <div className="font-bold text-sm mb-2" style={{ color: ACCENT }}>{r.title}</div>
                  <p className="text-sm leading-relaxed" style={{ opacity: 0.5 }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ F. FOOTER ═══ */}
        <footer className="px-6 pb-10 max-w-7xl mx-auto">
          <div className="rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ background: "linear-gradient(135deg, rgba(233,255,96,0.09) 0%, rgba(233,255,96,0.02) 100%)", border: "1px solid rgba(233,255,96,0.18)" }}>
            <div>
              <div className="font-bold text-sm mb-1">
                Хочешь узнать больше или запустить процесс для себя или команды?
              </div>
              <div className="text-xs" style={{ opacity: 0.45 }}>Обратись в HR-отдел напрямую в Telegram</div>
            </div>
            <div className="flex flex-wrap gap-3">
              {["@froggystile", "@Anjleon", "@arkuli"].map((handle) => (
                <a key={handle}
                  href={`https://t.me/${handle.replace("@", "")}`}
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-2xl font-semibold text-sm transition-all duration-200 hover:scale-105"
                  style={{ background: "rgba(233,255,96,0.12)", border: "1px solid rgba(233,255,96,0.22)", color: ACCENT }}>
                  <Icon name="Send" size={14} style={{ color: ACCENT }} />
                  {handle}
                </a>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
