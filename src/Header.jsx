import { LogoutLink } from "./Logout";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand">
            <img
              src="https://teachmeanatomy.info/wp-content/uploads/C-spine-picture.jpg"
              alt="C-Spine"
              style={{ width: "200px", height: "200px", marginRight: "10px" }}
            />
            <h1 style={{ textAlign: "left", marginBottom: "0" }}>Fix Your Tech Neck!!!</h1>
            <div className="d-flex" style={{ position: "absolute", bottom: "10px", right: "10px" }}>
              <LogoutLink />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
