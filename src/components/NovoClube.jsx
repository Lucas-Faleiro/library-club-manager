import { useState } from "react";

const NovoClube = () => {
  const [clubName, setClubName] = useState("");

  const handleInputChange = (e) => {
    setClubName(e.target.value);
  };

  return (
    <div>
      <form>
        <h2>Novo Clube de Leitura</h2>
        <div>
          <label htmlFor="club-name">Nome do Clube:</label>
          <input
            type="text"
            placeholder="Nome do Clube"
            id="club-name"
            name="club-name"
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default NovoClube;
