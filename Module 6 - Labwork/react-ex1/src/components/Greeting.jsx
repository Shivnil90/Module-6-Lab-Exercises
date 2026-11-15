
function Greeting(props) {
  const name = props.name || 'World';

  return (
    <div className="Greeting componentBox">
      <h2>Hello {name}</h2>
      {props.children && <p>{props.children}</p>}
    </div>
  );
}

export default Greeting;
