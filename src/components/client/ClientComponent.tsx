"use client";

import { useEffect } from "react";

const ClientComponent = () => {
  useEffect(() => {
    console.log('Environment Variables:', {
      DATABASE_URL: process.env.DATABASE_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
      NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    });
  }, []);

  return null; // This component doesn't need to render anything
};

export default ClientComponent;