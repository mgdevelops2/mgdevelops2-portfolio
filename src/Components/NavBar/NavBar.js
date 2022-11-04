// import your necessary components.
import Logo from "../../Assets/Logo.png";

// function for component
function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm my-1">
      <div class="container container-fluid">
        <a class="navbar-brand" href="/">
          <img
            id="MGD-logo"
            src={Logo}
            alt="MGD-Logo"
            draggable="false"
            height="75"
          />
        </a>
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
              <a class="nav-link mx-2" href="/mgdevelops2-portfolio/">
                Home
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link mx-2" href="/blog">
                Blog
              </a>
            </li> */}
            <li class="nav-item">
              <a class="nav-link mx-2" href="/mgdevelops2-portfolio/portfolio">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="/mgdevelops2-portfolio/contact">
                Contact
              </a>
            </li>
            <li class="nav-item ms-3">
              <a
                class="btn btn-outline-secondary"
                href="https://drive.google.com/file/d/1C7Xux-yypJCIU5KcisPC2K_0dsFTA8_m/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
