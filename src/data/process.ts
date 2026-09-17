import {
  CircleCheck,
  LayoutTemplate,
  LifeBuoy,
  MessageCircle,
  PencilRuler,
  RefreshCw,
  Rocket,
  type LucideIcon,
} from 'lucide-react';

export interface ProcessStep {
  id: number;
  label: string;
  title: string;
  description: string;
  highlight?: string;
  icon: LucideIcon;
  phase: 'development' | 'after';
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    label: 'PRIMEIRO CONTATO',
    title: 'Você me conta o que precisa.',
    description:
      'Conversamos sobre seu negócio, objetivos, público e referências para entender qual solução faz mais sentido.',
    icon: MessageCircle,
    phase: 'development',
  },
  {
    id: 2,
    label: 'PROTÓTIPO INICIAL',
    title: 'Você visualiza a proposta antes de fechar.',
    description:
      'Desenvolvo uma primeira versão para apresentar a estrutura, o estilo e a direção visual do projeto.',
    highlight: 'Você avalia a proposta antes de realizar o pagamento.',
    icon: LayoutTemplate,
    phase: 'development',
  },
  {
    id: 3,
    label: 'APROVAÇÃO E PAGAMENTO',
    title: 'Gostou da proposta? Seguimos para a versão final.',
    description:
      'Depois da aprovação do protótipo inicial, realizamos o pagamento combinado e o projeto entra na etapa de refinamento.',
    icon: CircleCheck,
    phase: 'development',
  },
  {
    id: 4,
    label: 'REVISÃO E REFINAMENTO',
    title: 'Ajustamos os detalhes.',
    description:
      'Revisamos textos, imagens e informações para deixar o projeto alinhado ao seu negócio antes da publicação.',
    icon: PencilRuler,
    phase: 'development',
  },
  {
    id: 5,
    label: 'DOMÍNIO E PUBLICAÇÃO',
    title: 'Eu cuido da parte técnica.',
    description: 'Após a aprovação final, configuro domínio, hospedagem e publico o site.',
    highlight: 'Você recebe o projeto funcionando e disponível em seu próprio domínio.',
    icon: Rocket,
    phase: 'development',
  },
  {
    id: 6,
    label: '1 ANO DE SUPORTE',
    title: 'O acompanhamento continua depois da publicação.',
    description:
      'Durante o primeiro ano, você continua contando comigo para suporte relacionado ao funcionamento do site, hospedagem, domínio e pequenas atualizações de conteúdo.',
    icon: LifeBuoy,
    phase: 'after',
  },
  {
    id: 7,
    label: 'CONTINUIDADE',
    title: 'Depois do primeiro ano, você pode continuar com tudo centralizado comigo.',
    description:
      'O plano mensal mantém hospedagem, domínio, suporte e pequenas manutenções de conteúdo.',
    highlight:
      'Novas páginas, funcionalidades ou alterações estruturais são avaliadas e orçadas separadamente.',
    icon: RefreshCw,
    phase: 'after',
  },
];
