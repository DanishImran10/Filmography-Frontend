function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-gray-800 p-6 rounded w-80">
        <h2 className="text-white text-xl mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 rounded bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="bg-blue-500 w-full mt-2 py-2 rounded text-white hover:bg-blue-600 cursor-pointer">
          Login
        </button>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Don't have an account?
          <a href="/signup" className="text-blue-400 ml-1 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
