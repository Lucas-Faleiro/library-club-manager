import { useContext } from "react";
import ClubsContext from "../contexts/ClubsContext";
import { Link } from "react-router";
import DeleteModal from "../components/DeleteModal";

const ClubeLista = () => {
  const { clubList, loading, handleOpenModal, modalOpen } =
    useContext(ClubsContext);

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
                <button onClick={() => handleOpenModal(club.id)}>
                  Excluir
                </button>
              </div>
            );
          })
        )}
      </ul>

      {modalOpen && <DeleteModal />}
    </div>
  );
};

export default ClubeLista;
