function Showcase() {
    return (

        // <div class="container my-5" >
        //     <div class="container bg-light my-5 border rounded-3 shadow-lg" >
        //         <div class="container px-4 py-5" id="custom-cards">

        //         </div >
        //     </div >
        // </div >

        <div class="container my-5" >
            <div class="container bg-light my-5 border rounded-3 shadow-lg" >
                <div class="container px-4 py-5" id="custom-cards">
                    <h1>Recent Work</h1>
                    <hr></hr>
                    <p>These are some of my favorite projects. Click the All works button to see everything I have built.
                    </p>

                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card">
                                <img src="https://www.adweek.com/wp-content/uploads/files/blogs/istock-unfinished-business-hed-2015.jpg.webp" class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://www.adweek.com/wp-content/uploads/files/blogs/istock-unfinished-business-hed-2015.jpg.webp" class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://www.adweek.com/wp-content/uploads/files/blogs/istock-unfinished-business-hed-2015.jpg.webp" class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container text-center my-3"><a class="btn btn-outline-primary btn-lg" href="#" role="button">All works</a></div>
                </div>
            </div >
        </div >
    );
}

export default Showcase;
