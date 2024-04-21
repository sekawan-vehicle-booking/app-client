import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>Auth Layout</h1>
      {children}
    </>
  );
}
