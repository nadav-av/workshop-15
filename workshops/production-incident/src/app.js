import {useState} from "react";
import './app.css';

function App(props) {
  const { onApartmentDial, apartments = [] } = props;
  const [apartmentNumber, setApartmentNumber] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <p>Apartments:</p>
        <div className="apartments">
          { apartments.map(apartment => {
            return (
                <div className="apartment">
                  <div className="apartment-number">{apartment.id}</div>
                  <div className="apartment-name">{apartment.name}</div>
                </div>
            )
          }) }
        </div>
        <p>Enter apartment number:</p>
        <input type="number" className="apt-num" value={apartmentNumber} onChange={e => setApartmentNumber(e.target.value)}/>
        <button className="apt-dial" onClick={() => onApartmentDial(apartmentNumber)}>Dial</button>
      </header>
    </div>
  );
}

export default App;
