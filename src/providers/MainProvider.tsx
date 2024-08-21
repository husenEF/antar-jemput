"use client";

import ErrorBoundary from "@/src/components/errorBoundary";
import { NextAuthProvider } from "./NextAuthProvider";

type Props = {
  children?: React.ReactNode;
};

export const MainProvider = ({ children }: Props) => {
  return (
    <NextAuthProvider>
      <ErrorBoundary>{children}</ErrorBoundary>
    </NextAuthProvider>
  );
};
