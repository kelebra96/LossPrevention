const mongoose = require('mongoose');

const checkListDiarioSchema = new mongoose.Schema({
  data: {
    type: Date,
    required: true,
    default: Date.now,
  },
  filial: {
    type: String,
    required: true,
  },
  gerente: {
    type: String,
    required: true,
  },
  fiscalPiso: {
    type: String,
    required: true,
  },
  auditor: {
    type: String,
    required: true,
  },
  horaInicio: {
    type: String,
    required: true,
  },
  horaFim: {
    type: String,
    required: true,
  },
  interrupcao: {
    verificada: {
      type: Boolean,
      required: true,
    },
    itensIdentificados: {
      type: String,
    },
    acoesTomadas: {
      type: String,
    },
    observacoes: {
      type: String,
    },
    src: {
      type: String,
    },
  },
  movimentacaoInterna: {
    verificada: {
      type: Boolean,
      required: true,
    },
    diferencasIdentificados: {
      type: String,
    },
    acoesTomadas: {
      type: String,
    },
    observacoes: {
      type: String,
    },
    src: {
      type: String,
    },
  },
  negativo: {
    verificada: {
      type: Boolean,
      required: true,
    },
    causasIdentificados: {
      type: String,
    },
    acoesTomadas: {
      type: String,
    },
    observacoes: {
      type: String,
    },
    src: {
      type: String,
    },
  },
  auditoriaPreco: {
    verificada: {
      type: Boolean,
      required: true,
    },
    diferencasIdentificados: {
      type: String,
    },
    acoesTomadas: {
      type: String,
    },
    observacoes: {
      type: String,
    },
    src: {
      type: String,
    },
  },
  auditoriaValidade: {
    verificada: {
      type: Boolean,
      required: true,
    },
    itensIdentificados: {
      type: String,
    },
    observacoes: {
      type: String,
    },
    src: {
      type: String,
    },
  },
  controleTemperatura: {
    verificada: {
      type: Boolean,
      required: true,
    },
    inrregularidadesIdentificados: {
      type: String,
    },
    acoesTomadas: {
      type: String,
    },
    observacoes: {
      type: String,
    },
    src: {
      type: String,
    },
  },
  controleRodizio: {
    verificada: {
      type: Boolean,
      required: true,
    },
    produtosAntigosAFrente: {
      type: Boolean,
      required: true,
    },
    acoesTomadas: {
      type: String,
    },
    observacoes: {
      type: String,
    },
    src: {
      type: String,
    },
  },
  agenda: {
    verificada: {
      type: Boolean,
      required: true,
    },
    acoesPreventivas: {
      type: Boolean,
      required: true,
    },
    acoesTomadas: {
      type: String,
    },
    observacoes: {
      type: String,
    },
    src: {
      type: String,
    },
  },
});

const CheckListDiario = mongoose.model('CheckListDiario', checkListDiarioSchema);
module.exports = CheckListDiario;