import { useContext, useReducer, useState } from "react";
import { Link } from "react-router";
import ClubsContext from "../contexts/ClubsContext";
import ClubForm from "../components/NewClubForm";
import errorData from "../utils/errorData";

const newClubReducer = (state, action) => {
  const { type, inputName, inputValue } = action;
  switch (type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "TOGGLE_CHECKBOX": {
      if (inputName === "diasEncontro") {
        const listaDias = state.diasEncontro;
        return {
          ...state,
          [inputName]: listaDias.includes(inputValue)
            ? listaDias.filter((dia) => dia !== inputValue)
            : [...listaDias, inputValue],
        };
      } else {
        return {
          ...state,
          [inputName]: inputValue,
        };
      }
    }
    case "CLEAR_FORM":
      return {
        nome: "",
        categoria: "",
        coordenador: "",
        diasEncontro: [],
        horario: "",
        local: "",
        membrosAtivos: 0,
        status: false,
        livroAtual: "",
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
    membrosAtivos: 1,
    status: false,
    livroAtual: "",
  });
  const { addNewClub, clubList } = useContext(ClubsContext);
  const [errorMessage, setErrorMessage] = useState(errorData);

  const isFormValid =
    inputsForm.nome.length < 3 ||
    inputsForm.categoria.length < 3 ||
    inputsForm.coordenador.length < 3 ||
    inputsForm.horario.length < 3 ||
    inputsForm.local.length < 3 ||
    inputsForm.livroAtual.length < 3 ||
    inputsForm.diasEncontro.length === 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // if (name === "membrosAtivos") {
    //   if (Number(value) < 1)
    //     return setErrorMessage((prev) => ({
    //       ...prev,
    //       membrosAtivos: {
    //         message: "O número de membros ativos deve ser pelo menos 1.",
    //         visible: true,
    //       },
    //     }));
    // }

    if (value.length < 3 && name !== "membrosAtivos") {
      setErrorMessage((prev) => ({
        ...prev,
        [name]: {
          message: "O campo deve ter pelo menos 3 caracteres.",
          visible: true,
        },
      }));
    } else {
      setErrorMessage((prev) => ({
        ...prev,
        [name]: { message: "", visible: false },
      }));
    }
    if (name === "livroAtual") {
      dispatch({
        type: "UPDATE_FIELD",
        inputName: name,
        inputValue: { titulo: value },
      });
      return;
    }
    dispatch({ type: "UPDATE_FIELD", inputName: name, inputValue: value });
  };

  console.log(errorMessage);

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    if (name === "diasEncontro") {
      dispatch({
        type: "TOGGLE_CHECKBOX",
        inputName: name,
        inputValue: value,
      });
    } else {
      dispatch({
        type: "TOGGLE_CHECKBOX",
        inputName: name,
        inputValue: e.target.checked,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (inputsForm.diasEncontro.length === 0) {
    //   return setErrorMessage((prev) => ({
    //     ...prev,
    //     diasEncontro: {
    //       message: "Selecione pelo menos um dia de encontro.",
    //       visible: true,
    //     },
    //   }));
    // } else {
    //   setErrorMessage((prev) => ({
    //     ...prev,
    //     diasEncontro: { message: "", visible: false },
    //   }));
    // }
    const clubsLength = clubList.length;
    if (inputsForm.nome.length >= 3) {
      const newClub = {
        id: `clb-0${clubsLength + 1}`,
        ...inputsForm,
      };
      addNewClub(newClub);
    }
  };

  return (
    <div>
      <Link to="/">
        <button>Voltar</button>
      </Link>
      <ClubForm
        inputsForm={inputsForm}
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
        isFormValid={isFormValid}
      />
      <button onClick={() => dispatch({ type: "CLEAR_FORM" })}>Limpar</button>
    </div>
  );
};

export default NovoClube;
