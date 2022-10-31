import Logo from "../Assets/Logo.png"
function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm my-1">
      <div class="container container-fluid">
        <a class="navbar-brand" href="#"
        ><img
            id="MGD-logo"
            src={Logo}
            alt="MGD-Logo"
            draggable="false"
            height="75"
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
              <a class="nav-link mx-2" href="#!">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#!">Portfolio</a>
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
            <li class="nav-item">
              <a class="nav-link mx-2" href="#!">Contact</a>
            </li>
            <li class="nav-item ms-3">
              <a class="btn btn-outline-secondary btn-rounded" href="#!">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
