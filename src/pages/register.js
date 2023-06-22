import Link from "next/link";

export default function Register() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="auth-bg">
        <form onSubmit={onSubmit}>
          <img src="/logo/logo-white.svg" width={250} className="mb-8" />
          <div className="bg-white p-8 w-[380px] rounded-md shadow-lg">
            <div className="text-xl mb-6">Hello, Please Register!</div>
            <div className="mb-1 text-sm">Name</div>
            <input className="mb-6" />
            <div className="mb-1 text-sm">Email</div>
            <input className="mb-6" />
            <div className="text-sm mb-1">Password</div>
            <input className="mb-6" type="password" />

            <button className="bg-flower-600 py-[10px] w-full rounded-lg px-5 text-white mb-6">
              REGISTER
            </button>
            <div>
              <span className="text-gray-500 text-sm">
                Already have an account?{" "}
              </span>
              <span className="text-flower-600 text-sm">
                <Link href={"/login"}>Sign In</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
