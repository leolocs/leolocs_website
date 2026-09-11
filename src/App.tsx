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
  { label: 'Processo', href: '#servicos' },
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

const benefitItems = [
  { title: 'Estratégia', description: 'Antes de começar o design, entendemos o negócio, o público e o objetivo principal do projeto.', icon: Briefcase },
  { title: 'Design', description: 'Cada interface é pensada para transmitir profissionalismo, organizar as informações e facilitar a tomada de decisão.', icon: LayoutTemplate },
  { title: 'Desenvolvimento', description: 'O design é transformado em um site rápido, responsivo, moderno e preparado para funcionar nos principais dispositivos.', icon: MonitorSmartphone },
  { title: 'Acompanhamento', description: 'Você acompanha o desenvolvimento do projeto e recebe orientação até o momento da publicação.', icon: Sparkles },
];

const whySiteItems = [
  {
    label: 'AUTORIDADE E CONFIANÇA',
    title: 'Uma presença profissional fortalece a imagem do seu negócio.',
    paragraphs: [
      'Um site bem estruturado, com boa apresentação visual e informações organizadas, ajuda a transmitir mais seriedade e profissionalismo.',
      'Antes de entrar em contato, muitos clientes pesquisam sobre uma empresa ou profissional. Ter um espaço próprio e bem apresentado pode reforçar a confiança nessa primeira impressão.',
    ],
    emphasis: 'Seu site também comunica o nível de cuidado que você tem com o seu negócio.',
  },
  {
    label: 'ABERTO 24h',
    title: 'Seu negócio continua disponível mesmo quando você não está atendendo.',
    paragraphs: [
      'O site permite que um potencial cliente conheça seus serviços, veja seus projetos, encontre informações importantes e descubra como entrar em contato a qualquer momento.',
      'Ele não substitui o atendimento, mas ajuda o visitante a avançar sozinho nas primeiras etapas da decisão.',
    ],
    emphasis: 'Enquanto você cuida do seu negócio, seu site continua apresentando o que você oferece.',
  },
  {
    label: 'BUSCA ORGÂNICA',
    title: 'Mais uma forma de ser encontrado por quem já procura pelo seu serviço.',
    paragraphs: [
      'Com uma estrutura adequada e boas práticas de SEO, seu site pode ser indexado pelo Google e aparecer em pesquisas relacionadas ao seu negócio.',
      'Isso cria um canal adicional de descoberta além de redes sociais, indicações e anúncios.',
    ],
    emphasis: 'Seu site pode aproximar sua empresa de pessoas que já estão procurando exatamente pelo que você oferece.',
  },
  {
    label: 'CONTROLE TOTAL',
    title: 'Sua marca, seu conteúdo e sua experiência do seu jeito.',
    paragraphs: ['Em um site próprio, você tem muito mais controle sobre como seu negócio é apresentado.'],
    list: [
      'quais serviços ganham destaque;',
      'quais informações aparecem primeiro;',
      'como os visitantes navegam;',
      'quais chamadas para ação serão utilizadas;',
      'como sua identidade visual será aplicada.',
    ],
    emphasis: 'Seu site é um espaço construído para representar o seu negócio — não para se encaixar em um formato pronto.',
  },
  {
    label: 'MAIS OPORTUNIDADES DE VENDA',
    title: 'Facilite o caminho entre interesse e contato.',
    paragraphs: [
      'Um site bem organizado pode apresentar seus serviços, responder dúvidas, mostrar diferenciais e conduzir o visitante até uma ação clara, como pedir orçamento ou falar pelo WhatsApp.',
      'Isso ajuda a reduzir dúvidas durante a decisão e torna o processo de contato mais simples.',
    ],
    emphasis: 'Quanto mais fácil for entender sua oferta e dar o próximo passo, menor a chance de perder um potencial cliente por falta de informação.',
  },
  {
    label: 'DADOS ÚTEIS',
    title: 'Entenda melhor como as pessoas utilizam o seu site.',
    paragraphs: ['Com ferramentas de análise, é possível acompanhar informações como:'],
    list: [
      'páginas mais acessadas;',
      'origem dos visitantes;',
      'dispositivos utilizados;',
      'conteúdos com maior interesse;',
      'cliques em determinados botões;',
      'caminhos mais utilizados dentro do site.',
    ],
    emphasis: 'Em vez de depender apenas de percepção, você passa a ter informações reais sobre como seu site está sendo utilizado.',
  },
  {
    label: 'AQUISIÇÃO MAIS EFICIENTE',
    title: 'Transforme seu site em um ativo permanente da sua presença digital.',
    paragraphs: [
      'Anúncios deixam de gerar tráfego quando o investimento é interrompido. Um site continua disponível e pode receber visitantes por diferentes canais ao longo do tempo.',
      'Ele também permite concentrar campanhas, conteúdo, SEO, indicações e redes sociais em um único destino.',
    ],
    emphasis: 'Isso não elimina custos de divulgação, mas ajuda a aproveitar melhor cada oportunidade de atrair e converter visitantes.',
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

  return (
    <div className="min-h-screen bg-bg text-text font-body antialiased">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="mx-auto max-w-[1220px] rounded-[14px] border border-white/[0.15] bg-[#1a1a1d]/15 px-4 py-3 backdrop-blur-[10px] backdrop-brightness-[0.91] backdrop-saturate-[0.4]">
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
                Sites profissionais que valorizam seu negócio e facilitam o contato com novos clientes.
              </h1>
              <p className="mt-6 max-w-[620px] text-lg leading-8 text-muted">
                Crio sites e landing pages modernos, rápidos e estratégicos para empresas e profissionais que querem transmitir mais credibilidade, apresentar seus serviços com clareza e transformar visitantes em possíveis clientes.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent('Olá! Acessei o site da Leolocs e gostaria de conversar sobre um projeto.')}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand bg-transparent px-6 py-3.5 text-sm font-bold tracking-[0.04em] text-white transition hover:bg-brand hover:text-white"
                >
                  Conversar sobre meu projeto <ArrowRight size={16} />
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/0 px-6 py-3.5 text-sm font-bold tracking-[0.12em] text-white transition hover:border-brand/50 hover:text-brand"
                >
                  Como funciona <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-5 text-sm text-white/80">
                <span className="inline-flex items-center gap-2"><BadgeCheck className="text-brand" size={16} /> Projeto sob medida</span>
                <span className="inline-flex items-center gap-2"><BadgeCheck className="text-brand" size={16} /> Performance e responsividade</span>
                <span className="inline-flex items-center gap-2"><BadgeCheck className="text-brand" size={16} /> 1 ano de suporte incluso</span>
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
          <h2 className="max-w-[900px] text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
            Por que você deveria ter um site?
          </h2>
          <p className="mt-5 max-w-[900px] text-lg leading-8 text-muted">
            Um site profissional não serve apenas para “estar na internet”. Ele ajuda sua empresa a transmitir confiança, ser encontrada com mais facilidade e apresentar seus serviços de forma mais estratégica.
          </p>

          <div className="mt-12 space-y-6">
            {whySiteItems.map((item, index) => (
              <article key={item.label} className="rounded-[18px] border border-border bg-card p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-sm font-bold text-brand">0{index + 1}</span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand">{item.label}</div>
                    <h3 className="mt-3 max-w-[800px] text-2xl font-bold leading-tight text-white md:text-3xl">{item.title}</h3>
                    <div className="mt-5 max-w-[900px] space-y-4 text-base leading-7 text-muted">
                      {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    {item.list && (
                      <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-muted marker:text-brand">
                        {item.list.map((listItem) => <li key={listItem}>{listItem}</li>)}
                      </ul>
                    )}
                    <p className="mt-5 max-w-[900px] font-semibold leading-7 text-white">{item.emphasis}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="servicos" className="mx-auto max-w-[1220px] px-4 py-20">
          <div className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brand">COMO FUNCIONA</div>
          <h2 className="max-w-[900px] text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
            Veja como é o processo do desenvolvimento do seu site:
          </h2>
          <p className="mt-5 max-w-[900px] text-xl font-semibold text-white">Um processo simples, direto e sem complicação.</p>
          <p className="mt-4 max-w-[900px] text-lg leading-8 text-muted">
            Você acompanha cada etapa do projeto e só avança depois de visualizar uma proposta inicial. Do primeiro contato à publicação, todo o processo é pensado para tornar a contratação clara, segura e previsível.
          </p>

          <div className="mt-12 space-y-5">
            {[
              {
                number: '01',
                label: 'PRIMEIRO CONTATO',
                title: 'Você me conta o que precisa.',
                paragraphs: [
                  'Conversamos sobre seu negócio, o tipo de site ou landing page que deseja criar, seus serviços, público, referências e principais objetivos.',
                  'A partir dessas informações, começo a estruturar uma proposta visual inicial para o projeto.',
                ],
              },
              {
                number: '02',
                label: 'PROTÓTIPO INICIAL',
                title: 'Você visualiza a ideia antes de fechar o projeto.',
                paragraphs: [
                  'Desenvolvo uma primeira versão para que você consiga entender como sua empresa poderá ser apresentada no site.',
                  'Essa etapa permite visualizar a estrutura, o estilo e a proposta geral do projeto antes de seguir para a versão final.',
                ],
                emphasis: 'Você consegue avaliar a proposta antes de realizar o pagamento.',
              },
              {
                number: '03',
                label: 'APROVAÇÃO E PAGAMENTO',
                title: 'Gostou da proposta? Seguimos para a versão final.',
                paragraphs: [
                  'Após a aprovação do protótipo inicial, realizamos o pagamento combinado e o projeto entra na etapa de refinamento.',
                  'A partir desse momento, trabalho na finalização da página e nos ajustes necessários para preparar o site para publicação.',
                ],
              },
              {
                number: '04',
                label: 'REFINAMENTO E REVISÃO',
                title: 'Ajustamos os detalhes até o projeto ficar alinhado ao seu negócio.',
                paragraphs: [
                  'Nesta etapa são realizadas revisões de conteúdo, textos, imagens e demais elementos apresentados no site.',
                  'Caso seja necessário substituir informações, corrigir textos ou alterar materiais visuais, os ajustes são realizados antes da publicação.',
                ],
                emphasis: 'O objetivo é garantir que o conteúdo final represente corretamente sua empresa e seus serviços.',
              },
              {
                number: '05',
                label: 'DOMÍNIO, HOSPEDAGEM E PUBLICAÇÃO',
                title: 'Eu cuido da parte técnica para colocar seu site no ar.',
                paragraphs: [
                  'Depois da aprovação final, realizo a configuração do domínio e da hospedagem necessários para publicar o projeto.',
                  'O site é então colocado online e preparado para ser acessado pelos seus clientes.',
                ],
                emphasis: 'Você recebe o projeto publicado, funcionando e disponível em seu próprio domínio.',
              },
              {
                number: '06',
                label: '1 ANO DE SUPORTE E MANUTENÇÃO',
                title: 'O acompanhamento continua depois da publicação.',
                paragraphs: [
                  'Durante o primeiro ano, você continua contando comigo para o suporte necessário ao funcionamento do site.',
                  'Esse período inclui o acompanhamento relacionado à hospedagem, domínio e pequenas manutenções de conteúdo.',
                  'O suporte pode incluir:',
                ],
                list: [
                  'acompanhamento da hospedagem;',
                  'suporte relacionado ao domínio;',
                  'correções de funcionamento;',
                  'pequenas atualizações de textos;',
                  'substituição de informações;',
                  'alterações simples de conteúdo;',
                  'ajustes técnicos pontuais.',
                ],
                emphasis: 'Seu site continua acompanhado durante todo o primeiro ano após a publicação.',
              },
              {
                number: '07',
                label: 'CONTINUIDADE APÓS O PRIMEIRO ANO',
                title: 'Seu site pode continuar funcionando e sendo acompanhado sem você precisar cuidar da parte técnica.',
                paragraphs: [
                  'Após o primeiro ano, o serviço passa para um plano mensal de continuidade.',
                  'Esse plano é responsável por manter o site publicado, hospedado e acompanhado, além de cobrir as necessidades básicas de manutenção.',
                  'O plano inclui:',
                ],
                list: [
                  'hospedagem do site;',
                  'suporte técnico;',
                  'acompanhamento do domínio;',
                  'renovação do domínio quando necessário;',
                  'pequenas alterações de textos;',
                  'atualização de informações;',
                  'substituição de conteúdos simples;',
                  'pequenas manutenções no conteúdo já existente.',
                ],
                emphasis: 'Assim, você continua com domínio, hospedagem e suporte centralizados em um único serviço.',
              },
            ].map((step) => (
              <article key={step.number} className="rounded-[20px] border border-border bg-card p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="text-sm font-bold text-brand">{step.number}</span>
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{step.label}</div>
                    <h3 className="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl">{step.title}</h3>
                    <div className="mt-5 max-w-[920px] space-y-4 text-base leading-7 text-muted">
                      {step.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    {step.list && (
                      <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-muted marker:text-brand">
                        {step.list.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                    {step.emphasis && <p className="mt-5 max-w-[920px] font-semibold leading-7 text-white">{step.emphasis}</p>}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <article className="mt-5 rounded-[20px] border border-brand/30 bg-brand/5 p-6 md:p-8">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-brand">O QUE NÃO ESTÁ INCLUÍDO NA MANUTENÇÃO</div>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-white md:text-3xl">Novas funcionalidades são tratadas como novas demandas de desenvolvimento.</h3>
            <p className="mt-5 max-w-[920px] text-base leading-7 text-muted">
              O plano de continuidade não contempla alterações que exijam um novo trabalho de desenvolvimento.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">Mudanças como:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-muted marker:text-brand">
              <li>criação de novas funcionalidades;</li>
              <li>novas páginas complexas;</li>
              <li>integrações com novos sistemas;</li>
              <li>alterações estruturais significativas;</li>
              <li>redesign da interface;</li>
              <li>desenvolvimento de novas áreas;</li>
              <li>recursos que não faziam parte do projeto original;</li>
            </ul>
            <p className="mt-5 font-semibold leading-7 text-white">
              A manutenção mantém o projeto funcionando e atualizado. Novas funcionalidades são tratadas como novas demandas de desenvolvimento.
            </p>
          </article>
        </section>

        <section className="mx-auto max-w-[1220px] px-4 py-20">
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
                  <span className="text-sm font-bold text-brand">{benefit.number}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand">{benefit.title}</span>
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand bg-transparent px-6 py-3.5 text-sm font-bold tracking-[0.04em] text-white transition hover:bg-brand hover:text-white"
              >
                Começar meu projeto <ArrowRight size={16} />
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
