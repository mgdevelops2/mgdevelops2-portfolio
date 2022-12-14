function BlogHighlight() {
  return (
    <div class="container my-5 bg-light rounded-4">
      <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-4 border shadow-lg">
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-5 fw-bold lh-1">Checkout my most recent Blog!</h1>
          <p class="lead">
            Occasionally, I like to write a blogs - sometimes the blog will be
            about a Tech Topic - like how to write a function, sometimes they
            are How-To's for complex problems, and sometimes they might be about
            myself and my life as a software developer, partner, creator, and
            dog dad. Here is the newest one:
          </p>
          <i class="bi bi-arrow-return-right fs-1"></i>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 pb-5">
            {/* <button
              type="button"
              class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
            >
              Primary
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Default
            </button> */}
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 mx-1 overflow-hidden shadow-lg">
          <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Short title, long jacket
              </h3>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    class="rounded-circle border border-white"
                  ></img>
                </li>
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use />
                  </svg>
                  <small>Earth</small>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use />
                  </svg>
                  <small>3d</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHighlight;
