import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router";
import ClubsContext from "../contexts/ClubsContext";

const DetalhesClube = () => {
  const [clubDetails, setClubDetails] = useState(null);
  const { id } = useParams();
  const { getClubById, loading, setLoading } = useContext(ClubsContext);

  useEffect(() => {
    const fetchClubDetails = async () => {
      try {
        setLoading(true);
        const club = getClubById(id);
        setClubDetails(club);
      } catch (error) {
        console.error("Erro ao buscar detalhes do clube:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchClubDetails();
  }, [id, getClubById, setLoading]);

  console.log(clubDetails);

  return (
    <div>
      {loading || !clubDetails ? (
        <p>Carregando detalhes do clube...</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <span>{clubDetails.nome}</span>
          <span>{clubDetails.categoria}</span>
          <span>Livro atual: {clubDetails.livroAtual.titulo}</span>
          <span>{clubDetails.coordenador}</span>
          <div
            style={{ display: "flex", gap: "4px", justifyContent: "center" }}
          >
            {clubDetails.diasEncontro.map((dia, index) => (
              <span key={index}>{dia}</span>
            ))}
          </div>
          <span>{clubDetails.horario}</span>
          <span>{clubDetails.local}</span>
          <span>{clubDetails.membrosAtivos}</span>
          <span>{clubDetails.status ? "Ativo" : "Inativo"}</span>
        </div>
      )}
      <Link to={`sessoes`}>
        <button>Ver Sessões</button>
      </Link>
      <Outlet context={clubDetails} />

      <Link to={"/"}>
        <button>Lista de Clubes</button>
      </Link>
    </div>
  );
};

export default DetalhesClube;
