import { createContext } from "react";

const ClubsContext = createContext({
  clubs: [],
  addNewClub: () => {},
});

export default ClubsContext;
