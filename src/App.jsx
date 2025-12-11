import { Route, Routes } from "react-router";
import "./App.css";
import ClubeLista from "./pages/ClubeLista";
import NovoClube from "./pages/NovoClube";
import ClubsProvider from "./providers/ClubsProvider";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <ClubsProvider>
      <NavMenu />
      <Routes>
        <Route index element={<ClubeLista />} />
        <Route path="/adicionar" element={<NovoClube />} />
      </Routes>
    </ClubsProvider>
  );
}

export default App;
