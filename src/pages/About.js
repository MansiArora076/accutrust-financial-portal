import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import OurFeature from '../components/OurFeature'
import AboutOurCompany from '../components/AboutOurCompany'
export default function About() {
    return (
        <>
            {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div> */}
            <Header />
            <div class="container-fluid bg-breadcrumb">
                <div class="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 class="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h4>
                    <ol class="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item active text-primary">About</li>
                    </ol>
                </div>
            </div>


            <AboutOurCompany />

            <OurFeature />
            <div class="container-fluid faq-section bg-light pb-5">
                <div class="container pb-5">
                    <div class="row g-5 align-items-center">
                        <div class="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                            <div class="h-100">
                                <div class="mb-5">
                                    <h4 class="text-primary">Some Important FAQ's</h4>
                                    <h1 class="display-4 mb-0">Common Frequently Asked Questions</h1>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Q: What happens during Freshers' Week?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show active" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body rounded">
                                                A: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Q: What is the transfer application process?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                A: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Q: Why should I attend community college?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                A: Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
                            <img src="assets/img/carousel-2.png" class="img-fluid w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid team py-5">
                <div class="container py-5">
                    <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                        <h4 class="text-primary">Our Team</h4>
                        <h1 class="display-4 mb-4">Meet Our Expert Team Members</h1>
                        <p class="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div class="row g-4">
                        <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="assets/img/team-1.jpg" class="img-fluid rounded-top w-100" alt="" />
                                    <div class="team-icon">
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-0" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="team-title p-4">
                                    <h4 class="mb-0">David James</h4>
                                    <p class="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="assets/img/team-2.jpg" class="img-fluid rounded-top w-100" alt="" />
                                    <div class="team-icon">
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-0" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="team-title p-4">
                                    <h4 class="mb-0">David James</h4>
                                    <p class="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="assets/img/team-3.jpg" class="img-fluid rounded-top w-100" alt="" />
                                    <div class="team-icon">
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-0" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="team-title p-4">
                                    <h4 class="mb-0">David James</h4>
                                    <p class="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src="assets/img/team-4.jpg" class="img-fluid rounded-top w-100" alt="" />
                                    <div class="team-icon">
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn btn-primary btn-sm-square rounded-pill mb-0" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="team-title p-4">
                                    <h4 class="mb-0">David James</h4>
                                    <p class="mb-0">Profession</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <div class="container-fluid copyright py-4">
                <div class="container">
                    <div class="row g-4 align-items-center">
                        <div class="col-md-6 text-center text-md-end mb-md-0">
                            <span class="text-body"><a href="#" class="border-bottom text-white"><i class="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right reserved.</span>
                        </div>

                    </div>
                </div>
            </div>

            <a href="#" class="btn btn-primary btn-lg-square rounded-circle back-to-top"><i class="fa fa-arrow-up"></i></a>





        </>
    )
}
