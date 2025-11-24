"use client";
// context stuff
import { createContext, useContext, useEffect, useState } from "react";
// firebase sdk auth variables
import { onAuthStateChanged, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
// our auth
import { auth } from "../firebase/config";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const firebaseSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          console.log("User Authenticated: ", user.email);
        } else {
          console.log("No user found");
        }
        setAuthUser(user);
        setLoading(false);
        console.log("loading complete");
      },
      (error) => {
        console.error("Auth error", error);
        setAuthUser(null);
        setLoading(false);
      }
    );
    return () => {
      console.log("UNsubscribing from auth listener");
      unsubscribe();
    };
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, loading, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "Context Error: useAuth must be used within the Auth Provider"
    );
  }
  return context;
}
