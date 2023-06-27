import { ReducerContext } from "@/hooks/pageContext";
import getLink from "@/utils/getLink";
import { deleteUserToken, getUserToken } from "@/utils/storageUtil";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function Navbar() {
  const route = useRouter();
  const { user, setUser } = useContext(ReducerContext);

  const getUserData = async () => {
    try {
      const request = await axios.get("http://localhost:8000/api/user", {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      });
      request.headers = {
        Authorization: `Bearer ${getUserToken()}`,
      };
      setUser(request.data.data);
    } catch (err) {}
  };

  useEffect(() => {
    if (!!getUserToken()) {
      getUserData();
      console.log(user);
    }
  }, []);

  const logout = () => {
    deleteUserToken();
    route.replace("/");
    route.reload();
  };

  return (
    <>
      <div className="p-5 shadow-lg bg-white flex justify-between items-center fixed top-0 z-10 w-screen">
        <div className="[&>div:hover]:text-primary [&>div:hover]:cursor-pointer flex space-x-7 text-base font-medium items-center">
          <Link href={"/"}>
            <img src="/logo/logo-blue.svg" />
          </Link>
          <Link href={"#about"}>
            <div>About</div>
          </Link>
          <Link href={"#product"}>
            <div>Product</div>
          </Link>
          <Link href="#manual">
            <div>Manual</div>
          </Link>
          <Link href="#team">
            <div>Team</div>
          </Link>
          <Link href="#contact">
            <div>Contact</div>
          </Link>
        </div>
        <div className="flex space-x-6 items-center">
          {!user.name ? (
            <button
              className="px-4 py-2 rounded-md shadow-md"
              onClick={() => route.push("/login")}
            >
              Login
            </button>
          ) : (
            <div
              className="flex cursor-pointer items-center gap-2"
              onClick={() => {
                route.push("/profile");
              }}
            >
              <div>{user.name}</div>
              <img
                alt="profile picutre"
                src={getLink(user.profile_picture)}
                className="rounded-full shadow object-fill w-[30px] h-[30px]"
              />
            </div>
          )}
          <button
            className={`${
              !!user.name ? "bg-red-600" : "bg-primary"
            } text-white font-medium px-5 py-2 rounded-md  block`}
            onClick={!!user.name ? logout : () => route.push("/register")}
          >
            {!!user.name ? "Logout" : "Register"}
          </button>
        </div>
      </div>
      <div className="h-[88px]"></div>
    </>
  );
}
