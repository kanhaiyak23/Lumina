import React from 'react';
import { useParams } from 'react-router-dom';
import { POLICIES } from '../constants';
import ReactMarkdown from 'react-markdown'; // Actually, I'll write a simple parser to avoid extra dependencies or just render formatted text.

// Since I cannot import external libraries like react-markdown without user permission, I will do a simple text render with split.
// The content in constants is simple markdown-like.

const Legal = () => {
  const { type } = useParams<{ type: string }>();
  
  // Mapping URL param to policy key
  const policyKey = type as keyof typeof POLICIES;
  const policy = POLICIES[policyKey];

  if (!policy) {
    return <div className="min-h-screen flex items-center justify-center">Policy not found</div>;
  }

  // Simple formatter for the text content
  const formatContent = (text: string) => {
    return text.split('\n').map((line, index) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold mt-8 mb-4 text-gray-900">{trimmed.replace('### ', '')}</h3>;
      }
      if (trimmed.startsWith('* ')) {
        return <li key={index} className="ml-4 list-disc text-gray-600 mb-2">{trimmed.replace('* ', '')}</li>;
      }
      if (trimmed === '') {
        return <br key={index} />;
      }
      // Handle bolding **text** simply
      const parts = trimmed.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={index} className="text-gray-600 leading-relaxed mb-2">
          {parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={i} className="font-semibold text-gray-800">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">{policy.title}</h1>
        <div className="prose prose-gray max-w-none">
          {formatContent(policy.content)}
        </div>
      </div>
    </div>
  );
};

export default Legal;