import { useState, useEffect } from "react";
import { getRandomFact } from "../Services/facts.js";

export function useCatFact() {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  useEffect(refreshFact, []);
  if (!fact ) return <div>Carregando...</div>;

  return { fact, refreshFact };
}
