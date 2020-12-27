import React from "react";
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';


const ProfilePage = () => {
    return (
        <section>






            <section className="team-section text-center my-5">





                <div className="row">


                    <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                        <div className="avatar mx-auto">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                                 className="rounded-circle z-depth-1"
                                 alt="Sample avatar"></img>
                        </div>
                        <h5 className="font-weight-bold mt-4 mb-3">Zsombi</h5>
                        <p className="text-uppercase blue-text"><strong>Graphic designer</strong></p>



                    </div>
                    <div className="col-md-8 col-xl-8 mb-4">

                        <div className="view overlay rounded z-depth-2">
                            <img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" className="img-fluid"
                                 alt="Sample project image"></img>
                            <a>
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>

                        <div className="card-body">
                            <a href="" className="green-text">
                                <h5 className="font-weight-bold mt-2 mb-3"><i className="fas fa-chart-line pr-2"></i>My project
                                </h5>
                            </a>


                            <a className="btn btn-primary btn-rounded btn-md"> Open</a>
                        </div>
                    </div>
                </div>

            </section>







        </section>


    );
}

export default ProfilePage;