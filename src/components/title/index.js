import React from "react";

export default function Title({ title }) {
  return (
    <div className="w-screen text-center">
      <h1 className="text-6xl font-semibold">{title}</h1>
    </div>
  );
}
