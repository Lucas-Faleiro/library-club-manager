import { useCallback, useEffect, useState } from "react";
import ClubsContext from "../contexts/ClubsContext";

const ClubsProvider = ({ children }) => {
  const [clubList, setClubList] = useState([]);
  const [loading, setLoading] = useState(false);

  const addNewClub = useCallback((newClub) => {
    setClubList((prev) => [...prev, newClub]);
  }, []);

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
  };

  return (
    <ClubsContext.Provider value={contextValue}>
      {children}
    </ClubsContext.Provider>
  );
};

export default ClubsProvider;
