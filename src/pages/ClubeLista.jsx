import { useContext } from "react";
import ClubsContext from "../contexts/ClubsContext";
import { Link } from "react-router";

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
              <div key={club.id} style={{ display: "flex" }}>
                <Link to={`clube/${club.id}`}>
                  <li>{club.nome}</li>
                </Link>
                <button onClick={() => removeClub(club.id)}>Excluir</button>
              </div>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default ClubeLista;
