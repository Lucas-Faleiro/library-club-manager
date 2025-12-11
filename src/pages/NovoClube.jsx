import { useContext, useState } from "react";
import { Link } from "react-router";
import ClubsContext from "../contexts/ClubsContext";

const NovoClube = () => {
  const [clubName, setClubName] = useState("");
  const { addNewClub, clubList } = useContext(ClubsContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (value.trim().length < 3) {
      setErrorMessage("O nome do clube deve ter pelo menos 3 caracteres.");
      setBtnDisabled(true);
    } else {
      setErrorMessage("");
      setBtnDisabled(false);
    }
    setClubName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const clubsLength = clubList.length;
    if (clubName.length > 0) {
      const newClub = {
        nome: clubName,
        id: `clb-0${clubsLength + 1}`,
      };
      addNewClub(newClub);
      setClubName("");
    }
  };

  console.log(clubList);

  return (
    <div>
      <Link to="/">
        <button>Voltar</button>
      </Link>
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
          {errorMessage && (
            <p style={{ color: "red", fontSize: "12px" }}>{errorMessage}</p>
          )}
        </div>
        <button disabled={btnDisabled} type="submit">
          Adicionar Clube
        </button>
      </form>
    </div>
  );
};

export default NovoClube;
