import React, { ReactNode } from 'react';

interface RedTextProps {
  children: ReactNode;
}

const RedText: React.FC<RedTextProps> = ({ children }) => {
  return <span style={{ color: 'red' }}>{children}</span>;
};

export default RedText;
