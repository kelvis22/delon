import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'pt-PT',
  exception: {
    403: `Desculpa, você não tem autorização para aceder a esta página`,
    404: `Desculpa, essa página não existe`,
    500: `Desculpa, erro do servidor`,
    backToHome: 'Voltar ao inicio',
  },
  noticeIcon: {
    emptyText: 'Sem dados',
    clearText: 'Limpar',
  },
  reuseTab: {
    close: 'Fechar aba',
    closeOther: 'Fechar outras abas',
    closeRight: 'Fechar abas da direita',
    clear: 'Limpar abas',
  },
  tagSelect: {
    expand: 'Expandir',
    collapse: 'Colapsar',
  },
  miniProgress: {
    target: 'Alvo: ',
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} de {{total}}',
  },
  sf: {
    submit: 'Submeter',
    reset: 'Resetar',
    search: 'Pesquisar',
    edit: 'Guardar',
    addText: 'Adicionar',
    removeText: 'Remover',
    checkAllText: 'Verificar tudo',
  },
} as FullLocaleData;
