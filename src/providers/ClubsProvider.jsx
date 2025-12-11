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

  const fetchClubs = useCallback(async (id) => {
    const response = await fetch("/data/clubes.json");
    const data = await response.json();
    if (id) {
      return data.find((club) => club.id === id);
    }
    setClubList(data);
  }, []);

  useEffect(() => {
    const loadClubs = async () => {
      setLoading(true);
      try {
        fetchClubs();
      } catch (error) {
        console.error("Erro ao buscar clubes:", error);
      } finally {
        setLoading(false);
      }
    };
    loadClubs();
  }, [fetchClubs]);

  const contextValue = {
    clubList,
    setClubList,
    addNewClub,
    removeClub,
    loading,
    fetchClubs,
    setLoading,
  };

  return (
    <ClubsContext.Provider value={contextValue}>
      {children}
    </ClubsContext.Provider>
  );
};

export default ClubsProvider;
