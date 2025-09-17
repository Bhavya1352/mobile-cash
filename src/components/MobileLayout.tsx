import React from 'react';

interface MobileLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className={`mobile-container ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;