"use client";

import { SessionProvider } from "next-auth/react";
import ErrorBoundary from "@/src/components/errorBoundary";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <ErrorBoundary>
      <SessionProvider>{children}</SessionProvider>
    </ErrorBoundary>
  );
};
