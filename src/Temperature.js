import "./App.css";

export default function Temperature(props) {
  return (
    <div>
      <div className="hstack gap-4">
        <div className="row">
          <div className="col-6 ms-auto">
            <br />
            <div className="temp-section" id="temperature">
              <ul>
                <li>
                  <span className="temps" id="temp">
                    {props.value}
                  </span>
                  <span className="units">
                    <a
                      href="https://weather.com"
                      id="fahrenheit-link"
                      className="active"
                    >
                      {" "}
                      °F{" "}
                    </a>
                    <p> | </p>
                    <a
                      href="https://weather.com"
                      id="celcius-link"
                      className="cels"
                    >
                      {" "}
                      °C{" "}
                    </a>
                  </span>
                </li>
                <li>
                  <span className="detail" id="description"></span>
                </li>
              </ul>
              <img src="" alt="" id="icon" className="float-left" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
