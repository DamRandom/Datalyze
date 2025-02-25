import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true); // Show spinner

    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 1000); // Simulate delay before showing modal

    e.currentTarget.reset();
  };

  return (
    <section className="min-h-screen py-12 bg-[#e4e4e4] flex items-center">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        {/* Descriptive text */}
        <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl font-semibold text-[#1E293B] mb-2">
            ¿Tienes una pregunta?
          </h2>
          <p className="text-lg text-[#475569] italic font-light mb-6">
            Contáctanos en cualquier momento
          </p>
          <p className="text-lg text-[#475569] leading-relaxed text-justify lg:pr-6">
            Nuestro equipo está aquí para ayudarte con cualquier consulta o comentario que puedas tener. Ya sea sobre algoritmos, predicciones o características, no dudes en ponerte en contacto. Valoramos tu opinión y estamos dedicados a proporcionar el mejor soporte posible.
          </p>
        </div>

        {/* Contact form */}
        <form
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          className="lg:w-1/2 bg-white shadow-lg rounded-lg p-8 transition-all duration-300 hover:shadow-xl"
        >
          <div className="mb-6">
            <label htmlFor="email" className="block text-[#1E293B] text-sm font-medium mb-2">
              Direccion Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#1E293B]"
              placeholder="Su email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-[#1E293B] text-sm font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-[#475569] focus:outline-none focus:ring-2 focus:ring-[#1E293B]"
              placeholder="Escriba su mensaje aqui..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1E293B] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#475569] transition-all duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>

      {/* Loading spinner */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="loader mb-4 border-4 border-gray-300 border-t-[#1E293B] rounded-full w-12 h-12 animate-spin"></div>
            <p className="text-white">Enviando mensaje...</p>
          </div>
        </div>
      )}

      {/* Modal with animation */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 animate-fadeIn">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center transform transition-transform duration-300 animate-scaleIn">
            <h3 className="text-lg font-semibold text-[#1E293B] mb-4">¡Mensaje Enviado!</h3>
            <p className="text-sm text-[#475569] mb-4">
              Tu mensaje ha sido enviado. Alguien se pondrá en contacto contigo a través del correo electrónico proporcionado.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-[#1E293B] text-white px-4 py-2 rounded-lg hover:bg-[#475569] transition-all duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
