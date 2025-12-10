import { useContext } from "react";
import { Link } from "react-router";
import ClubsContext from "../contexts/ClubsContext";

const ClubeLista = () => {
  const { clubList, loading } = useContext(ClubsContext);

  console.log(clubList);

  return (
    <div>
      <h2>Clubes de Leitura</h2>
      <ul>
        {loading ? (
          <li>Carregando...</li>
        ) : (
          clubList.map((club) => <li key={club.id}>{club.nome}</li>)
        )}
      </ul>
      <Link to="/adicionar">
        <button>Adicionar Clube</button>
      </Link>
    </div>
  );
};

export default ClubeLista;
