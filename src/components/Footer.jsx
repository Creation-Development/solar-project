import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="text-center text-lg-start text-light">
                <section class="py-5">
                    <div class="container text-center text-md-start pt-5">

                        <div class="row">
                            <div class="col-md-4 col-sm-12 col-xs-12 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            <div class="col-md-2 col-sm-6 col-xs-6 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset text-decoration-none">Angular</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset text-decoration-none">React</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset text-decoration-none">Vue</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset text-decoration-none">Laravel</a>
                                </p>
                            </div>
                            <div class="col-md-2 col-sm-6 col-xs-6 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Quick Links
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset text-decoration-none">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset text-decoration-none">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset text-decoration-none">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset text-decoration-none">Help</a>
                                </p>
                            </div>
                            <div class="col-md-4 col-sm-12 col-xs-12 mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p><i class="fas fa-envelope me-3"></i>info@promech.com</p>
                                <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="text-center p-2" style={{ backgroundColor: "#43464c" }}>
                    <section
                        class="d-flex justify-content-center p-4"
                    >
                        <div class="me-5">
                        <div>
                            <a href="" class="me-4 text-reset text-decoration-none">
                                <i class="fab fa-facebook-f foo"></i>
                            </a>
                            <a href="" class="me-4 text-reset text-decoration-none">
                                <i class="fab fa-twitter foo"></i>
                            </a>
                            <a href="" class="me-4 text-reset text-decoration-none">
                                <i class="fab fa-google foo"></i>
                            </a>
                            <a href="" class="me-4 text-reset text-decoration-none">
                                <i class="fab fa-instagram foo"></i>
                            </a>
                        </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    )
}

export default Footer