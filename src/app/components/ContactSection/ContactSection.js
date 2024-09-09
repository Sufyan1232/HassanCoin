import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md"; 

const ContactSection = () => {
  return (
    <section className="py-12 " style={{backgroundColor: '#030B15'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-white">Contact Us</h2>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center" >
          <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="bg-white p-8 shadow-lg rounded-lg"style={{backgroundColor: '#2D9AA0'}}>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="w-full text-white focus:outline-none p-3 border border-cyan-300 border-4 rounded-lg" style={{backgroundColor: '#0B1D33'}}
                      id="inputName4"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="w-full text-white focus:outline-none p-3 border border-cyan-300 border-4 rounded-lg" style={{backgroundColor: '#0B1D33'}}
                      id="inputPhone4"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="form-group mt-6">
                  <input
                    type="email"
                    className="w-full text-white focus:outline-none p-3 border border-cyan-300 border-4 rounded-lg" style={{backgroundColor: '#0B1D33'}}
                    id="inputEmail4"
                    placeholder="Email id"
                  />
                </div>
                <div className="form-group mt-6">
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full text-white focus:outline-none p-3 border rounded-md focus:outline-none border-cyan-300 border-4 " style={{backgroundColor: '#0B1D33'}}
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-slate-900 text-white py-2 px-4 rounded hover:text-cyan-300 focus:outline-cyan-500 border-cyan-300 border-4"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center md:flex-row md:justify-around">
          <a href="#" className="flex items-center mb-6 md:mb-0">
            <div className="w-18 h-12 rounded-full flex items-center justify-center mr-4">
              <MdEmail size={30} color='white'/>
            </div>
            <h6 className="text-slate-100 hover:text-cyan-300">Loram Ipusum ari lo elisant na</h6>
          </a>
          <a href="#" className="flex items-center mb-6 md:mb-0">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
            <FaPhoneAlt size={30} color='white'/>
            </div>
            <h6 className="text-slate-100 hover:text-cyan-300">(+12 1234456789)</h6>
          </a>
          <a href="#" className="flex items-center">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
            <MdLocationPin size={30} color='white'/>
            </div>
            <h6 className="text-slate-100 hover:text-cyan-300">demo@gmail.com</h6>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
