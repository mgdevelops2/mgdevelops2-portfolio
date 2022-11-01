function Showcase() {
  return (
    // <div class="container my-5" >
    //     <div class="container bg-light my-5 border rounded-4 shadow-lg" >
    //         <div class="container px-4 py-5" id="custom-cards">

    //         </div >
    //     </div >
    // </div >

    <div class="my-5">
      <div class="container bg-light my-5 border rounded-4 shadow-lg">
        <div class=" px-4 py-5" id="custom-cards">
          <h1 class="display-5 fw-bold lh-1">Check out my work!</h1>
          <hr></hr>
          <p>
            These are some of my favorite projects. Click the "All works" button
            to see more of my projects.
          </p>

          <div class="d-flex align-items-center ">
            <div class="row">
              <div class="col-md-4">
                <div class="lc-block">
                  <div class="card shadow-lg p-3 bg-white text-dark">
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;h=768&amp;fit=crop&amp;ixid=eyJhcHBfaWQiOjM3ODR9"
                      alt="Photo by CoinView App"
                      loading="lazy"
                    ></img>
                    <div class="card-body text-center">
                      <h3 class="card-title " editable="inline">
                        Card title
                      </h3>
                      <p>hi</p>
                      <a class="btn btn-link" href="#" role="button">
                        Click me, I'm a button
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- /lc-block --> */}
              </div>
              {/* <!-- /col --> */}
              <div class="col-md-4">
                <div class="lc-block">
                  <div class="card shadow-lg p-3 bg-white text-dark">
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1495549115977-ca0a18c9f6a4?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;h=768&amp;fit=crop&amp;ixid=eyJhcHBfaWQiOjM3ODR9"
                      alt="Photo by Omar Prestwich"
                      loading="lazy"
                    ></img>
                    <div class="card-body text-center">
                      <h3 class="card-title " editable="inline">
                        Card title
                      </h3>
                      <p>hi</p>
                      <a class="btn btn-link" href="#" role="button">
                        Click me, I'm a button
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- /lc-block --> */}
              </div>
              {/* <!-- /col --> */}
              <div class="col-md-4">
                <div class="lc-block">
                  <div class="card shadow-lg p-3 bg-white text-dark">
                    <img
                      class="card-img-top"
                      src="https://images.unsplash.com/photo-1494366222322-387658a1a976?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;h=768&amp;fit=crop&amp;ixid=eyJhcHBfaWQiOjM3ODR9"
                      alt="Photo by NeONBRAND"
                      loading="lazy"
                    ></img>
                    <div class="card-body text-center">
                      <h3 class="card-title" editable="inline">
                        Card title
                      </h3>
                      <p>hi</p>
                      <a class="btn btn-link" href="#" role="button">
                        Click me, I'm a button
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- /lc-block --> */}
              </div>
              {/* <!-- /col --> */}
            </div>
          </div>

          <div class="container text-center my-3">
            <a class="btn btn-outline-primary btn-lg" href="#" role="button">
              All works
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
