import { useCallback, useEffect, useState } from "react";
import ClubsContext from "../contexts/ClubsContext";

const ClubsProvider = ({ children }) => {
  const [clubList, setClubList] = useState([]);
  const [loading, setLoading] = useState(false);

  const addNewClub = useCallback(
    (newClub) => {
      setClubList([...clubList, newClub]);
    },
    [clubList]
  );

  const removeClub = useCallback(
    (clubId) => {
      setClubList((prev) => prev.filter((club) => club.id !== clubId));
    },
    [setClubList]
  );

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data/clubes.json");
        const data = await response.json();
        setClubList(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar clubes:", error);
      }
    };
    fetchClubs();
  }, [setClubList]);

  const contextValue = {
    clubList,
    setClubList,
    addNewClub,
    removeClub,
    loading,
  };

  return (
    <ClubsContext.Provider value={contextValue}>
      {children}
    </ClubsContext.Provider>
  );
};

export default ClubsProvider;
