import { useState } from "react";

const NovoClube = ({ addNewClub, clubsLength }) => {
  const [clubName, setClubName] = useState("");

  const handleInputChange = (e) => {
    setClubName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (clubName.length > 0) {
      const newClub = {
        nome: clubName,
        id: `clb-0${clubsLength + 1}`,
      };
      addNewClub(newClub);
      setClubName("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Novo Clube de Leitura</h2>
        <div>
          <label htmlFor="club-name">Nome do Clube:</label>
          <input
            type="text"
            placeholder="Nome do Clube"
            id="club-name"
            name="club-name"
            onChange={handleInputChange}
            value={clubName}
          />
        </div>
        <button type="submit">Adicionar Clube</button>
      </form>
    </div>
  );
};

export default NovoClube;
