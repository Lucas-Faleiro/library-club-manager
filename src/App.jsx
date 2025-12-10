import { Route, Routes } from "react-router";
import "./App.css";
import ClubeLista from "./components/ClubeLista";
import NovoClube from "./components/NovoClube";
import ClubsProvider from "./providers/ClubsProvider";

function App() {
  return (
    <ClubsProvider>
      <Routes>
        <Route index element={<ClubeLista />} />
        <Route path="/adicionar" element={<NovoClube />} />
      </Routes>
    </ClubsProvider>
  );
}

export default App;
