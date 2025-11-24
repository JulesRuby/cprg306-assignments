"use client";
import Link from "next/link";
import FirebaseLoginForm from "@/components/forms/FirebaseLoginForm";
import GithubLoginForm from "@/components/forms/GithubLoginForm";
import FirebaseSignUpForm from "@/components/forms/FirebaseSignupForm";
import { useAuth } from "../contexts/AuthContext";
import { logout } from "@/lib/auth/authHelpers";

export default function AuthDemoSection() {
  const { authUser, loading } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <section className="my-4 rounded-lg bg-stone-300 p-6 dark:bg-stone-800">
      <header>
        <h2 className="mb-4 text-2xl font-bold">Authentication Section</h2>
        <p></p>
      </header>
      {loading ? (
        <p>Loading auth state...</p>
      ) : authUser ? (
        <div className="space-y-4">
          <div className="rounded bg-green-100 p-4 dark:bg-green-900">
            <p className="font-semibold">Logged in as: {authUser.email}</p>
            <p className="text-sm">User ID: {authUser.uid}</p>
          </div>

          <Link
            href="/week-9/shopping-list"
            className="flex-1 rounded bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
          >
            Go to Shopping List
          </Link>

          <button
            onClick={handleLogout}
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          <GithubLoginForm />
          <FirebaseSignUpForm />
          <FirebaseLoginForm />
        </div>
      )}
    </section>
  );
}
