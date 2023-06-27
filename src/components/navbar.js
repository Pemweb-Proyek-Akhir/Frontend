import { ReducerContext } from "@/hooks/pageContext";
import getLink from "@/utils/getLink";
import { getUserToken } from "@/utils/storageUtil";
import axios from "axios";
import Image from "next/image";
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

  return (
    <>
      <div className="p-5 shadow-lg bg-white flex justify-between items-center fixed top-0 z-10 w-screen">
        <div className="[&>div:hover]:text-primary [&>div:hover]:cursor-pointer flex space-x-7 text-base font-medium items-center">
          <img src="/logo/logo-blue.svg" />
          <div className="hover:text-primary">Company</div>
          <div>Marketplace</div>
          <div>Features</div>
          <div>Team</div>
          <div>Contact</div>
        </div>
        <div className="flex space-x-6 items-center">
          {!user ? (
            <button
              className="px-4 py-2 rounded-md shadow-md"
              onClick={() => route.push("/login")}
            >
              Login
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <div>{user.name}</div>
              <img
                alt="profile picutre"
                width={30}
                height={30}
                src={getLink(user.profile_picture)}
                className="rounded-full shadow"
              />
            </div>
          )}
          <button
            className={`${
              user ? "bg-red-600" : "bg-primary"
            } text-white font-medium px-5 py-2 rounded-md  block`}
          >
            {user ? "Logout" : "Register"}
          </button>
        </div>
      </div>
      <div className="h-[88px]"></div>
    </>
  );
}
