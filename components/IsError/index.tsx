import Link from "next/link";
import React from "react";
import "./style.css";
export default function IsError() {
  return (
    <div className="isErrorContainer">
      <Link href={`/`}>
        <h1 className="textError">Error Page</h1>
      </Link>
    </div>
  );
}
