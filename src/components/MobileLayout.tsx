
import React from 'react';

interface MobileLayoutProps {
  children: React.ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-lg h-screen">
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;
