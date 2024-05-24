import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { UserProvider } from "../contexts/user";
import LoginPage from "../components/Login/LoginPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
function Login() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [router]);

  return (
    <>
      <Head>
        <title>İkinci El Kitap Proje | Giriş Yap</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UserProvider>
        <LoginPage />
      </UserProvider>
    </>
  );
}

export default Login;
