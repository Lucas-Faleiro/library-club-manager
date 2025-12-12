const daysOfWeek = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

const NewClubForm = ({
  inputsForm,
  handleInputChange,
  handleCheckboxChange,
  handleSubmit,
  errorMessage,
  isFormValid,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Novo Clube de Leitura</h2>
      <div>
        <label htmlFor="club-name">Nome do Clube:</label>
        <input
          type="text"
          placeholder="Nome do Clube"
          id="nome"
          name="nome"
          onChange={handleInputChange}
          value={inputsForm.nome}
        />
        {errorMessage.nome.visible && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errorMessage.nome.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="categoria">Categoria:</label>
        <input
          type="text"
          placeholder="Categoria"
          id="categoria"
          name="categoria"
          onChange={handleInputChange}
          value={inputsForm.categoria}
        />
        {errorMessage.categoria.visible && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errorMessage.categoria.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="coordenador">Coordenador:</label>
        <input
          type="text"
          placeholder="Coordenador"
          id="coordenador"
          name="coordenador"
          onChange={handleInputChange}
          value={inputsForm.coordenador}
        />
        {errorMessage.coordenador.visible && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errorMessage.coordenador.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="diasEncontro">Dias de Encontro:</label>
        {daysOfWeek.map((day) => (
          <div key={day}>
            <input
              type="checkbox"
              id={day}
              name="diasEncontro"
              value={day}
              onChange={handleCheckboxChange}
              checked={inputsForm.diasEncontro.includes(day)}
            />
            <label htmlFor={day}>{day}</label>
          </div>
        ))}
        {errorMessage.diasEncontro.visible && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errorMessage.diasEncontro.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="horario">Horário:</label>
        <input
          type="text"
          placeholder="Horário"
          id="horario"
          name="horario"
          onChange={handleInputChange}
          value={inputsForm.horario}
        />
        {errorMessage.horario.visible && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errorMessage.horario.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="local">Local:</label>
        <input
          type="text"
          placeholder="Local"
          id="local"
          name="local"
          onChange={handleInputChange}
          value={inputsForm.local}
        />
        {errorMessage.local.visible && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errorMessage.local.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="membrosAtivos">Membros Ativos:</label>
        <input
          type="number"
          placeholder="Membros Ativos"
          min={1}
          max={100}
          id="membrosAtivos"
          name="membrosAtivos"
          onChange={handleInputChange}
          value={inputsForm.membrosAtivos}
        />
        {errorMessage.membrosAtivos.visible && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {errorMessage.membrosAtivos.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <input
          type="checkbox"
          id="status"
          name="status"
          onChange={handleCheckboxChange}
          checked={inputsForm.status}
        />
        <span>{inputsForm.status ? "Inativo" : "Ativo"}</span>
      </div>
      <div>
        <label htmlFor="livroAtual">Livro Atual:</label>
        <input
          type="text"
          placeholder="Livro Atual"
          id="livroAtual"
          name="livroAtual"
          onChange={handleInputChange}
          value={inputsForm.livroAtual}
        />
      </div>
      <button disabled={isFormValid} type="submit">
        Adicionar Clube
      </button>
    </form>
  );
};

export default NewClubForm;
