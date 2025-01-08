import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="min-h-screen py-12 bg-[#e4e4e4] flex items-center">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        {/* Texto descriptivo */}
        <div
          className="lg:w-1/2 mb-8 lg:mb-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-semibold text-[#1E293B] mb-2">
            Have a Question?
          </h2>
          <p className="text-lg text-[#475569] italic font-light mb-6">
            Contact Us Anytime
          </p>
          <p className="text-lg text-[#475569] leading-relaxed text-justify lg:pr-6">
            Our team is here to assist you with any inquiries or feedback you may 
            have. Whether it’s about algorithms, predictions, or features, don’t 
            hesitate to reach out. We value your input and are dedicated to providing 
            the best support possible.
          </p>
        </div>

        {/* Formulario de contacto */}
        <form
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="lg:w-1/2 bg-white shadow-lg rounded-lg p-8 transition-all duration-300 hover:shadow-xl"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-[#1E293B] text-sm font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#1E293B]"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-[#1E293B] text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#1E293B]"
              placeholder="Write your message here..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1E293B] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#475569] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
