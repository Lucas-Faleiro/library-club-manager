import { useEffect, useState } from "react";
import NovoClube from "./NovoClube";

const ClubeLista = () => {
  const [clubList, setClubList] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch("/data/clubes.json");
        const data = await response.json();
        setClubList(data);
      } catch (error) {
        console.error("Erro ao buscar clubes:", error);
      }
    };
    fetchClubs();
  }, []);

  const addNewClub = (newClub) => {
    setClubList([...clubList, newClub]);
  };

  return (
    <div>
      <h2>Clubes de Leitura</h2>
      <ul>
        {clubList.map((club) => (
          <li key={club.id}>{club.nome}</li>
        ))}
      </ul>
      <NovoClube addNewClub={addNewClub} clubsLength={clubList.length} />
    </div>
  );
};

export default ClubeLista;
