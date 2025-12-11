import { useContext } from "react";
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
              <div key={club.id} style={{ display: "flex" }}>
                <li>{club.nome}</li>
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
