import React from 'react'

export default function OurFeature() {
    return (
        <>
            <div className="container-fluid feature bg-light py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
                        <h4 className="text-primary">Our Features</h4>
                        <h1 className="display-4 mb-4">Insurance Provide you a Better Future</h1>
                        <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="feature-item p-4 pt-0">
                                <div className="feature-icon p-4 mb-4">
                                    <i className="far fa-handshake fa-3x"></i>
                                </div>
                                <h4 className="mb-4">Interactive Financial Tools</h4>
                                <p className="mb-4">AccuTrust Financial provides personalized financial planning services for retirement, tax, estate, and investment strategies.
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="feature-item p-4 pt-0">
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fa fa-dollar-sign fa-3x"></i>
                                </div>
                                <h4 className="mb-4">Real-Time Market Insights</h4>
                                <p className="mb-4">A secure portal offering easy access to financial statements, portfolios, and documents, with top-tier encryption.
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="feature-item p-4 pt-0">
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fa fa-bullseye fa-3x"></i>
                                </div>
                                <h4 className="mb-4">Secure Client Portal</h4>
                                <p className="mb-4">Stay updated with real-time market trends, and financial news, enabling clients to make informed and strategic investment and financial decisions confidently.
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="feature-item p-4 pt-0">
                                <div className="feature-icon p-4 mb-4">
                                    <i className="fa fa-headphones fa-3x"></i>
                                </div>
                                <h4 className="mb-4">Comprehensive Financial Planning</h4>
                                <p className="mb-4">A set of interactive tools like retirement, tax, and budgeting calculators to help clients achieve financial goals.
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
