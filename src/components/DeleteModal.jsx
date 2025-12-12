import { useContext } from "react";
import ClubsContext from "../contexts/ClubsContext";

const DeleteModal = () => {
  const { idToDelete, handleCloseModal, deleteClub } = useContext(ClubsContext);

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Confirmar Exclusão</h3>
        <p>Deseja Deletar este clube?</p>
        <button onClick={handleCloseModal}>Cancelar</button>
        <button onClick={() => deleteClub(idToDelete)}>Deletar</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
  },
};

export default DeleteModal;
