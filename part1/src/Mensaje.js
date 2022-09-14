import './App.css';

function Mensaje(props) {
  console.log(props)
  return (
    <div className="App" style={{ color: props.color}}>
      {props.message}
    </div>
  );
}

export default Mensaje;
