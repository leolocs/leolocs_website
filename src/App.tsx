import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ChartNoAxesCombined,
  ChevronDown,
  ChevronRight,
  CircleDashed,
  Menu,
  MonitorSmartphone,
  MousePointerClick,
  PanelsTopLeft,
  Search,
  SlidersHorizontal,
  TrendingUp,
  X,
} from 'lucide-react';
import { SiBehance, SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import DotField from './components/DotField';
import profileImage from './assets/leolocs-profile.webp';
import logoWhite from './assets/leolocs-logo-white.webp';
import ProcessSection from './sections/Process';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Como funciona', href: '#processo' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
];

const showProjectsSection = false;
const showTrustSection = false;
const heroWords = ['sua presença digital', 'sua marca', 'seu negócio', 'sua confiança'];

const faqItems = [
  {
    question: 'Quanto tempo demora para o site ficar pronto?',
    answer:
      'O prazo varia de acordo com a complexidade do projeto e com a velocidade das aprovações e envio dos materiais como logo e imagens em boa qualidade. Caso não tenha as imagens em boa qualidade, será utilizada IA para gerar.',
  },
  {
    question: 'Preciso já possuir domínio e hospedagem?',
    answer:
      'Não é necessário. Caso você ainda não possua domínio ou hospedagem, ao contratar o desenvolvimento do site comigo, o domínio e a hospedagem estão inclusos no orçamento.',
  },
  {
    question: 'Posso solicitar alterações durante o projeto?',
    answer:
      'Sim. Após o desenvolvimento do protótipo inicial do site, você poderá revisar todo o escopo do projeto, solicitando as alterações necessárias.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'O pagamento pode ser feito com 50% do valor do projeto para darmos início e o restante na entrega do site com o domínio registrado, ou o pagamento total através do cartão de crédito.',
  },
  {
    question: 'Meu site vai aparecer no Google?',
    answer:
      'Todo projeto é desenvolvido e preparado com boas técnicas de SEO e estrutura adequada para indexação. Posicionamento nos resultados, entretanto, também depende de estratégia de conteúdo, concorrência e outros fatores.',
  },
];

const whySiteItems = [
  {
    icon: BadgeCheck,
    title: 'Autoridade e confiança',
    highlight: 'Cause uma boa impressão antes mesmo do primeiro contato.',
    description:
      'Um site profissional reforça a credibilidade do seu negócio e transmite mais confiança para quem ainda está conhecendo sua empresa.',
    closing: 'Sua presença digital também comunica o valor do seu trabalho.',
  },
  {
    icon: PanelsTopLeft,
    title: 'Tudo em um só lugar',
    highlight: 'Facilite o acesso às informações do seu negócio.',
    description:
      'Serviços, diferenciais e formas de contato ficam organizados em um único espaço, sem depender de publicações ou mensagens espalhadas.',
    closing: 'Seu cliente encontra rapidamente o que precisa.',
  },
  {
    icon: Search,
    title: 'Busca orgânica',
    highlight: 'Seja encontrado por quem já procura pelo que você oferece.',
    description:
      'Com uma estrutura adequada e boas práticas de SEO, seu site pode aparecer nas pesquisas do Google relacionadas ao seu negócio.',
    closing: 'Mais um caminho para potenciais clientes chegarem até você.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Controle total',
    highlight: 'Sua marca apresentada do seu jeito.',
    description:
      'No seu site, você decide o que destacar, como apresentar seus serviços e qual caminho o visitante deve seguir.',
    closing: 'Um espaço próprio, sem depender das limitações das redes sociais.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Dados e melhorias',
    highlight: 'Entenda melhor o comportamento dos seus visitantes.',
    description:
      'Você pode acompanhar acessos, conteúdos mais visualizados e ações realizadas dentro do site.',
    closing: 'Use dados reais para identificar oportunidades de melhoria.',
  },
  {
    icon: TrendingUp,
    title: 'Mais oportunidades',
    highlight: 'Aproveite melhor cada oportunidade de atrair e conquistar novos clientes.',
    description:
      'Seu site pode centralizar acessos vindos de anúncios, redes sociais, indicações e pesquisas em um único destino preparado para apresentar seu negócio. Uma página clara também ajuda o visitante a entender sua oferta e chegar rapidamente a ações como solicitar orçamento ou falar pelo WhatsApp.',
    closing: 'Mais valor para cada visitante e menos barreiras entre o interesse e o primeiro contato.',
  },
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
  const [profileTilt, setProfileTilt] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentWord((previousWord) => (previousWord + 1) % heroWords.length);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      anchors: true,
      smoothWheel: true,
      lerp: 0.1,
    });

    let animationFrameId = 0;
    const updateScroll = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(updateScroll);
    };

    animationFrameId = requestAnimationFrame(updateScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const fadeElements = document.querySelectorAll<HTMLElement>('.fade-in');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      fadeElements.forEach((element) => element.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    fadeElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  function handleProfilePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;

    setProfileTilt({
      x: pointerY * -8,
      y: pointerX * 8,
    });
  }

  function resetProfileTilt() {
    setProfileTilt({ x: 0, y: 0 });
  }

  return (
    <div className="min-h-screen bg-bg text-text font-body antialiased">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto max-w-[1220px] rounded-[14px] border border-white/[0.15] bg-[#1a1a1d]/15 px-8 py-3 backdrop-blur-[10px] backdrop-brightness-[0.91] backdrop-saturate-[0.4]">
          <div className="flex items-center gap-6">
            <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="Leolocs início">
              <img src={logoWhite} alt="Leolocs logo" width="676" height="132" className="block h-7 w-[143px] object-contain" />
            </a>

            <nav aria-label="Navegação principal" className="ml-auto hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-sm font-semibold text-white/70 transition-colors hover:text-brandText"
                >
                  <span className="after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:after:scale-x-100">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a
                href={`${whatsappBase}?text=${encodeURIComponent('Olá! Acessei o site da Leolocs e gostaria de conversar sobre um projeto.')}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-xs font-bold tracking-[0.12em] text-white transition hover:bg-brand"
              >
                PEDIR MEU SITE
              </a>
            </div>

            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="ml-auto rounded-full border border-white/10 bg-white/5 p-2 text-white lg:hidden"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {mobileOpen && (
            <div className="mt-4 space-y-3 border-t border-white/10 pt-4 lg:hidden">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-white/80 hover:text-brandText"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`${whatsappBase}?text=${encodeURIComponent('Olá! Acessei o site da Leolocs e gostaria de conversar sobre um projeto.')}`}
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-xs font-bold tracking-[0.12em] text-white"
              >
                PEDIR MEU SITE
              </a>
            </div>
          )}
        </div>
      </header>

      <main id="inicio" className="scroll-smooth">
        <section className="fade-in relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(189,20,20,0.18),_transparent_35%)]" />
          <div className="absolute inset-0 bg-grid bg-[size:36px_36px] opacity-20" />
          <DotField
            aria-hidden="true"
            className="z-0 opacity-50"
            dotRadius={1.5}
            dotSpacing={20}
            bulgeStrength={32}
            glowRadius={120}
            sparkle={false}
            waveAmplitude={3}
            cursorRadius={260}
            cursorForce={0.07}
            bulgeOnly={false}
            gradientFrom="rgba(255, 225, 225, 0.8)"
            gradientTo="#c8c8c8"
            glowColor="#350000"
          />
          <div className="relative mx-auto flex max-w-[1220px] justify-center px-4 pb-16 pt-4 text-center md:pb-20 md:pt-6">
            <div className="flex max-w-[850px] flex-col items-center">
              <h1 className="max-w-[850px] text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white md:text-6xl">
                <span className="block">Sites profissionais que fortalecem</span>
                <span key={heroWords[currentWord]} className="hero-word block text-brandText">{heroWords[currentWord]}</span>
              </h1>
              <p className="mt-6 max-w-[720px] text-lg leading-8 text-muted">
                Crio sites e landing pages modernos, rápidos e estratégicos para empresas e profissionais que querem transmitir mais credibilidade, apresentar seus serviços com clareza e transformar visitantes em possíveis clientes.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent('Olá! Acessei o site da Leolocs e gostaria de conversar sobre um projeto.')}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand bg-transparent px-6 py-3.5 text-sm font-bold tracking-[0.04em] text-white transition hover:bg-brand hover:text-white"
                >
                  Conversar sobre meu projeto <ArrowRight size={16} />
                </a>
                <a
                  href="#processo"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/0 px-6 py-3.5 text-sm font-bold tracking-[0.12em] text-white transition hover:border-brand/50 hover:text-brandText"
                >
                  Como funciona <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-5 text-sm text-white/80">
                <span className="inline-flex items-center gap-2"><BadgeCheck className="text-brandText" size={16} /> Projeto sob medida</span>
                <span className="inline-flex items-center gap-2"><BadgeCheck className="text-brandText" size={16} /> Performance e responsividade</span>
                <span className="inline-flex items-center gap-2"><BadgeCheck className="text-brandText" size={16} /> 1 ano de suporte incluso</span>
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="fade-in relative mx-auto max-w-[1220px] px-4 py-20 md:py-24">
          <div className="max-w-[760px]">
            <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-brandText">BENEFÍCIOS</div>
            <h2 className="text-3xl font-black tracking-[-0.06em] text-white md:text-[3.2rem] md:leading-[1.04]">
              Seu negócio merece uma presença digital à altura do que você entrega.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted md:text-lg md:leading-8">
              Um site profissional fortalece sua imagem, organiza suas informações e cria novos caminhos para potenciais clientes encontrarem e conhecerem o seu negócio.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whySiteItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group flex h-full flex-col rounded-[16px] border border-white/[0.08] bg-[#1C1C1F] p-5 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(255,23,36,0.30)] md:p-7"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border border-[rgba(255,23,36,0.16)] bg-[rgba(255,23,36,0.08)] text-[#FF1724] md:h-[46px] md:w-[46px]">
                    <Icon className="h-[20px] w-[20px] md:h-[22px] md:w-[22px]" />
                  </div>

                  <h3 className="mt-5 text-[1.15rem] font-bold leading-[1.2] tracking-[-0.04em] text-white md:text-[1.2rem]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] font-semibold leading-6 text-[#F5F5F3] md:text-[15px]">
                    {item.highlight}
                  </p>

                  <p className="mt-3 text-[14px] leading-[1.65] text-[#AAA9AD]">
                    {item.description}
                  </p>

                  <p className="mt-4 text-[13px] font-semibold leading-5 text-[#D4D3D5] md:text-[14px]">
                    {item.closing}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-14 rounded-[18px] border border-white/[0.08] bg-[#1C1C1F] p-6 md:p-8">
            <h3 className="max-w-[720px] text-[1.8rem] font-bold leading-tight tracking-[-0.05em] text-white md:text-[2.3rem]">
              Redes sociais chamam atenção. Seu site transforma interesse em confiança.
            </h3>
            <p className="mt-4 max-w-[620px] text-base leading-7 text-[#AAA9AD] md:text-lg">
              Construa um espaço profissional para apresentar seu negócio com clareza e facilitar o contato com novos clientes.
            </p>

            <a
              href={`${whatsappBase}?text=${encodeURIComponent('Olá! Quero um site profissional para o meu negócio.')}`}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-brand bg-transparent px-5 py-3 text-sm font-bold tracking-[0.12em] text-white transition hover:bg-brand hover:text-white md:px-7"
            >
              QUERO UM SITE PROFISSIONAL <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <ProcessSection />

        <section id="diferenciais" className="fade-in mx-auto max-w-[1220px] scroll-mt-28 px-4 py-20">
          <div className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brandText">DIFERENCIAIS</div>
          <h2 className="max-w-[900px] text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
            O que você ganha ao desenvolver seu projeto comigo:
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Performance',
                intro: 'Um site leve, rápido e preparado para entregar uma boa experiência.',
                paragraphs: [
                  'O site é desenvolvido com uma estrutura enxuta e otimizada, evitando recursos, plugins e dependências desnecessárias que podem aumentar o tempo de carregamento.',
                  'O projeto também é preparado com boas práticas de performance, como otimização de imagens, carregamento eficiente de fontes e arquivos, código organizado e redução de elementos que possam prejudicar a velocidade da página.',
                  'Além disso, o site não depende de CMS quando esse tipo de plataforma não é necessário para o projeto, permitindo maior controle sobre o que realmente é carregado no navegador.',
                ],
                emphasis: 'Na prática, isso significa uma página mais leve, rápida e eficiente para quem acessa seu negócio.',
              },
              {
                number: '02',
                title: 'Personalização',
                intro: 'Um site feito sob medida para o seu negócio.',
                paragraphs: [
                  'Seu projeto não começa a partir de um layout pronto.',
                  'A estrutura, organização das seções, identidade visual e experiência da página são desenvolvidas de acordo com sua empresa, seus serviços, seu público e o objetivo principal do projeto.',
                ],
                emphasis: 'O resultado é um site desenvolvido para representar o seu negócio — e não apenas adaptar sua marca a um modelo pronto.',
              },
              {
                number: '03',
                title: 'Atendimento direto',
                intro: 'Durante o projeto, você fala diretamente comigo — o profissional responsável pelo design e desenvolvimento do seu site.',
                paragraphs: [
                  'Sem precisar passar por diversos setores, atendentes ou processos burocráticos para explicar uma alteração.',
                  'Isso torna a comunicação mais simples, reduz ruídos e facilita ajustes durante e depois do desenvolvimento.',
                ],
                emphasis: 'Você fala diretamente com quem está construindo o seu projeto.',
              },
              {
                number: '04',
                title: 'Segurança',
                intro: 'Seu site é publicado utilizando serviços de hospedagem confiáveis e configurado com certificado SSL, garantindo conexão HTTPS e proteção dos dados transmitidos entre o visitante e a página.',
                paragraphs: [
                  'Além disso, a estrutura do projeto evita recursos e extensões desnecessárias, reduzindo pontos que poderiam exigir manutenção ou atualização constante.',
                ],
                emphasis: 'Você recebe um site preparado para operar com mais segurança e confiabilidade desde o lançamento.',
              },
              {
                number: '05',
                title: 'Responsividade',
                intro: 'Seu site é desenvolvido para funcionar corretamente em computadores, tablets e smartphones.',
                paragraphs: [
                  'A estrutura, o conteúdo, os botões e os elementos da interface são adaptados para diferentes tamanhos de tela, garantindo uma navegação clara e confortável independentemente do dispositivo utilizado pelo seu cliente.',
                ],
                emphasis: 'Seu negócio continua bem apresentado, seja no computador ou no celular.',
              },
              {
                number: '06',
                title: 'Suporte',
                intro: 'O acompanhamento não termina depois que o site é publicado.',
                paragraphs: [
                  'Enquanto seu site permanecer hospedado comigo, você continua contando com suporte para questões relacionadas ao funcionamento da página, hospedagem, domínio e ajustes técnicos necessários para manter o projeto operando corretamente.',
                  'Isso significa que, caso surja alguma dúvida, problema ou necessidade de orientação, você continua tendo um contato direto para resolver essas questões sem precisar procurar outro profissional.',
                ],
                emphasis: 'Seu site continua com suporte mesmo depois de estar no ar.',
              },
            ].map((benefit) => (
              <article key={benefit.number} className="rounded-[18px] border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand/40">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-bold text-brandText">{benefit.number}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-brandText">{benefit.title}</span>
                </div>
                <h3 className="text-xl font-bold leading-tight text-white">{benefit.intro}</h3>
                <div className="mt-5 space-y-4 text-base leading-7 text-muted">
                  {benefit.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <p className="mt-5 font-semibold leading-7 text-white">{benefit.emphasis}</p>
              </article>
            ))}
          </div>
        </section>

        {showProjectsSection && (
          <section id="projetos" className="fade-in mx-auto max-w-[1220px] px-4 py-20">
            <div className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brandText">TRABALHOS</div>
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
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-brandText">{project.type}</div>
                    <h3 className="mt-3 text-2xl font-bold text-white">{project.name}</h3>
                    <p className="mt-3 text-base leading-7 text-muted">{project.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="#contato" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-brandText">
                      VER PROJETO <ChevronRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="fade-in mx-auto max-w-[1220px] px-4 py-20">
          <div className="rounded-[24px] border border-border bg-panel p-8 md:p-12">
            <p className="text-balance text-3xl font-black leading-tight tracking-[-0.05em] text-white md:text-5xl">
              Seu cliente não precisa entender de tecnologia. Ele precisa entender por que deveria escolher sua empresa.
            </p>
            <p className="mt-6 max-w-[760px] text-lg text-muted">
              Meu trabalho é transformar essa mensagem em uma experiência digital clara, profissional e fácil de usar.
            </p>
          </div>
        </section>

        {showTrustSection && (
          <section className="fade-in mx-auto max-w-[1220px] px-4 py-20">
            <div className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brandText">CONFIANÇA</div>
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
                  <div className="mb-4 flex items-center gap-2 text-brandText">
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

        <section id="sobre" className="fade-in mx-auto max-w-[1220px] px-4 py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div
              onPointerMove={handleProfilePointerMove}
              onPointerLeave={resetProfileTilt}
              style={{
                transform: `perspective(900px) rotateX(${profileTilt.x}deg) rotateY(${profileTilt.y}deg)`,
              }}
              className="profile-tilt overflow-hidden rounded-[24px] border border-border bg-card"
            >
              <img
                src={profileImage}
                alt="Leonardo, fundador da Leolocs"
                width="1573"
                height="2048"
                loading="lazy"
                decoding="async"
                className="h-[500px] w-full object-cover object-center"
              />
            </div>

            <div>
              <div className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brandText">SOBRE MIM</div>
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
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold tracking-[0.12em] text-white transition hover:bg-brand"
              >
                PEDIR MEU SITE <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="fade-in scroll-mt-28 mx-auto max-w-[1220px] px-4 py-20">
          <h2 className="max-w-[760px] text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
            Dúvidas Frequentes
          </h2>

          <div className="mt-12 space-y-4">
            {faqItems.map((item, index) => {
              const open = openFaq === index;
              return (
                <div key={item.question} className="rounded-[18px] border border-border bg-card overflow-hidden">
                  <button
                    type="button"
                    aria-controls={`faq-answer-${index}`}
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-lg font-bold text-white">{item.question}</span>
                    <ChevronDown className={`transition ${open ? 'rotate-180 text-brandText' : 'text-white/60'}`} size={20} />
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    aria-hidden={!open}
                    className={`faq-answer ${open ? 'faq-answer-open' : ''}`}
                  >
                    <div className="min-h-0 overflow-hidden border-t border-white/10 px-5 py-1 text-base leading-7 text-muted">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="fade-in mx-auto max-w-[1220px] px-4 py-20">
          <div className="rounded-[28px] border border-brand/25 bg-[radial-gradient(circle_at_top,_rgba(189,20,20,0.2),_transparent_35%),linear-gradient(180deg,#1d1d20,#151518)] p-8 md:p-12">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-brandText">VAMOS COMEÇAR?</div>
            <h2 className="mt-5 max-w-[850px] text-3xl font-black tracking-[-0.05em] text-white md:text-6xl">
              Seu próximo cliente pode estar procurando exatamente pelo que sua empresa oferece.
            </h2>
            <p className="mt-5 max-w-[640px] text-lg text-muted">
              Vamos construir uma presença digital que mostre por que ele deveria escolher você.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`${whatsappBase}?text=${encodeURIComponent('Olá! Acessei o site da Leolocs e gostaria de conversar sobre um projeto.')}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand bg-transparent px-6 py-3.5 text-sm font-bold tracking-[0.04em] text-white transition hover:bg-brand hover:text-white"
              >
                Começar meu projeto <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </section>
      </main>

      <footer id="contato" className="border-t border-white/10 bg-[#0E0E10]">
        <div className="mx-auto grid max-w-[1220px] justify-items-start gap-10 px-6 py-12 md:grid-cols-2 xl:grid-cols-4">
          <div className="justify-self-start xl:col-span-2">
            <div className="flex items-center justify-start gap-3">
              <img src={logoWhite} alt="Leolocs logo" width="676" height="132" className="block h-8 w-[163px] object-contain" />
            </div>
            <p className="mt-5 max-w-[420px] text-base leading-7 text-muted">
              Design e desenvolvimento de experiências digitais para negócios que querem construir uma presença mais profissional.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brandText">Navegação</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {navItems.map((item) => (
                <li key={item.label}><a href={item.href} className="hover:text-brandText">{item.label}</a></li>
              ))}
              <li><a href="#contato" className="hover:text-brandText">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brandText">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li><a href={whatsappBase} className="hover:text-brandText">WhatsApp</a></li>
              <li><a href="https://t.me/leolocs" className="hover:text-brandText">Telegram</a></li>
              <li><a href="mailto:leolocs04@gmail.com" className="hover:text-brandText">E-mail</a></li>
            </ul>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1220px] flex-col gap-5 border-t border-white/10 px-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted">© 2026 Leolocs. Todos os direitos reservados. | CNPJ 65.870.050/0001-75</div>
          <div className="flex items-center gap-4 text-white/70">
            <div className="flex items-center gap-3">
              <a href="https://www.behance.net/leolocs" className="text-white/70 transition hover:text-brandText" aria-label="Behance"><SiBehance aria-hidden="true" className="h-4 w-4" /></a>
              <a href="https://www.linkedin.com/in/leolocs" className="text-white/70 transition hover:text-brandText" aria-label="LinkedIn"><FaLinkedinIn aria-hidden="true" className="h-4 w-4" /></a>
              <a href="https://github.com/leolocs" className="text-white/70 transition hover:text-brandText" aria-label="GitHub"><SiGithub aria-hidden="true" className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
