// import './NavBar.css';

function NavBar() {
  return (
    <div className="Nav" sticky="top">
      <header>
        <nav class="navbar navbar-expand-lg bg-light navbar-light border">
          <div class="container">
            <a class="navbar-brand" href="#"
            ><img
                id="MGD-logo"
                src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
                alt="MGD-Logo"
                draggable="false"
                height="30"
              /></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto align-items-center">
                <li class="nav-item">
                  <a class="nav-link mx-2" href="#!"><i class="fas fa-plus-circle pe-2"></i>About Me</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-2" href="#!"><i class="fas fa-bell pe-2"></i>Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-2" href="#!"><i class="fas fa-heart pe-2"></i>Contact</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Design</a></li>
                    <li><a class="dropdown-item" href="#">Web Development</a></li>
                    <li><hr class="dropdown-divider"></hr></li>
                    <li><a class="dropdown-item" href="#">Book a consultation</a></li>
                  </ul>
                </li>
                <li class="nav-item ms-3">
                  <a class="btn btn-outline-secondary btn-rounded" href="#!">Resume</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </header>
    </div>
  );
}

export default NavBar;
