import React from "react";

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
