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
    loading,
  };

  return (
    <ClubsContext.Provider value={contextValue}>
      {children}
    </ClubsContext.Provider>
  );
};

export default ClubsProvider;
