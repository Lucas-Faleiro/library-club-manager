import { useContext } from "react";
import { Link } from "react-router";
import ClubsContext from "../contexts/ClubsContext";

const ClubeLista = () => {
  const { clubList, loading, removeClub } = useContext(ClubsContext);

  return (
    <div>
      <h2>Clubes de Leitura</h2>
      <ul>
        {loading ? (
          <li>Carregando...</li>
        ) : (
          clubList.map((club) => {
            return (
              <div style={{ display: "flex" }}>
                <li key={club.id}>{club.nome}</li>
                <button onClick={() => removeClub(club.id)}>Excluir</button>
              </div>
            );
          })
        )}
      </ul>
      <Link to="/adicionar">
        <button>Adicionar Clube</button>
      </Link>
    </div>
  );
};

export default ClubeLista;
