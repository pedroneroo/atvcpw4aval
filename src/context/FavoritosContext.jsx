import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useLocalStorage("favoritos", []);

  function adicionarFavorito(curso) {
    const jaExiste = favoritos.some((f) => f.id === curso.id);

    if (jaExiste) return;

    setFavoritos([...favoritos, curso]);
  }

  function removerFavorito(id) {
    const novaLista = favoritos.filter((curso) => curso.id !== id);
    setFavoritos(novaLista);
  }

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        adicionarFavorito,
        removerFavorito,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}