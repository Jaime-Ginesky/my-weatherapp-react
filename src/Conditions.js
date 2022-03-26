import "./App.css";

export default function Conditions(props) {
  return (
    <div className="conds">
      <div className="col-6 ms-auto">
        <ul className="stats" id="detail">
          <li>
            <span id="humidity"> Humidity:{props.humidity} </span>%
          </li>
          <li>
            <span id="wind"> Wind Speed: {props.wind}</span>
          </li>
          <li>
            <span id="feels_like">Feels Like: {props.feels_like} </span>
          </li>
          <li>
            <span id="pressure">Air Quality: {props.pressure}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
