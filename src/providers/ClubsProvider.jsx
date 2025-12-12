import { useCallback, useEffect, useState } from "react";
import ClubsContext from "../contexts/ClubsContext";

const ClubsProvider = ({ children }) => {
  const [clubList, setClubList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  const addNewClub = useCallback((newClub) => {
    setClubList((prev) => [...prev, newClub]);
  }, []);

  //Botei toda lógica do modal no provider, caso eu queira excluir em outra parte do aplicativo

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

  const removeClub = useCallback(
    (clubId) => {
      setClubList((prev) => prev.filter((club) => club.id !== clubId));
    },
    [setClubList]
  );

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
        setClubList(data);
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
    addNewClub,
    removeClub,
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
