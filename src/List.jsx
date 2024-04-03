function List(props) {
  const titulo = props.titulo;

  const listaDePersonas = props.gente;

  const listaDeGente = listaDePersonas.map((humanos) => (
    <li key={humanos.id}>
      Nombre: {humanos.nombre} &nbsp; Sexo: {humanos.sexo}
    </li>
  ));

  return (
    <>
      <h3>{titulo}</h3>
      <ul>{listaDeGente}</ul>
    </>
  );
}
List.defaultProps = {
  gente: [],
  titulo: "Ser vivo",
  edad: null,
  sexo: "Travesti",
};

export default List;
