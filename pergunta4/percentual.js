const faturamentoTotal = 181759.98; // Somatório dos valores de faturamento de todos os estados

const estados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  OUTROS: 19849.53,
};

const percentual = {};
    for (let estado in estados) {
    percentual[estado] = (estados[estado] / faturamentoTotal) * 100;
    }

    for (let estado in percentual) {
    console.log( ` O percentual do estado ${estado} é de: ${percentual[estado].toFixed(2)}%`);
    }