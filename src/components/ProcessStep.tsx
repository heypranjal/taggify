import React from 'react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, isLast = false }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg">
          {number}
        </div>
        {!isLast && (
          <div className="h-full w-0.5 bg-blue-200 my-2"></div>
        )}
      </div>
      <div className="ml-6 pb-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;