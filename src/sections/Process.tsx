import { useEffect, useRef, useState } from 'react';
import { processSteps, type ProcessStep } from '../data/process';

function renderMicrovisual(step: ProcessStep) {
  const pill = 'inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#D6D5D8]';

  switch (step.id) {
    case 1:
      return (
        <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#1C1C1F] p-4 md:p-5">
          <div className="flex items-center justify-between">
            <span className={pill}>Chat</span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF1724]/70" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="ml-0 max-w-[78%] rounded-2xl rounded-bl-md bg-white/5 px-3 py-2 text-[11px] leading-5 text-[#D8D7DA]">
              Preciso de um site profissional.
            </div>
            <div className="ml-auto max-w-[72%] rounded-2xl rounded-br-md bg-[#FF1724]/15 px-3 py-2 text-right text-[11px] leading-5 text-[#F5F5F3]">
              Claro! Vamos entender tudo.
            </div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full border border-white/10 bg-white/5" />
              <div className="h-2 w-20 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#1C1C1F] p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className={pill}>Wireframe</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#AAA9AD]">v1</span>
          </div>
          <div className="rounded-[12px] border border-white/10 bg-[#141416] p-2.5">
            <div className="mb-2 flex gap-2">
              {[0, 0, 0].map((_, i) => (
                <span key={i} className="h-2 w-2 rounded-full bg-white/15" />
              ))}
            </div>
            <div className="grid gap-2">
              <div className="h-10 rounded-xl bg-white/5" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-16 rounded-xl bg-white/5" />
                <div className="h-16 rounded-xl bg-[#FF1724]/10" />
              </div>
              <div className="h-8 rounded-xl bg-white/5" />
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#1C1C1F] p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className={pill}>Aprovação</span>
            <span className="text-[#FF1724]">✓</span>
          </div>
          <div className="flex items-center justify-center rounded-[14px] border border-[#FF1724]/25 bg-[#FF1724]/10 p-4 text-center">
            <div>
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#FF1724] text-xl text-white">
                ✓
              </div>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#F5F5F3]">
                Proposta aprovada
              </p>
            </div>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#1C1C1F] p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className={pill}>Revisão</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#AAA9AD]">edit</span>
          </div>
          <div className="space-y-2 rounded-[12px] border border-white/10 bg-[#141416] p-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-14 rounded-full bg-[#FF1724]/70" />
              <div className="h-2 flex-1 rounded-full bg-white/10" />
            </div>
            <div className="grid gap-2">
              <div className="h-6 rounded-lg bg-white/5" />
              <div className="h-6 rounded-lg bg-[#FF1724]/10" />
              <div className="h-8 rounded-lg bg-white/5" />
            </div>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#1C1C1F] p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className={pill}>Online</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#AAA9AD]">site</span>
          </div>
          <div className="rounded-[12px] border border-white/10 bg-[#141416] p-2.5">
            <div className="mb-2 flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF1724]" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-[#F5F5F3]">
              Site online
            </div>
          </div>
        </div>
      );
    case 6:
      return (
        <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#1C1C1F] p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className={pill}>Suporte</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#AAA9AD]">24/7</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#141416] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#F5F5F3]">
              <span>Site</span>
              <span className="text-[#FF1724]">Online</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#141416] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#F5F5F3]">
              <span>SSL</span>
              <span className="text-[#FF1724]">Ativo</span>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#141416] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#F5F5F3]">
              <span>Domínio</span>
              <span className="text-[#FF1724]">Ativo</span>
            </div>
          </div>
        </div>
      );
    case 7:
      return (
        <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#1C1C1F] p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className={pill}>Continuidade</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#AAA9AD]">v2</span>
          </div>
          <div className="space-y-2 rounded-[12px] border border-white/10 bg-[#141416] p-3">
            {['Hospedagem ✓', 'Domínio ✓', 'Suporte ✓', 'Manutenção ✓'].map((value) => (
              <div key={value} className="rounded-lg bg-white/5 px-2.5 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#F5F5F3]">
                {value}
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

function ProcessSection() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const firstStepRef = useRef<HTMLDivElement | null>(null);
  const lastStepRef = useRef<HTMLDivElement | null>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [progress, setProgress] = useState(0);
  const [lineGeometry, setLineGeometry] = useState({ top: 0, height: 0 });

  useEffect(() => {
    let frameId: number | null = null;

    const updateProgress = () => {
      const timeline = timelineRef.current;
      const firstNode = firstStepRef.current;
      const lastNode = lastStepRef.current;

      if (!timeline || !firstNode || !lastNode) return;

      const timelineRect = timeline.getBoundingClientRect();
      const firstRect = firstNode.getBoundingClientRect();
      const lastRect = lastNode.getBoundingClientRect();

      const firstCenter = firstRect.top - timelineRect.top + firstRect.height / 2;
      const lastCenter = lastRect.top - timelineRect.top + lastRect.height / 2;
      const lineHeight = Math.max(lastCenter - firstCenter, 0);
      const viewportAnchor = window.innerHeight * 0.5;
      const current = viewportAnchor - timelineRect.top;

      const next = lineHeight === 0 ? 0 : (current - firstCenter) / lineHeight;
      const clamped = Math.min(Math.max(next, 0), 1);

      setLineGeometry({ top: firstCenter, height: lineHeight });
      setProgress(clamped);
      frameId = null;
    };

    const handleScroll = () => {
      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section id="processo" className="relative bg-[#141416] py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1220px] px-5 md:px-8">
        <header className="max-w-3xl">
          <span className="font-montserrat text-xs font-bold tracking-[0.18em] text-[#FF1724]">
            COMO FUNCIONA
          </span>

          <h2 className="mt-4 font-montserrat text-3xl font-extrabold leading-tight text-[#F5F5F3] md:text-5xl">
            Da primeira conversa ao site publicado.
          </h2>

          <p className="mt-5 max-w-2xl font-open-sans text-base leading-7 text-[#AAA9AD]">
            Um processo simples e transparente. Você acompanha as principais etapas desde o primeiro contato até a publicação — e continua contando com suporte depois que o site entra no ar.
          </p>
        </header>

        <div ref={timelineRef} className="relative mt-16 md:mt-24">
          <div
            className="absolute left-[26px] z-0 w-px -translate-x-1/2 bg-white/10 md:left-1/2"
            style={{ top: `${lineGeometry.top}px`, height: `${lineGeometry.height}px` }}
          />
          <div
            className="absolute left-[26px] z-0 w-px origin-top -translate-x-1/2 bg-[#FF1724] will-change-transform md:left-1/2"
            style={{
              top: `${lineGeometry.top}px`,
              height: `${lineGeometry.height}px`,
              transform: `translateX(-50%) scaleY(${progress})`,
            }}
          />

          <div className="space-y-2 md:space-y-0">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const itemRef = index === 0 ? firstStepRef : index === processSteps.length - 1 ? lastStepRef : null;
              const node = nodeRefs.current[index];
              const timeline = timelineRef.current;
              const firstNode = firstStepRef.current;
              const lastNode = lastStepRef.current;
              const timelineRect = timeline?.getBoundingClientRect();
              const firstRect = firstNode?.getBoundingClientRect();
              const lastRect = lastNode?.getBoundingClientRect();
              const nodeRect = node?.getBoundingClientRect();
              const firstCenter = timelineRect && firstRect
                ? firstRect.top - timelineRect.top + firstRect.height / 2
                : 0;
              const lastCenter = timelineRect && lastRect
                ? lastRect.top - timelineRect.top + lastRect.height / 2
                : 0;
              const nodeCenter = timelineRect && nodeRect
                ? nodeRect.top - timelineRect.top + nodeRect.height / 2
                : firstCenter;
              const stepProgress = lastCenter > firstCenter
                ? (nodeCenter - firstCenter) / (lastCenter - firstCenter)
                : 0;
              const reached = lineGeometry.height > 0 && progress >= stepProgress;

              return (
                <article
                  key={step.id}
                  data-process-step={step.id}
                  className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-3 py-5 sm:gap-4 md:grid-cols-[minmax(260px,1fr)_80px_minmax(0,1fr)] md:items-center md:gap-10 md:py-10"
                >
                  <div className="hidden md:block">{renderMicrovisual(step)}</div>

                  <div className="relative z-10 flex justify-start md:justify-center">
                    <div
                      ref={(element) => {
                        nodeRefs.current[index] = element;
                        if (itemRef) itemRef.current = element;
                      }}
                      className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300 ease-out md:h-[52px] md:w-[52px] ${
                        reached
                          ? 'border-[#FF1724] bg-[#FF1724] text-white'
                          : 'border-white/15 bg-[#141416] text-[#66666B]'
                      }`}
                    >
                      <Icon className="h-5 w-5 md:h-[26px] md:w-[26px]" strokeWidth={1.9} aria-hidden="true" />
                    </div>
                  </div>

                  <div
                    className={`max-w-2xl transition-all duration-500 ease-out motion-reduce:transition-none ${
                      reached ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-55'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-montserrat text-sm font-bold text-[#FF1724]">
                        {String(step.id).padStart(2, '0')}
                      </span>
                      <span className="font-montserrat text-xs font-bold tracking-[0.12em] text-[#AAA9AD] uppercase">
                        {step.label}
                      </span>
                    </div>

                    <h3 className="mt-4 font-montserrat text-2xl font-bold leading-tight text-[#F5F5F3] md:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-xl font-open-sans text-[15px] leading-7 text-[#AAA9AD]">
                      {step.description}
                    </p>

                    {step.highlight && (
                      <p className="mt-5 max-w-xl border-l-2 border-[#FF1724] pl-4 font-open-sans text-sm font-semibold leading-6 text-[#F5F5F3]">
                        {step.highlight}
                      </p>
                    )}
                  </div>

                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
