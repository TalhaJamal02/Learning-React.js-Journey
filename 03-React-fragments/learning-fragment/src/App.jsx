import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let fooditem = ["Dal", "Vegetable", "Milk", "Bread"];

  return (
    <>
    <h1>Healthy Food Item</h1>
      <ul className="list-group">
        {fooditem.map((item) => {
          return <li key={item} className="list-group-item">{item}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
