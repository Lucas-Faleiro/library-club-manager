const ClubForm = ({
  clubName,
  handleInputChange,
  handleSubmit,
  errorMessage,
  btnDisabled,
}) => {
  return (
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
      <div>
        <label htmlFor="club-category">Categoria:</label>
        <input
          type="text"
          placeholder="Categoria"
          id="club-category"
          name="club-category"
        />
      </div>
      <div>
        <label htmlFor="club-coordinator">Coordenador:</label>
        <input
          type="text"
          placeholder="Coordenador"
          id="club-coordinator"
          name="club-coordinator"
        />
      </div>
      <div>
        <label htmlFor="meeting-days">Dias de Encontro:</label>
        <input type="checkbox" id="segunda" name="segunda" value="segunda" />
        <label htmlFor="segunda">Segunda-feira</label>
        <input type="checkbox" id="terca" name="terca" value="terca" />
        <label htmlFor="terca">Terça-feira</label>
        <input type="checkbox" id="quarta" name="quarta" value="quarta" />
        <label htmlFor="quarta">Quarta-feira</label>
        <input type="checkbox" id="quinta" name="quinta" value="quinta" />
        <label htmlFor="quinta">Quinta-feira</label>
        <input type="checkbox" id="sexta" name="sexta" value="sexta" />
        <label htmlFor="sexta">Sexta-feira</label>
      </div>
      <div>
        <label htmlFor="meeting-time">Horário:</label>
        <input
          type="text"
          placeholder="Horário"
          id="meeting-time"
          name="meeting-time"
        />
      </div>
      <div>
        <label htmlFor="meeting-location">Local:</label>
        <input
          type="text"
          placeholder="Local"
          id="meeting-location"
          name="meeting-location"
        />
      </div>
      <div>
        <label htmlFor="active-members">Membros Ativos:</label>
        <input
          type="number"
          placeholder="Membros Ativos"
          id="active-members"
          name="active-members"
        />
      </div>
      <div>
        <label htmlFor="club-status">Status:</label>
        <input
          type="text"
          placeholder="Status"
          id="club-status"
          name="club-status"
        />
      </div>
      <div>
        <label htmlFor="current-book">Livro Atual:</label>
        <input
          type="text"
          placeholder="Livro Atual"
          id="current-book"
          name="current-book"
        />
      </div>
      <button disabled={btnDisabled} type="submit">
        Adicionar Clube
      </button>
    </form>
  );
};

export default ClubForm;
