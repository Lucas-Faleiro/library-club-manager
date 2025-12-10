import { useEffect, useState } from "react";
import { Link } from "react-router";

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
      <Link
        to="/adicionar"
        state={{ addNewClub, clubsLength: clubList.length }}
      >
        <button>Adicionar Clube</button>
      </Link>
    </div>
  );
};

export default ClubeLista;
