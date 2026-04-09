import { createContext, useState } from "react";

export const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  function adicionarFavorito(curso) {
    // evita duplicados
    setFavoritos(prev => {
      if (prev.find(f => f.id === curso.id)) return prev;
      return [...prev, curso];
    });
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}