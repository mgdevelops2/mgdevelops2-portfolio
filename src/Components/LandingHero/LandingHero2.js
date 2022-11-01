import Selfie from "../../Assets/Selfie2.png";
function LandingHero() {
  return (
    <div class="container py-6">
      <div class="container row align-items-center my-5">
        <div class="col-md-6">
          <div class="lc-block mb-4">
            <div editable="rich">
              <h3 class="fst-italic">Hey!</h3>
              <h2 class="fw-bold lh-1 mb-3">I'm Mike Gonzalez.</h2>
              <h5 class="fw-bold">
                Front-End Developer | Web Designer | Content Creator
              </h5>
            </div>
          </div>
          <div class="lc-block mb-5">
            <div editable="rich">
              <p class="lead">
                I love to learn new tech, and I build things that live on the
                internet. Some of the technologies I work with are:
                <i class="fab bi-filetype-html fs-4 text-primary">,</i>
                <i class="fab fa-css3-alt fs-4 text-primary">,</i>
                <i class="fab fa-js-square fs-4 text-primary">,</i>
                <i class="fab fa-bootstrap fs-4 text-primary">,</i>
                <i class="fab fa-react fs-4 text-primary">,</i>
                <i class="fab fa-node fs-4 text-primary">,</i>
                <i class="fab fa-sass fs-4 text-primary">,</i>
                <i class="fab fa-wix fs-4 text-primary">, and</i>
                <i class="fab fa-wordpress fs-4 text-primary">.</i>
              </p>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start ">
              {/* <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button> */}
              {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
              <h1>
                <i class="bi bi-arrow-down"></i>
              </h1>
            </div>
          </div>
        </div>
        <div class="mt-4 mt-md-0 col-md-6">
          <div class="lc-block px-4">
            {/* <!--  If you want to remove px-4 please add overflow-hidden class to the section --> */}
            <div class="position-relative">
              <div class="lc-block position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 mt-4 ms-4 rounded-4 shadow-lg">
                {" "}
              </div>

              <img
                class="position-relative img-fluid rounded-4 shadow-lg"
                // src="https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8Mnx8fDE2NTk4NjcxMzE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080"
                // srcset="https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8Mnx8fDE2NTk4NjcxMzE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1080&amp;h=1080 1080w, https://images.unsplash.com/photo-1567016432779-094069958ea5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8Mnx8fDE2NTk4NjcxMzE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=150 150w, https://images.unsplash.com/photo-1567016432779-094069958ea5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8Mnx8fDE2NTk4NjcxMzE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=300 300w, https://images.unsplash.com/photo-1567016432779-094069958ea5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8Mnx8fDE2NTk4NjcxMzE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=768 768w, https://images.unsplash.com/photo-1567016432779-094069958ea5??crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwzNzg0fDB8MXxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8Mnx8fDE2NTk4NjcxMzE&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=1024 1024w"
                src={Selfie}
                sizes="(max-width: 1080px) 100vw, 1080px"
                width="1080"
                height="1080"
                alt="Photo by Inside Weather"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingHero;
