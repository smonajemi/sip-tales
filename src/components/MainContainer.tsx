import React from 'react';

interface MainContainerProps {
  children?: React.ReactNode; // Make children optional
  title: string;
}

const MainContainer: React.FC<MainContainerProps> = ({ children, title }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default MainContainer;
