import { Route, Routes } from "react-router";
import "./App.css";
import ClubeLista from "./pages/ClubeLista";
import NovoClube from "./pages/NovoClube";
import ClubsProvider from "./providers/ClubsProvider";
import NavMenu from "./components/NavMenu";
import DetalhesClube from "./pages/DetalhesClube";

function App() {
  return (
    <ClubsProvider>
      <NavMenu />
      <Routes>
        <Route index element={<ClubeLista />} />
        <Route path="/adicionar" element={<NovoClube />} />
        <Route path="/clube/:id" element={<DetalhesClube />} />
      </Routes>
    </ClubsProvider>
  );
}

export default App;
