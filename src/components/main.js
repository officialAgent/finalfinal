import React from "react";
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';


const TeamPage = () => {
    return (
        <section>


            <header class="masthead">
                <div class="container h-100">
                    <div class="row h-100 align-items-center justify-content-center text-center">
                        <div class="col-lg-10 align-self-end">
                            <h1 class="text-uppercase text-white font-weight-bold">Webove technologie final</h1>
                            <hr class="divider my-4"/>
                        </div>
                        <div class="col-lg-8 align-self-baseline">
                            <p class="text-white-75 font-weight-light mb-5">Final zadanie web tech by Tibi</p>
                            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Zisti Viac</a>
                        </div>
                    </div>
                </div>
            </header>

            <section class="page-section bg-primary" id="about">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h2 class="text-white mt-0">O nas</h2>
                            <hr class="divider light my-4"/>
                            <p class="text-white-50 mb-4">ontrary to popular belief, Lorem Ipsum is not simply random
                                text. It has roots in a piece of classical Latin literature from 45 BC, making it over
                                2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                                Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
                                passage, and going through the cites of the word in classical literature, discovered the
                                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
                                book is a treatise on the theory of ethics, very popular during the Renaissance. The
                                first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
                                1.10.32.</p>

                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section text-center my-5">


                <h2 className="h1-responsive font-weight-bold my-5">Our amazing team</h2>

                <p className="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                    quisquam
                    eum porro a pariatur veniam.</p>


                <div className="row">


                    <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                        <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                                 className="rounded-circle z-depth-1"
                                 alt="Sample avatar"></img>
                        </div>
                        <h5 className="font-weight-bold mt-4 mb-3">Zsombi</h5>
                        <p className="text-uppercase blue-text"><strong>Graphic designer</strong></p>
                        <p className="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            consectetur,
                            adipisci sed quia non numquam modi tempora eius.</p>
                        <ul className="list-unstyled mb-0">

                            <a className="p-2 fa-lg fb-ic">
                                <i className="fab fa-facebook-f blue-text"> </i>
                            </a>

                            <a className="p-2 fa-lg tw-ic">
                                <i className="fab fa-twitter blue-text"> </i>
                            </a>

                            <a className="p-2 fa-lg ins-ic">
                                <i className="fab fa-instagram blue-text"> </i>
                            </a>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
                        <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                                 className="rounded-circle z-depth-1"
                                 alt="Sample avatar"></img>
                        </div>
                        <h5 className="font-weight-bold mt-4 mb-3">Tibi</h5>
                        <p className="text-uppercase blue-text"><strong>Web developer</strong></p>
                        <p className="grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa
                            accusantium
                            doloremque rem laudantium totam aperiam.</p>
                        <ul className="list-unstyled mb-0">

                            <a className="p-2 fa-lg fb-ic">
                                <i className="fab fa-facebook-f blue-text"> </i>
                            </a>

                            <a className="p-2 fa-lg ins-ic">
                                <i className="fab fa-instagram blue-text"> </i>
                            </a>
                        </ul>
                    </div>



                    <div className="col-lg-3 col-md-6 mb-md-0 mb-5">
                        <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                                 className="rounded-circle z-depth-1"
                                 alt="Sample avatar"></img>
                        </div>
                        <h5 className="font-weight-bold mt-4 mb-3">Laci</h5>
                        <p className="text-uppercase blue-text"><strong>Photographer</strong></p>
                        <p className="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                            officia deserunt
                            mollit anim est fugiat nulla id eu laborum.</p>
                        <ul className="list-unstyled mb-0">

                            <a className="p-2 fa-lg fb-ic">
                                <i className="fab fa-facebook-f blue-text"> </i>
                            </a>

                            <a className="p-2 fa-lg ins-ic">
                                <i className="fab fa-instagram blue-text"> </i>
                            </a>

                            <a className="p-2 fa-lg ins-ic">
                                <i className="fab fa-dribbble blue-text"> </i>
                            </a>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                                 className="rounded-circle z-depth-1"
                                 alt="Sample avatar"></img>
                        </div>
                        <h5 className="font-weight-bold mt-4 mb-3">Sanyi</h5>
                        <p className="text-uppercase blue-text"><strong>Backend developer</strong></p>
                        <p className="grey-text">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui
                            consectetur
                            totam officia voluptates perferendis voluptatibus aut.</p>
                        <ul className="list-unstyled mb-0">

                            <a className="p-2 fa-lg fb-ic">
                                <i className="fab fa-facebook-f blue-text"> </i>
                            </a>

                            <a className="p-2 fa-lg ins-ic">
                                <i className="fab fa-github blue-text"> </i>
                            </a>
                        </ul>
                    </div>


                </div>


            </section>



            <section class="page-section bg-primary">

            <h2 class="text-white mt-0   h1-responsive font-weight-bold my-5">Our best projects</h2>

            <p class="text-white mt-0 w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit est laborum.</p>


            <div class="row d-flex justify-content-center">


                <div class="col-md-6 col-xl-5 mb-4">

                    <div class="view overlay rounded z-depth-2">
                        <img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" class="img-fluid" alt="Sample project image"></img>
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                    </div>

                    <div class="card-body">
                        <a href="" class="green-text">
                            <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-chart-line pr-2"></i>Marketing</h5>
                        </a>
                        <h4 class="text-white mt-0 font-weight-bold mb-3">Title of the news article</h4>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat
                            proident voluptatem quia numquam.</p>
                        <a class="btn btn-light btn-rounded btn-md"> View more</a>
                    </div>
                </div>

                <div class="col-md-6 col-xl-5 mb-4">

                    <div class="view overlay rounded z-depth-2">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/19.jpg" class="img-fluid" alt="Sample project image"></img>
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                    </div>

                    <div class="card-body">
                        <a href="" class="blue-text">
                            <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-eye pr-2"></i>Entertainment</h5>
                        </a>
                        <h4 class=" text-white mt-0 font-weight-bold mb-3">Title of the news article</h4>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut
                            aliquid, aspernatur aut odit aut fugit.</p>
                        <a class="btn btn-light btn-md"> View more</a>
                    </div>
                </div>


            </div>

            <div class="row d-flex justify-content-center">


                <div class="col-md-6 col-xl-5 mb-md-0 mb-4">

                    <div class="view overlay rounded z-depth-2">
                        <img src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" class="img-fluid" alt="Sample project image"></img>
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                    </div>

                    <div class="card-body pb-md-0">
                        <a href="" class="brown-text">
                            <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-camera pr-2"></i>Travel</h5>
                        </a>
                        <h4 class=" text-white mt-0 font-weight-bold mb-3">Title of the news article</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa.
                        </p>
                        <a class="btn btn-light btn-rounded btn-md"> View more</a>
                    </div>
                </div>

                <div class="col-md-6 col-xl-5">

                    <div class="view overlay rounded z-depth-2">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img (56).jpg" class="img-fluid"
                             alt="Sample project image"></img>
                            <a>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                    </div>

                    <div class="card-body pb-0">
                        <a href="" class="cyan-text">
                            <h5 class="font-weight-bold mt-2 mb-3"><i class="fas fa-phone pr-2"></i>Technology</h5>
                        </a>
                        <h4 class="text-white mt-0 font-weight-bold mb-3">Title of the news article</h4>
                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                            illum qui dolorem eum fugiat quo voluptas.</p>
                        <a class="btn btn-light btn-rounded btn-md"> View more</a>
                    </div>
                </div>


            </div>


            </section>



        </section>


    );
}

export default TeamPage;