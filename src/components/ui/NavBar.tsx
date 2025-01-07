"use client";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1E293B] text-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-[#DBEAFE]">
          ForecEdu
        </a>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a href="#upload" className="hover:text-[#93C5FD] transition-colors duration-300">
            Upload
          </a>
          <a href="#how-it-works" className="hover:text-[#93C5FD] transition-colors duration-300">
            How It Works
          </a>
          <a href="#algorithms" className="hover:text-[#93C5FD] transition-colors duration-300">
            Algorithms
          </a>
          <a href="#examples" className="hover:text-[#93C5FD] transition-colors duration-300">
            Examples
          </a>
          <a href="#contact" className="hover:text-[#93C5FD] transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
