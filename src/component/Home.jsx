import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        id="Home"
        className="container-fluid home d-flex align-items-center justify-content-center"
        style={{ height: "100vh", paddingTop: "100px" }} // Adjust padding as needed
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          className="row"
        >
          <div className="col-md-12">
            <motion.div className="container">
              <div className="row">
                <div className="d-flex align-items-center justify-content-center">
                  <motion.div
                    initial={{ y: -150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="col-md-12 text-center"
                  >
                    <motion.h2
                      initial={{ y: -50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 2 }}
                      className="sc-section text-center py-2 main-section"
                    >
                      SOFTWARE HOME
                    </motion.h2>
                    <motion.h1
                      initial={{ x: 200, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 2 }}
                      className="text-white text-center fw-bold font-sans t Hero-Section"
                    >
                      We build innovative software solutions <br /> for your business
                    </motion.h1>
                    <motion.h3
                      initial={{ x: -200, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 2 }}
                      transition={{ duration: 2 }}
                      className="sc-section py-5 text-center"
                    >
                      At AKM Code, we help businesses turn their ideas into professional apps and websites using the latest technologies.
                    </motion.h3>

                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 2 }}
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






    </>
  );
}
