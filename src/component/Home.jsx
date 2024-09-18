import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        id="Home"
        className="container-fluid home d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", paddingTop: "100px" }} // Adjust padding as needed
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          className="row w-100"
        >
          <div className="col-md-12">
            <motion.div className="container">
              <div className="row position-relative rrrr">
                <div className="col-12 d-flex justify-content-center">
                  <motion.div
                    initial={{ y: -150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                  >
                    <motion.h2
                      initial={{ y: -50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 2 }}
                      className="sc-section text-center main-section "
                    >
                      SOFTWARE HOME
                    </motion.h2>
                    <motion.h1
                      initial={{ x: 200, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 2 }}
                      className="text-white fw-bold font-sans py-2 Hero-Section"
                      style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }} // Responsive font size
                    >
                      We build innovative software solutions <br /> for your business
                    </motion.h1>
                    <motion.h3
                      initial={{ x: -200, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 2 }}
                      className="sc-section text-center"
                      style={{ fontSize: "clamp(1rem, 3vw, 2rem)" }} // Responsive font size
                    >
                      At AKM Code, we help businesses turn their ideas into professional apps and websites using the latest technologies.
                    </motion.h3>

                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 2 }}
                      className="d-flex justify-content-center"
                    >
                      <a
                        className="nav-link"
                        href="https://www.facebook.com/profile.php?id=61565806442892&mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button type="button" className="btn position-relative">
                          <strong className="fw-bold fs-5">Contact Us</strong>
                          <div id="container-stars" className="position-absolute">
                            <div id="stars"></div>
                          </div>
                          <div id="glow" className="position-absolute">
                            <div className="circle"></div>
                            <div className="circle"></div>
                          </div>
                        </button>
                      </a>
                    </motion.div>

                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>


      <div id='about' className="containet-fluid">
    <div className="row"></div>
  </div>



      <div id='services' className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <div className="row py-2">
                <div className="col-md-12 py-5">
                  <motion.div initial={{ y: -150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }} className="title py-5 position-relative d-flex justify-content-center align-items-center wow fadeInDown">
                    <motion.h2 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="position-absolute text-uppercase fw-bold">Services</motion.h2>
                    <motion.h3
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="position-absolute text-uppercase fw-bold">Services</motion.h3>
                  </motion.div>
                </div>

                <motion.div 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="col-md-12 py-3">
                  <motion.p 
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className='text-center services-dec py-1'>
                    What AKM Code Company offers: public relations services, and the manufacture of various websites, mobile applications, and dashboards through a distinguished team to achieve the best quality for your project.
                  </motion.p>
                </motion.div>

                <div className="row"> {/* Added row for better layout control */}
                  <motion.div 
                  initial={{ x: -150, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="col-12 col-md-3 col-sm-6 py-5 d-flex align-items-center justify-content-center"> {/* Adjusted for mobile */}
                    <div className="card">
                    <motion.h2 
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    className='text-center'> Front-End </motion.h2>
                      <div className="card-inner">
                        <div className="front-card-front">
                          <h2 className='text-center text-black'>
                          </h2>
                        </div>
                        <div className="card-back">
                          <p className='text-front text-center'>
                            The front end is the interface that appears to the user. It must be dynamic and impressive to the customer, and this only happens in AKM Code.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                   initial={{ x: -150, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ duration: 1 }}
                  className="col-12 col-md-3 col-sm-6 py-5 d-flex align-items-center justify-content-center"> {/* Adjusted for mobile */}
                    <div className="card">
                    <motion.h2 
                     initial={{ y: 150, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ duration: 2 }}
                    className='text-center'>Back-End</motion.h2>
                      <div className="card-inner">
                        <div className="back-card-front">
                        </div>
                        <div className="card-back">
                          <p className='text-front text-center'>
                            The back end is the server-side part of the application. It handles data processing and integration, ensuring smooth operation for users.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                   initial={{ x: -150, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ duration: 1 }}
                  className="col-12 col-md-3 col-sm-6 py-5 d-flex align-items-center justify-content-center"> {/* Adjusted for mobile */}
                    <div className="card">
                    <motion.h2
                     initial={{ y: 150, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ duration: 2}}
                    className='text-center '>Mobile App</motion.h2>
                      <div className="card-inner">
                        <div  className="mobile-card-front">
                        </div>
                        <div className="card-back">
                          <p className='text-front text-center'>
                          We specialize in creating robust and user-friendly mobile applications. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                   initial={{ x: -150, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ duration: 1 }}
                  className="col-12 col-md-3 col-sm-6 py-5 d-flex align-items-center justify-content-center"> {/* Adjusted for mobile */}
                    <div className="card">
                    <motion.h2
                     initial={{ y: 150, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ duration: 2}}
                    className='text-center '>UI/UX</motion.h2>
                      <div className="card-inner">
                        <div  className="ui-card-front">
                        </div>
                        <div className="card-back">
                          <p className='text-front text-center'>
                            A UI/UX designer focuses on creating a user-friendly interface and experience, ensuring that the application is both functional and aesthetically pleasing.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
