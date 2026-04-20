import { useEffect, useState } from "react";

function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    const valorSalvo = localStorage.getItem(chave);

    if (valorSalvo) {
      return JSON.parse(valorSalvo);
    }

    return valorInicial;
  });

  useEffect(() => {
    localStorage.setItem(chave, JSON.stringify(valor));
  }, [chave, valor]);

  return [valor, setValor];
}

export default useLocalStorage;