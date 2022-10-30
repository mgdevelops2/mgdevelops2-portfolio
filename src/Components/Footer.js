function Footer() {
    return (
        <div class="container border ">
            < div class="container bg-light my-5 border" >
                <div class="d-flex flex-column h-100">

                    <footer class="w-100 py-4 flex-shrink-0">
                        <div class="container py-4">
                            <div class="row gy-4 gx-5">
                                <div class="col-lg-4 col-md-6">
                                    <h5 class="h1 text-dark">MG.</h5>
                                    <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                    <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">Bootstrapious.com</a></p>
                                </div>
                                <div class="col-lg-2 col-md-6">
                                    {/* <h5 class="text-dark mb-3">Quick links</h5>
                                    <ul class="list-unstyled text-muted">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Get started</a></li>
                                        <li><a href="#">FAQ</a></li>
                                    </ul> */}
                                </div>
                                <div class="col-lg-2 col-md-6">
                                    <h5 class="text-dark mb-3">Follow Me!</h5>
                                    <ul class="list-unstyled">
                                        <li><a href="#"><i class="bi bi-github"></i>Github</a></li>
                                        <li><a href="#"><i class="bi bi-linkedin"></i>LinkedIn</a></li>
                                        <li><a href="#"><i class="bi bi-twitter"></i>Twitter</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-2 col-md-6">
                                    <div class="card border-primary mb-3" >
                                        <div class="card-body text-primary">
                                            <h5 class="card-text">Have an idea you want developed?</h5>
                                            <a class="btn btn-primary btn-lg" href="#" role="button">Hire Me!</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </footer>
                </div>
            </div >
        </div >
    );
}

export default Footer;