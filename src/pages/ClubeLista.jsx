import { useContext, useState } from "react";
import ClubsContext from "../contexts/ClubsContext";
import { Link } from "react-router";
import DeleteModal from "../components/DeleteModal";

const ClubeLista = () => {
  const { clubList, loading, removeClub } = useContext(ClubsContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  const handleOpenModal = (id) => {
    setModalOpen(true);
    setIdToDelete(id);
  };

  const deleteClub = (id) => {
    removeClub(id);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setIdToDelete(null);
  };

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

      {modalOpen && (
        <DeleteModal
          id={idToDelete}
          handleCloseModal={handleCloseModal}
          deleteClub={deleteClub}
        />
      )}
    </div>
  );
};

export default ClubeLista;
