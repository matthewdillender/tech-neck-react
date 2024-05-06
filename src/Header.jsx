import { LogoutLink } from "./Logout";
import "./Header.css";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="navbar-brand">
            <img
              src="https://teachmeanatomy.info/wp-content/uploads/C-spine-picture.jpg"
              alt="C-Spine"
              style={{ width: "200px", height: "200px", marginRight: "10px" }}
            />
            <h1 style={{ textAlign: "left", marginBottom: "0" }}>Fix Your Tech Neck!!!</h1>
          </div>
          <div className="d-flex">
            <button className="logout-button">
              <LogoutLink />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
