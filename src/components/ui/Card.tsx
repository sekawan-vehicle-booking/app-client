import React from "react";

export default function Card({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="bg-white p-5 rounded-md shadow-sm">{children}</div>
    </>
  );
}
