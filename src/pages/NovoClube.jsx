import { useContext, useReducer, useState } from "react";
import { Link } from "react-router";
import ClubsContext from "../contexts/ClubsContext";
import ClubForm from "../components/ClubForm";

const newClubReducer = (state, action) => {
  const { type, inputValue } = action;
  switch (type) {
    case "SET_CLUB_NAME":
      return {
        ...state,
        nome: inputValue,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        categoria: inputValue,
      };
    case "SET_COORDINATOR":
      return {
        ...state,
        coordenador: inputValue,
      };
    case "SET_MEETING_DAYS":
      return {
        ...state,
        diasEncontro: inputValue,
      };
    case "SET_SCHEDULE":
      return {
        ...state,
        horario: inputValue,
      };
    case "SET_LOCATION":
      return {
        ...state,
        local: inputValue,
      };
    case "SET_ACTIVE_MEMBERS":
      return {
        ...state,
        membrosAtivos: inputValue,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: inputValue,
      };
    case "SET_CURRENT_BOOK":
      return {
        ...state,
        livroAtual: inputValue,
      };
    default:
      return state;
  }
};

const NovoClube = () => {
  const [inputsForm, dispatch] = useReducer(newClubReducer, {
    nome: "",
    categoria: "",
    coordenador: "",
    diasEncontro: [],
    horario: "",
    local: "",
    membrosAtivos: 0,
    status: "",
    livroAtual: "",
  });
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
        id: `clb-0${clubsLength + 1}`,
        nome: clubName,
      };
      addNewClub(newClub);
      setClubName("");
    }
  };

  return (
    <div>
      <Link to="/">
        <button>Voltar</button>
      </Link>
      <ClubForm
        clubName={clubName}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
        btnDisabled={btnDisabled}
      />
    </div>
  );
};

export default NovoClube;
