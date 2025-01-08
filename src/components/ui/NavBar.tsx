"use client";

interface NavBarProps {
  sections: { id: string; label: string }[]; // Array de objetos con id y etiqueta para cada sección
}

const NavBar: React.FC<NavBarProps> = ({ sections }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1E293B] text-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/home" className="text-2xl font-bold text-[#DBEAFE]">
          ForecEdu
        </a>

        {/* Navigation Links */}
        <div className="space-x-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="hover:text-[#93C5FD] transition-colors duration-300"
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
