import React from 'react';
import { motion } from "framer-motion";

export default function Services() {
  return (
    <>
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
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
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
                  initial={{ x: 150, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className='text-center services-dec py-1'>
                    What AKM Code Company offers: public relations services, and the manufacture of various websites, mobile applications, and dashboards through a distinguished team to achieve the best quality for your project.
                  </motion.p>
                </motion.div>

        
                  <motion.div 
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="col-md-3 py-5 d-flex align-items-center justify-content-center">
                    <div className="card">
                    <motion.h2 
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 2 }}
                    transition={{ duration: 1 }}
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
                   initial={{ x: 150, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ duration: 1 }}
                  className="col-md-3 py-5 d-flex align-items-center justify-content-center">
                    <div className="card">
                    <motion.h2 
                     initial={{ y: 150, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 2 }}
                     transition={{ duration: 1 }}
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
                   initial={{ x: 100, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ duration: 1 }}
                  className="col-md-3 py-5 d-flex align-items-center justify-content-center">
  <div className="card">
  <motion.h2
   initial={{ y: 150, opacity: 0 }}
   whileInView={{ y: 0, opacity: 2 }}
   transition={{ duration: 1 }}
  className='text-center'>Mobile App</motion.h2>
    <div className="card-inner d-flex flex-column align-items-center">
      <div className="mobile-card-front">
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
                   initial={{ x: 100, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ duration: 1 }}
                  className="col-md-3 py-5 d-flex align-items-center justify-content-center">
                    <div className="card">
                    <motion.h2
                     initial={{ y: 150, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 2 }}
                     transition={{ duration: 1 }}
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
    </>
  );
}
