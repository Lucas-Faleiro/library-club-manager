import { Link, useOutletContext } from "react-router";

const ClubeSessoes = () => {
  const clubDetails = useOutletContext();
  console.log(clubDetails);

  return (
    <div>
      <div>Dias: {clubDetails.diasEncontro.join(", ")}</div>
      <div>Horário: {clubDetails.horario}</div>
      <div>Local: {clubDetails.local}</div>
      <div>Livro: {clubDetails.livroAtual.titulo}</div>
      <Link to={`/clube/${clubDetails.id}`}>
        <button>Fechar Sessões</button>
      </Link>
    </div>
  );
};

export default ClubeSessoes;
