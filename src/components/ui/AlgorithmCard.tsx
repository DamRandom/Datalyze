// components/ui/AlgorithmCard.tsx
import { AlgorithmCardProps } from "../../types/components";

const AlgorithmCard = ({ title, subtitle, description }: AlgorithmCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out relative">
      {/* Título */}
      <h3 className="text-2xl font-semibold text-[#1E293B] mb-2 truncate">{title}</h3>

      {/* Subtítulo */}
      <p className={`text-sm ${subtitle ? "text-[#9CA3AF]" : "text-transparent"} mb-4`}>
        {subtitle || " "} {/* Mantén una línea para los subtítulos vacíos */}
      </p>

      {/* Descripción */}
      <p className="text-[#475569] text-lg mb-4 text-justify">{description}</p>

      {/* Botón "Leer más" */}
      <button className="absolute bottom-4 right-4 text-[#2563EB] font-semibold hover:text-[#1D4ED8]">
        Leer más...
      </button>
    </div>
  );
};

export default AlgorithmCard;
