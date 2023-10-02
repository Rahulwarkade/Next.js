import React from "react";
import Link from "next/link";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const layout = ({ children }) => {
  return (
    <>
      <nav className="container mt-4 pl-4 d-flex gap-4">
        <Link href="/Master/Home">Home</Link>
        <Link href="/Master/signin">signin</Link>
        <Link href="/Master/signup">signup</Link>
      </nav>
      {children}
    </>
  );
};

export default layout;
