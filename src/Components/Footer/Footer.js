import Logo from "../../Assets/Logo.png";
function Footer() {
  return (
    <section>
      <div class="container py-6">
        <div class="lc-block d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4">
            <div editable="rich">
              <p class="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
                <a
                  href="https://twitter.com/mgdevelops2"
                  target="_blank"
                  rel="noreferrer"
                >
                  @mgdevelops2
                </a>
              </p>{" "}
            </div>
          </div>
          {/* <!-- /lc-block --> */}
          <div class="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto col-md-4">
            <div class="lc-block text-center">
              <a class="navbar-brand" href="/mgdevelops2-portfolio/">
                <img
                  class="img-fluid me-1"
                  src={Logo}
                  alt="my brand"
                  width="75"
                  height="auto"
                ></img>
              </a>
            </div>
          </div>
          <div class="col-md-4 navbar-expand-md">
            <div lc-helper="shortcode" class="live-shortcode">
              {/* <!--  lc_nav_menu -->  */}
              <ul
                id="menu-menu-1"
                class="navbar-nav me-auto mb-2 mb-md-0 flex-wrap justify-content-end"
              >
                <p class="fs-5">
                  <a
                    href="mailto:info@mgdevelops2.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="bi bi-envelope-plus fs-5"></i>
                  </a>
                  {" • "}
                  <a
                    href="https://www.linkedin.com/in/mgdevelops2/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="bi bi-linkedin fs-5"></i>
                  </a>
                  {" • "}
                  <a
                    href="https://twitter.com/mgdevelops2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="bi bi-twitter fs-5"></i>
                  </a>
                  {" • "}
                  <a
                    href="https://github.com/mgdevelops2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i class="bi bi-github fs-5"></i>
                  </a>
                </p>
              </ul>
              {/* <!-- /lc_nav_menu -->  */}
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div class="container">
    //   <hr />
    //   <footer class="w-100 py-4 flex-shrink-0">
    //     <div class="container py-4">
    //       <div class="row gy-4 gx-5">
    //         <div class="col-lg-4 col-md-6">
    //           <h5 class="h1 text-dark fw-bold">
    //             {" "}
    //             <img
    //               id="MGD-logo"
    //               src={Logo}
    //               alt="MGD-Logo"
    //               draggable="false"
    //               height="75"
    //             />
    //           </h5>

    //           <p class="small text-muted">
    //             Hey You! Thank you for taking the time to checkout my website.
    //             You should add me on social media, and stay up to date when I
    //             release new projects, or blogs about projects.
    //           </p>
    // <p class="small text-muted mb-0">
    //   &copy; Copyrights. All rights reserved.{" "}
    //   <a
    //     href="https://twitter.com/mgdevelops2"
    //     target="_blank"
    //     rel="noreferrer"
    //   >
    //     @mgdevelops2
    //   </a>
    // </p>
    //         </div>
    //         <div class="col-lg-2 col-md-6"></div>
    //         <div class="col-lg-2 col-md-6"></div>
    //         <div class="col-lg-2 col-md-6">
    //           <h5 class="text-dark mb-3 fw-bold">Follow Me!</h5>
    //           <ul class="list-unstyled">
    //             <li>
    //               <a
    //                 href="https://github.com/mgdevelops2"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <i class="bi bi-github fs-4"></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="https://www.linkedin.com/in/mgdevelops2/"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <i class="bi bi-linkedin fs-4"></i>
    //               </a>
    //             </li>
    //             <li>
    //               <a
    //                 href="https://twitter.com/mgdevelops2"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <i class="bi bi-twitter fs-4"></i>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //         <div class="col-lg-2 col-md-6">
    //           <div class="card border-secondary mb-3">
    //             <div class="card-body text-primary">
    //               <h5 class="card-text">Have an idea you want developed?</h5>
    //               <a class="btn btn-primary btn-lg" href="#" role="button">
    //                 Email Me!
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
}

export default Footer;
