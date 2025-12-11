import { createContext } from "react";

const ClubsContext = createContext({
  clubs: [],
  addNewClub: () => {},
  removeClub: () => {},
});

export default ClubsContext;
