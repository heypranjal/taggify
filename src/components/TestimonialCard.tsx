import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, position, company }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 relative">
      <Quote className="absolute text-blue-100 top-4 left-4" size={40} />
      <div className="relative z-10">
        <p className="text-gray-700 italic mb-6 leading-relaxed">{quote}</p>
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-gray-600 text-sm">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;