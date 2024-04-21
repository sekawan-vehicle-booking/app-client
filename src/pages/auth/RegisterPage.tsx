export default function RegisterPage() {
  return (
    <>
      <h3 className="font-bold text-2xl mb-4">Register</h3>
      <form className="space-y-2">
        <p>Email</p>
        <input
          className="border w-full p-1 px-3 focus:outline-none text-gray-500"
          type="email"
        />
        <p>Password</p>
        <input
          className="border w-full p-1 px-3 focus:outline-none text-gray-500"
          type="password"
        />
        <button
          className="p-2 bg-blue-500 hover:bg-blue-600 text-white w-full mt-10"
          type="submit"
        >
          Register
        </button>
      </form>
    </>
  );
}
