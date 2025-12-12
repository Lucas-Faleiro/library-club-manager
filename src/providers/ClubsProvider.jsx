import { useCallback, useEffect, useReducer, useState } from "react";
import ClubsContext from "../contexts/ClubsContext";

const clubsReducer = (state, action) => {
  const { type, club } = action;
  switch (type) {
    case "LOAD_CLUBS":
      return club;
    case "ADD_CLUB":
      return [...state, club];
    case "REMOVE_CLUB":
      return state.filter((c) => c.id !== club.id);
    default:
      return state;
  }
};

const ClubsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [clubList, dispatch] = useReducer(clubsReducer, []);

  //Botei toda lógica do modal no provider, caso eu queira excluir em outra parte do aplicativo

  const handleOpenModal = (id) => {
    setModalOpen(true);
    setIdToDelete(id);
  };

  const deleteClub = (id) => {
    dispatch({ type: "REMOVE_CLUB", club: { id } });
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setIdToDelete(null);
  };

  //Tive que adicionar essa função para buscar o clube, pois se eu procurasse no arquivo json
  //não acharia os novos clubes adicionados pelo formulário
  const getClubById = useCallback(
    (clubId) => {
      return clubList.find((club) => club.id === clubId);
    },
    [clubList]
  );

  useEffect(() => {
    const loadClubs = async () => {
      setLoading(true);
      try {
        const response = await fetch("/data/clubes.json");
        const data = await response.json();
        dispatch({ type: "LOAD_CLUBS", club: data });
      } catch (error) {
        console.error("Erro ao buscar clubes:", error);
      } finally {
        setLoading(false);
      }
    };
    loadClubs();
  }, []);

  const contextValue = {
    clubList,
    getClubById,
    addClub: (club) => dispatch({ type: "ADD_CLUB", club }),
    removeClub: (clubId) =>
      dispatch({ type: "REMOVE_CLUB", club: { id: clubId } }),
    loading,
    setLoading,
    modalOpen,
    idToDelete,
    handleOpenModal,
    handleCloseModal,
    deleteClub,
  };

  return (
    <ClubsContext.Provider value={contextValue}>
      {children}
    </ClubsContext.Provider>
  );
};

export default ClubsProvider;
