import React from 'react';

export default function Stats() {
  return (
    <div className="bg-purple-600 text-white py-12 px-4 shadow-inner">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-purple-400">
        <div className="text-center md:pb-0 pb-8">
          <div className="text-5xl font-bold mb-2">50K+</div>
          <div className="text-purple-200 font-medium">Active Users</div>
        </div>
        <div className="text-center py-8 md:py-0">
          <div className="text-5xl font-bold mb-2">200+</div>
          <div className="text-purple-200 font-medium">Premium Tools</div>
        </div>
        <div className="text-center pt-8 md:pt-0">
          <div className="text-5xl font-bold mb-2">4.9</div>
          <div className="text-purple-200 font-medium">Rating</div>
        </div>
      </div>
    </div>
  );
}
