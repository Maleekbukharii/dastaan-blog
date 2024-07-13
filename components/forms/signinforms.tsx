import Link from "next/link";

export function SigninForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-4 border rounded shadow-md mx-2 sm:mx-auto md:p-6 lg:p-8 bg-white">
        <form>
          <div className="mb-4">
            <h2 className="text-3xl font-bold mb-2 text-center">Sign In</h2>
            <p className="text-gray-600 text-center">
              Enter your details to sign in to your account
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="identifier"
              name="identifier"
              type="text"
              placeholder="username or email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            />
          </div>
          <div>
            <button className="w-full p-2 bg-gray-800 text-white rounded hover:bg-gray-600 focus:outline-none">
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Don't have an account?
          <Link href="signup" className="underline ml-2">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
