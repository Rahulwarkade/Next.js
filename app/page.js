import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const page = () => {
  return (
    <>
      <h1>app route</h1>
      <Link href="/Master">Go to website</Link>
    </>
  );
};

export default page;
