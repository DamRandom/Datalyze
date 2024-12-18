import React from 'react';
import { ScrollIndicatorProps } from '../../types/components';

const ScrollIndicator = ({ steps, currentStep }: ScrollIndicatorProps) => {
  return (
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-center space-y-4">
      {steps.map((_, index) => (
        <div
          key={index}
          className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold
            ${currentStep === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}
            transition-colors duration-300`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default ScrollIndicator;
