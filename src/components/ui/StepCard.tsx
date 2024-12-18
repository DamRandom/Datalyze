import React from 'react';
import Image from 'next/image'; // Usamos Image en lugar de img

const StepCard = ({ title, description, image }: { title: string; description: string; image: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
      <div className="flex-shrink-0 w-full md:w-1/2 h-96 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
