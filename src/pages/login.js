import Link from "next/link";

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="auth-bg">
        <form onSubmit={onSubmit}>
          <img src="/logo/logo-white.svg" width={250} className="mb-8" />
          <div className="bg-white p-8 w-[380px] rounded-md shadow-lg">
            <div className="text-xl mb-6">Hello, Welcome Back!</div>
            <div className="mb-1 text-sm">Email</div>
            <input className="mb-6" />
            <div className="text-sm mb-1">Password</div>
            <input className="mb-6" type="password" />
            <div className="flex justify-between mb-6 items-center">
              <div className="flex items-center space-x-2">
                <input className="w-3 h-3" type="checkbox" id="remember-me" />
                <label htmlFor="remember-me" className="text-sm font-medium">
                  Remember me
                </label>
              </div>
              <div className="text-flower-600 text-sm">Lost Password?</div>
            </div>
            <button className="bg-flower-600 py-[10px] w-full rounded-lg px-5 text-white mb-6">
              LOGIN
            </button>
            <div>
              <span className="text-gray-500 text-sm">Not registered? </span>
              <span className="text-flower-600 text-sm">
                <Link href={"/register"}>Create account</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
