"use client";
import Link from "next/link";

export function SignupForm() {
  return (
    <div className="w-full max-w-md p-4 border rounded shadow-md mx-auto">
      <form>
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-2">Sign Up</h2>
          <p className="text-gray-600">
            Enter your details to create a new account
          </p>
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="username"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <button className="justify-center w-full p-2 bg-gray-800 text-white rounded hover:bg-gray-600">
            Sign Up
          </button>
        </div>
      </form>
      <div className="mt-4 text-center text-sm">
        Have an account?
        <Link className="underline ml-2" href="/login">
          Sign In
        </Link>
      </div>
    </div>
  );
}
