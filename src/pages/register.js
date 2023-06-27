import Link from "next/link";
import { useEffect, useState } from "react";
import update from "immutability-helper";
import axios from "axios";
import { getUserToken, setUserToken } from "@/utils/storageUtil";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    user_type: 0,
  });

  useEffect(() => {
    // if (!!getUserToken()) {
    //   router.replace("/u");
    // }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/register", form)
      .then(async (e) => {
        const request = await axios.post("http://localhost:8000/api/login", {
          email: form.email,
          password: form.password,
        });
        setUserToken(request.data.data);
        router.replace("/u");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (e) => {
    setForm(update(form, { [e.target.name]: { $set: e.target.value } }));
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Head>
        <title>Register</title>
      </Head>
      <div className="auth-bg">
        <form onSubmit={onSubmit}>
          <img src="/logo/logo-white.svg" width={250} className="mb-8" />
          <div className="bg-white p-8 w-[380px] rounded-md shadow-lg">
            <div className="text-xl mb-6">Hello, Please Register!</div>
            <div className="mb-1 text-sm">Name</div>
            <input
              className="mb-6"
              placeholder="Input your name"
              name="name"
              onChange={handleChange}
              required
            />
            <div className="mb-1 text-sm">Email</div>
            <input
              className="mb-6"
              placeholder="Input your email"
              name="email"
              onChange={handleChange}
              required
              type="email"
            />
            <div className="text-sm mb-1">Password</div>
            <input
              className="mb-6"
              type="password"
              placeholder="Input your password"
              name="password"
              onChange={handleChange}
              required
            />

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
