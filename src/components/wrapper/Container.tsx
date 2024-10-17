import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="w-full max-w-5xl mx-auto px-4 pt-4 sm:px-6 lg:px-8">{children}</div>;
};

export default Container;
