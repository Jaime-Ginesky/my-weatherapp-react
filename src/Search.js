import "./App.css";

export default function Search() {
  return (
    <div className="search">
      <form className="search-form" id="search-form">
        <div className="row">
          <div className="col-4">
            <input
              type="search"
              placeholder="Enter City"
              autoFocus="on"
              className="form-control shadow"
              id="search-text-input"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-outline-light"
            />
          </div>
          <div className="col-2">
            <input
              type="button"
              value="📍"
              className="form-control btn btn-outline-light"
              id="current-weather"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
