import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDashed,
  Globe,
  LayoutTemplate,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Sparkles,
  X,
} from 'lucide-react';
import { SiBehance, SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';
import profileImage from './assets/leolocs-profile.jpg';
import logoWhite from './assets/leolocs-logo-white.png';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
];

const showProjectsSection = false;
const showTrustSection = false;

const services = [
  {
    title: 'Landing Pages',
    headline: 'Uma página construída para transformar atenção em ação.',
    description:
      'Landing pages desenvolvidas estrategicamente para apresentar uma oferta, serviço ou campanha de forma clara e conduzir o visitante até uma ação específica — como solicitar orçamento, entrar em contato ou se tornar um lead.',
    ideal: ['campanhas', 'anúncios', 'lançamentos', 'geração de leads', 'apresentação de serviços', 'validação de novas ofertas'],
    includes: ['estrutura estratégica da página', 'UI/UX Design', 'desenvolvimento responsivo', 'integração com WhatsApp', 'CTAs estratégicos', 'otimização de performance', 'configuração para publicação'],
    cta: 'QUERO UMA LANDING PAGE',
    link: 'https://wa.me/5585999893938?text=Ol%C3%A1%21%20Acessei%20o%20site%20da%20Leolocs%20e%20gostaria%20de%20conversar%20sobre%20uma%20Landing%20Page.',
    align: 'right',
  },
  {
    title: 'Sites Institucionais',
    headline: 'Sua empresa disponível, profissional e preparada para ser encontrada.',
    description:
      'Desenvolvimento de sites profissionais para apresentar sua empresa, seus serviços, seus diferenciais e suas formas de contato com clareza, organização e credibilidade.',
    ideal: ['empresas', 'clínicas', 'escritórios', 'profissionais liberais', 'negócios locais', 'prestadores de serviços'],
    includes: ['planejamento da arquitetura do site', 'design personalizado', 'páginas institucionais', 'área de serviços', 'apresentação da empresa', 'integração com WhatsApp', 'responsividade', 'SEO técnico básico', 'domínio e publicação'],
    cta: 'QUERO UM SITE PROFISSIONAL',
    link: 'https://wa.me/5585999893938?text=Ol%C3%A1%21%20Acessei%20o%20site%20da%20Leolocs%20e%20gostaria%20de%20conversar%20sobre%20a%20cria%C3%A7%C3%A3o%20de%20um%20site%20para%20minha%20empresa.',
    align: 'left',
  },
  {
    title: 'UI/UX Design',
    headline: 'Interfaces bonitas precisam, antes de tudo, ser fáceis de usar.',
    description:
      'Criação e planejamento de interfaces digitais modernas, organizadas e intuitivas, desenvolvidas para proporcionar uma experiência clara para o usuário e fortalecer a percepção profissional da marca.',
    ideal: [],
    includes: ['pesquisa de referência', 'estrutura da interface', 'wireframes', 'prototipação', 'Design System', 'componentes', 'layout responsivo', 'protótipos navegáveis', 'revisão da experiência do usuário'],
    cta: 'PRECISO DE UM DESIGN',
    link: 'https://wa.me/5585999893938?text=Ol%C3%A1%21%20Acessei%20o%20site%20da%20Leolocs%20e%20gostaria%20de%20conversar%20sobre%20UI%2FUX%20Design.',
    align: 'right',
  },
  {
    title: 'Manutenção & Suporte',
    headline: 'Seu site precisa continuar funcionando depois da publicação.',
    description:
      'Acompanhamento para manter seu site atualizado, seguro e funcionando corretamente, além de permitir melhorias e ajustes conforme seu negócio evolui.',
    ideal: [],
    includes: ['atualização de conteúdos', 'pequenas alterações', 'correção de problemas', 'acompanhamento técnico', 'ajustes responsivos', 'otimizações', 'suporte relacionado à hospedagem', 'acompanhamento de domínio'],
    cta: 'QUERO MANTER MEU SITE ATUALIZADO',
    link: 'https://wa.me/5585999893938?text=Ol%C3%A1%21%20Acessei%20o%20site%20da%20Leolocs%20e%20gostaria%20de%20conversar%20sobre%20manuten%C3%A7%C3%A3o%20e%20suporte.',
    align: 'left',
  },
];

const faqItems = [
  {
    question: 'Quanto custa criar um site?',
    answer:
      'O investimento depende da estrutura, quantidade de páginas, funcionalidades e nível de personalização do projeto. Depois de entender sua necessidade, preparo uma proposta com escopo, prazo e investimento definidos.',
  },
  {
    question: 'Quanto tempo demora para o site ficar pronto?',
    answer:
      'O prazo varia de acordo com a complexidade do projeto e com a velocidade das aprovações e envio dos materiais. O cronograma é definido antes do início do desenvolvimento.',
  },
  {
    question: 'Preciso já possuir domínio e hospedagem?',
    answer:
      'Não. Caso você ainda não possua domínio ou hospedagem, posso orientar e ajudar na configuração necessária para colocar o site no ar.',
  },
  {
    question: 'O site funciona no celular?',
    answer:
      'Sim. Os projetos são desenvolvidos de forma responsiva para proporcionar uma boa experiência em computadores, tablets e smartphones.',
  },
  {
    question: 'Posso solicitar alterações durante o projeto?',
    answer:
      'Sim. O processo inclui etapas de revisão para garantir que o resultado esteja alinhado ao que foi definido no início do projeto.',
  },
  {
    question: 'Vocês trabalham com manutenção?',
    answer:
      'Sim. Após a publicação, também posso oferecer acompanhamento, manutenção e atualizações de acordo com a necessidade do projeto.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'As condições de pagamento são apresentadas na proposta comercial e definidas antes do início do projeto.',
  },
  {
    question: 'Meu site poderá aparecer no Google?',
    answer:
      'O projeto pode ser preparado com boas práticas técnicas de SEO e estrutura adequada para indexação. Posicionamento nos resultados, entretanto, também depende de estratégia de conteúdo, concorrência e outros fatores.',
  },
];

const benefitItems = [
  { title: 'Estratégia', description: 'Antes de começar o design, entendemos o negócio, o público e o objetivo principal do projeto.', icon: Briefcase },
  { title: 'Design', description: 'Cada interface é pensada para transmitir profissionalismo, organizar as informações e facilitar a tomada de decisão.', icon: LayoutTemplate },
  { title: 'Desenvolvimento', description: 'O design é transformado em um site rápido, responsivo, moderno e preparado para funcionar nos principais dispositivos.', icon: MonitorSmartphone },
  { title: 'Acompanhamento', description: 'Você acompanha o desenvolvimento do projeto e recebe orientação até o momento da publicação.', icon: Sparkles },
];

const projectCards = [
  {
    name: 'Cardeal do Raio-X',
    type: 'SITE INSTITUCIONAL',
    text: 'Uma presença digital desenvolvida para apresentar os serviços da clínica de forma clara, profissional e acessível.',
    tags: ['Web Design', 'Desenvolvimento', 'Responsivo'],
  },
  {
    name: 'Studio Azur',
    type: 'LANDING PAGE',
    text: 'Estrutura focada em conversão para apresentar proposta de valor de forma direta e impactante.',
    tags: ['Landing Page', 'Estratégia', 'Conversão'],
  },
  {
    name: 'Mobi Casa',
    type: 'SITE INSTITUCIONAL',
    text: 'Projeto com foco em credibilidade, serviços e aumento da qualidade da experiência em mobile.',
    tags: ['UX', 'Comercial', 'Mobile'],
  },
];

const whatsappBase = 'https://wa.me/5585999893938';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-bg text-text font-body antialiased">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto max-w-[1220px] rounded-[14px] border border-border bg-[#1a1a1d]/70 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <a href="#inicio" className="flex items-center gap-3" aria-label="Leolocs início">
              <img src={logoWhite} alt="Leolocs logo" className="h-7 w-30 object-contain" />
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-sm font-semibold text-white/70 transition-colors hover:text-brand"
                >
                  <span className="after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:after:scale-x-100">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <a
                href={`${whatsappBase}?text=${encodeURIComponent('Olá! Acessei o site da Leolocs e gostaria de conversar sobre um projeto.')}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-bold tracking-[0.12em] text-white transition hover:bg-brandHover"
              >
                SOLICITAR ORÇAMENTO
              </a>
            </div>

            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {mobileOpen && (
            <div className="mt-4 space-y-3 border-t border-white/10 pt-4 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-white/80 hover:text-brand"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`${whatsappBase}?text=${encodeURIComponent('Olá! Acessei o site da Leolocs e gostaria de conversar sobre um projeto.')}`}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-xs font-bold tracking-[0.12em] text-white"
              >
                SOLICITAR ORÇAMENTO
              </a>
            </div>
          )}
        </div>
      </header>

      <main id="inicio" className="scroll-smooth">
        <section className="relative overflow-hidden pt-32 md:pt-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(189,20,20,0.18),_transparent_35%)]" />
          <div className="absolute inset-0 bg-grid bg-[size:36px_36px] opacity-20" />
          <div className="relative mx-auto grid max-w-[1220px] gap-12 px-4 pb-16 pt-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-20">
            <div>
              <h1 className="max-w-[620px] text-4xl font-black leading-[1.05] tracking-[-0.06em] text-white md:text-6xl">
                Seu site precisa <span className="text-brand">criar confiança e gerar contato.</span>
              </h1>
              <p className="mt-6 max-w-[620px] text-lg leading-8 text-muted">
                Transformo a presença digital do seu negócio em uma experiência clara, profissional e persuasiva — para que clientes entendam seu valor, confiem no seu trabalho e saiam do site prontos para conversar.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent('Olá! Acessei o site da Leolocs e gostaria de conversar sobre um projeto.')}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold tracking-[0.12em] text-white transition hover:bg-brandHover"
                >
                  SOLICITAR ORÇAMENTO <ArrowRight size={16} />
                </a>
                <a
                  href="#processo"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/0 px-6 py-3.5 text-sm font-bold tracking-[0.12em] text-white transition hover:border-brand/50 hover:text-brand"
                >
                  COMO FUNCIONA <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-5 text-sm text-white/80">
                <span className="inline-flex items-center gap-2"><BadgeCheck className="text-brand" size={16} /> Design responsivo</span>
                <span className="inline-flex items-center gap-2"><BadgeCheck className="text-brand" size={16} /> Desenvolvimento personalizado</span>
                <span className="inline-flex items-center gap-2"><BadgeCheck className="text-brand" size={16} /> Suporte do início à publicação</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-brand/20 blur-3xl" />
              <div className="absolute -right-10 bottom-8 h-28 w-28 rounded-full bg-brand/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#141416]/80 p-4">
                <div className="mb-4 flex items-center justify-between rounded-[12px] border border-white/10 bg-[#1b1b1d] px-4 py-3">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#BD1414]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted">leolocs</span>
                </div>
                <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-[18px] border border-white/10 bg-[#1a1a1d] p-4">
                    <div className="mb-4 h-48 rounded-[12px] bg-[radial-gradient(circle_at_top,_rgba(189,20,20,0.25),_transparent_30%),linear-gradient(135deg,#17171a,#111113)] p-3">
                      <div className="flex h-full items-end rounded-[10px] border border-white/10 bg-white/5 p-3">
                        <div className="w-full rounded-[10px] border border-brand/40 bg-[#121215] p-3">
                          <div className="mb-2 h-2 w-20 rounded-full bg-brand/80" />
                          <div className="mb-2 h-2 w-32 rounded-full bg-white/15" />
                          <div className="mb-3 h-20 rounded-[8px] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(189,20,20,0.18))]" />
                          <div className="flex gap-2">
                            <span className="h-8 flex-1 rounded-md bg-white/5" />
                            <span className="h-8 flex-1 rounded-md bg-brand/40" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs uppercase tracking-[0.18em] text-brand">Projeto destaque</p>
                    <h2 className="mt-2 text-xl font-bold text-white">Presença digital que converte</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-[18px] border border-white/10 bg-[#1a1a1d] p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-muted">Conversão</p>
                        <span className="rounded-full bg-brand/15 px-2 py-1 text-[10px] font-bold text-brand">+48%</span>
                      </div>
                      <div className="h-20 rounded-xl bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(189,20,20,0.12))] p-3">
                        <div className="flex h-full items-end justify-between gap-2">
                          <span className="w-2 rounded-full bg-white/20" style={{ height: '35%' }} />
                          <span className="w-2 rounded-full bg-white/20" style={{ height: '60%' }} />
                          <span className="w-2 rounded-full bg-white/20" style={{ height: '45%' }} />
                          <span className="w-2 rounded-full bg-brand/90" style={{ height: '90%' }} />
                          <span className="w-2 rounded-full bg-brand/90" style={{ height: '85%' }} />
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[18px] border border-white/10 bg-[#1a1a1d] p-4">
                      <div className="mb-3 flex items-center gap-2 text-white">
                        <MonitorSmartphone className="text-brand" size={18} />
                        <span className="text-sm font-semibold">Responsivo</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 rounded-lg bg-white/5" />
                        <div className="h-16 rounded-lg bg-brand/20" />
                        <div className="h-16 rounded-lg bg-white/5" />
                        <div className="h-16 rounded-lg bg-transparent border border-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-[1220px] px-4 py-20">
          <div className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brand">SUA PRESENÇA DIGITAL</div>
          <h2 className="max-w-[760px] text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
            Seu site deveria trabalhar pelo seu negócio — não apenas existir na internet.
          </h2>
          <p className="mt-5 max-w-[900px] text-lg text-muted">
            Antes de entrar em contato com uma empresa, muitos clientes pesquisam, analisam e formam uma primeira impressão pela internet. Um site confuso, ultrapassado ou pouco profissional pode fazer uma boa oportunidade desaparecer antes mesmo da primeira conversa.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ['Seu negócio ainda não transmite todo o profissionalismo que possui.', 'Uma presença digital fraca pode diminuir a percepção de valor da sua empresa, mesmo quando o serviço entregue é excelente.'],
              ['Seu site atual não acompanha mais seu negócio.', 'Design ultrapassado, navegação confusa e uma experiência ruim no celular dificultam a comunicação e afastam potenciais clientes.'],
              ['Os visitantes chegam, mas não sabem qual é o próximo passo.', 'Sem uma estrutura clara e chamadas para ação estratégicas, seu site pode receber acessos sem transformar esse interesse em contatos reais.'],
            ].map(([title, text], index) => (
              <div key={index} className="rounded-[18px] border border-border bg-card p-6">
                <div className="mb-4 h-11 w-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-sm font-bold text-brand">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold leading-tight text-white">{title}</h3>
                <p className="mt-4 text-base leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-2xl font-semibold text-white md:text-3xl">
            É aqui que <span className="text-brand">design, estratégia e desenvolvimento precisam trabalhar juntos.</span>
          </div>
        </section>

        <section id="servicos" className="mx-auto max-w-[1220px] px-4 py-20">
          <div className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brand">SOLUÇÕES</div>
          <h2 className="max-w-[820px] text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
            Soluções digitais que ajudam o cliente a entender seu valor antes de você precisar explicar.
          </h2>
          <p className="mt-5 max-w-[900px] text-lg text-muted">
            Cada projeto é pensado para fortalecer a percepção do seu negócio, melhorar a experiência do visitante e transformar interesse em contato real.
          </p>

          <div className="mt-12 space-y-8">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-[24px] border border-border bg-card p-4 md:p-8"
              >
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <div className={service.align === 'right' ? 'md:order-1' : 'md:order-2'}>
                    <div className="mb-4 flex items-center gap-4">
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">{service.title}</span>
                    </div>
                    <h3 className="text-3xl font-black tracking-[-0.05em] text-white md:text-4xl">{service.headline}</h3>
                    <p className="mt-5 text-base leading-8 text-muted">{service.description}</p>

                    {service.ideal.length > 0 && (
                      <div className="mt-6">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">Ideal para</p>
                        <div className="flex flex-wrap gap-2">
                          {service.ideal.map((item) => (
                            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-6">
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">O projeto pode incluir</p>
                      <ul className="space-y-2 text-sm text-muted">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check size={16} className="mt-0.5 text-brand" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={service.link}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-xs font-bold tracking-[0.12em] text-white transition hover:bg-brandHover"
                    >
                      {service.cta} <ArrowRight size={15} />
                    </a>
                  </div>

                  <div className={service.align === 'right' ? 'md:order-2' : 'md:order-1'}>
                    <div className="rounded-[22px] border border-white/10 bg-[#17171a] p-4">
                      <div className="mb-4 flex items-center justify-between rounded-[12px] border border-white/10 bg-[#1b1b1d] px-4 py-3">
                        <div className="flex gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#BD1414]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                        </div>
                        <span className="text-[9px] uppercase tracking-[0.18em] text-muted">dashboard</span>
                      </div>
                      <div className="rounded-[12px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(189,20,20,0.2),_transparent_30%),linear-gradient(135deg,#18181b,#111113)] p-5">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <div className="mb-2 h-2.5 w-28 rounded-full bg-white/15" />
                            <div className="h-2 w-20 rounded-full bg-brand/80" />
                          </div>
                          <div className="rounded-full border border-brand/30 bg-brand/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
                            {index + 1}/4
                          </div>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="h-24 rounded-[10px] bg-white/5" />
                          <div className="h-24 rounded-[10px] bg-brand/15" />
                          <div className="h-20 rounded-[10px] border border-white/10 bg-white/5" />
                          <div className="h-20 rounded-[10px] border border-brand/30 bg-brand/10" />
                        </div>
                        <div className="mt-4 flex gap-2">
                          <span className="h-2.5 w-12 rounded-full bg-brand/60" />
                          <span className="h-2.5 w-20 rounded-full bg-white/10" />
                          <span className="h-2.5 w-14 rounded-full bg-white/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1220px] px-4 py-20">
          <div className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brand">MAIS DO QUE UM SITE</div>
          <h2 className="max-w-[740px] text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
            Um projeto digital pensado do primeiro contato à publicação.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefitItems.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[18px] border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand/40">
                <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 p-3 text-brand">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-[0.06em] text-white">{title}</h3>
                <p className="mt-4 text-base leading-7 text-muted">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {showProjectsSection && (
          <section id="projetos" className="mx-auto max-w-[1220px] px-4 py-20">
            <div className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brand">TRABALHOS</div>
            <h2 className="max-w-[760px] text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
              Projetos criados para negócios reais.
            </h2>
            <p className="mt-5 max-w-[900px] text-lg text-muted">
              Cada projeto começa com um desafio diferente. O objetivo é transformar esse desafio em uma experiência digital que comunique melhor, transmita confiança e facilite o contato com o cliente.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {projectCards.map((project) => (
                <article key={project.name} className="overflow-hidden rounded-[20px] border border-border bg-card">
                  <div className="h-60 rounded-b-[18px] border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(189,20,20,0.12),_transparent_35%),linear-gradient(135deg,#1b1b1d,#111113)] p-4">
                    <div className="flex h-full items-end rounded-[12px] border border-white/10 bg-white/5 p-3">
                      <div className="w-full rounded-[10px] border border-white/10 bg-[#121215] p-3">
                        <div className="mb-2 h-2 w-16 rounded-full bg-brand/80" />
                        <div className="mb-3 h-2 w-28 rounded-full bg-white/10" />
                        <div className="h-20 rounded-[8px] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(189,20,20,0.15))]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand">{project.type}</div>
                    <h3 className="mt-3 text-2xl font-bold text-white">{project.name}</h3>
                    <p className="mt-3 text-base leading-7 text-muted">{project.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="#contato" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-brand">
                      VER PROJETO <ChevronRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="mx-auto max-w-[1220px] px-4 py-20">
          <div className="rounded-[24px] border border-border bg-panel p-8 md:p-12">
            <p className="text-balance text-3xl font-black leading-tight tracking-[-0.05em] text-white md:text-5xl">
              Seu cliente não precisa entender de tecnologia. Ele precisa entender por que deveria escolher sua empresa.
            </p>
            <p className="mt-6 max-w-[760px] text-lg text-muted">
              Meu trabalho é transformar essa mensagem em uma experiência digital clara, profissional e fácil de usar.
            </p>
          </div>
        </section>

        <section id="processo" className="mx-auto max-w-[1220px] px-4 py-20">
          <div className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brand">COMO FUNCIONA</div>
          <h2 className="max-w-[700px] text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
            Do primeiro contato ao site publicado.
          </h2>
          <p className="mt-5 max-w-[900px] text-lg text-muted">
            Um processo simples e transparente para que você saiba exatamente o que acontece em cada etapa do projeto.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {[
              ['Diagnóstico', 'Conversamos sobre sua empresa, público, objetivos, referências e necessidades para entender qual solução realmente faz sentido.'],
              ['Estratégia', 'Definimos estrutura, páginas, conteúdo, funcionalidades e direção visual antes do desenvolvimento.'],
              ['Design', 'A interface é construída buscando equilíbrio entre identidade visual, experiência do usuário e objetivo comercial.'],
              ['Desenvolvimento', 'O design é transformado em uma experiência responsiva, funcional e otimizada para diferentes dispositivos.'],
              ['Publicação', 'Depois da revisão e aprovação final, o projeto é preparado para domínio, hospedagem e lançamento.'],
            ].map(([step, text]) => (
              <div key={step} className="rounded-[18px] border border-border bg-card p-5">
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brand">{step}</div>
                <p className="text-base leading-7 text-muted">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={`${whatsappBase}?text=${encodeURIComponent('Olá! Acessei o site da Leolocs e gostaria de conversar sobre meu projeto.')}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-brand transition hover:bg-brand hover:text-white"
            >
              CONVERSAR SOBRE MEU PROJETO <ArrowRight size={15} />
            </a>
          </div>
        </section>

        {showTrustSection && (
          <section className="mx-auto max-w-[1220px] px-4 py-20">
            <div className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brand">CONFIANÇA</div>
            <h2 className="max-w-[760px] text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
              A experiência de quem já confiou no meu trabalho.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[
                ['“O processo foi bem estruturado, a comunicação foi clara e o resultado entregou exatamente o que precisava para posicionar nossos serviços.”', 'Maria Souza', 'Luna Consultoria', 'Diretora'],
                ['“A nova presença digital mudou a percepção do nosso negócio e deixou muito mais fácil para clientes entenderem o que fazemos.”', 'Rafael Costa', 'Studio Norte', 'Sócio'],
                ['“O site ficou profissional, moderno e funcional. Sem dúvida, uma decisão que trouxe mais credibilidade para a empresa.”', 'Ana Paula', 'Medição & Co.', 'Fundadora'],
              ].map(([quote, name, company, role]) => (
                <div key={name} className="rounded-[20px] border border-border bg-card p-6">
                  <div className="mb-4 flex items-center gap-2 text-brand">
                    <CircleDashed size={18} />
                    <CircleDashed size={18} />
                    <CircleDashed size={18} />
                  </div>
                  <p className="text-lg leading-8 text-white/90">{quote}</p>
                  <div className="mt-8 border-t border-white/10 pt-4">
                    <div className="font-bold text-white">{name}</div>
                    <div className="text-sm text-muted">{company} · {role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section id="sobre" className="mx-auto max-w-[1220px] px-4 py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-[24px] border border-border bg-card p-4">
              <div className="rounded-[18px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(189,20,20,0.18),_transparent_35%),linear-gradient(135deg,#1b1b1d,#121214)] p-4">
                <img
                  src={profileImage}
                  alt="Leonardo Leolocs"
                  className="h-[500px] w-full rounded-[14px] object-cover object-center"
                />
              </div>
            </div>

            <div>
              <div className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brand">SOBRE MIM</div>
              <h2 className="text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
                Design, tecnologia e estratégia trabalhando para o mesmo objetivo.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
                <p>Olá, sou Leonardo, designer e desenvolvedor responsável pela Leolocs.</p>
                <p>Meu trabalho une design de interfaces e desenvolvimento web para ajudar empresas e profissionais a construírem uma presença digital mais clara, moderna e profissional.</p>
                <p>Não acredito em criar um site apenas para “estar na internet”. Cada projeto precisa ter um propósito: apresentar melhor um negócio, fortalecer sua credibilidade e facilitar o caminho entre o interesse do visitante e o contato com a empresa.</p>
                <p>Por isso, participo diretamente das etapas de planejamento, design, desenvolvimento e publicação de cada projeto.</p>
              </div>
              <a
                href={`${whatsappBase}?text=${encodeURIComponent('Olá! Acessei o site da Leolocs e gostaria de conversar sobre um projeto.')}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold tracking-[0.12em] text-white transition hover:bg-brandHover"
              >
                SOLICITAR ORÇAMENTO <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1220px] px-4 py-20">
          <div className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brand">DÚVIDAS FREQUENTES</div>
          <h2 className="max-w-[760px] text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
            Antes de começarmos, algumas respostas.
          </h2>

          <div className="mt-12 space-y-4">
            {faqItems.map((item, index) => {
              const open = openFaq === index;
              return (
                <div key={item.question} className="rounded-[18px] border border-border bg-card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-lg font-bold text-white">{item.question}</span>
                    <ChevronDown className={`transition ${open ? 'rotate-180 text-brand' : 'text-white/60'}`} size={20} />
                  </button>
                  {open && <div className="border-t border-white/10 px-5 py-4 text-base leading-7 text-muted">{item.answer}</div>}
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-[1220px] px-4 py-20">
          <div className="rounded-[28px] border border-brand/25 bg-[radial-gradient(circle_at_top,_rgba(189,20,20,0.2),_transparent_35%),linear-gradient(180deg,#1d1d20,#151518)] p-8 md:p-12">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand">VAMOS COMEÇAR?</div>
            <h2 className="mt-5 max-w-[850px] text-3xl font-black tracking-[-0.05em] text-white md:text-6xl">
              Seu próximo cliente pode estar procurando exatamente pelo que sua empresa oferece.
            </h2>
            <p className="mt-5 max-w-[640px] text-lg text-muted">
              Vamos construir uma presença digital que mostre por que ele deveria escolher você.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`${whatsappBase}?text=${encodeURIComponent('Olá! Acessei o site da Leolocs e gostaria de conversar sobre um projeto.')}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold tracking-[0.12em] text-white transition hover:bg-brandHover"
              >
                SOLICITAR ORÇAMENTO <ArrowRight size={16} />
              </a>
              <a
                href={whatsappBase}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/0 px-6 py-3.5 text-sm font-bold tracking-[0.12em] text-white transition hover:border-brand/50 hover:text-brand"
              >
                FALAR PELO WHATSAPP <MessageCircle size={16} />
              </a>
            </div>

          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-white/10 bg-[#0E0E10]">
        <div className="mx-auto grid max-w-[1220px] gap-10 px-4 py-12 md:grid-cols-2 xl:grid-cols-5">
          <div className="xl:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logoWhite} alt="Leolocs logo" className="h-8 w-30 object-contain" />
            </div>
            <p className="mt-5 max-w-[420px] text-base leading-7 text-muted">
              Design e desenvolvimento de experiências digitais para negócios que querem construir uma presença mais profissional.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Navegação</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {navItems.map((item) => (
                <li key={item.href}><a href={item.href} className="hover:text-brand">{item.label}</a></li>
              ))}
              <li><a href="#contato" className="hover:text-brand">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Serviços</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li><a href="#servicos" className="hover:text-brand">Landing Pages</a></li>
              <li><a href="#servicos" className="hover:text-brand">Sites Institucionais</a></li>
              <li><a href="#servicos" className="hover:text-brand">UI/UX Design</a></li>
              <li><a href="#servicos" className="hover:text-brand">Manutenção</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li><a href={whatsappBase} className="hover:text-brand">WhatsApp</a></li>
              <li><a href="https://t.me/leolocs" className="hover:text-brand">Telegram</a></li>
              <li><a href="mailto:leolocs04@gmail.com" className="hover:text-brand">E-mail</a></li>
            </ul>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1220px] flex-col gap-5 border-t border-white/10 px-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted">© 2026 Leolocs. Todos os direitos reservados. | CNPJ 65.870.050/0001-75</div>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" className="hover:text-brand">Política de Privacidade</a>
            <a href="#" className="hover:text-brand">Termos de Uso</a>
            <div className="flex items-center gap-3">
              <a href="https://www.behance.net/leolocs" className="text-white/70 transition hover:text-brand" aria-label="Behance"><SiBehance className="h-4 w-4" /></a>
              <a href="https://www.linkedin.com/in/leolocs" className="text-white/70 transition hover:text-brand" aria-label="LinkedIn"><FaLinkedinIn className="h-4 w-4" /></a>
              <a href="https://github.com/leolocs" className="text-white/70 transition hover:text-brand" aria-label="GitHub"><SiGithub className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
