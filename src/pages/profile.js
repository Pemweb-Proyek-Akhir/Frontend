import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ReducerContext } from "@/hooks/pageContext";
import getLink from "@/utils/getLink";
import { getUserToken } from "@/utils/storageUtil";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function ProfilePage() {
  const route = useRouter();
  const { user, setUser } = useContext(ReducerContext);
  const [data, setData] = useState({
    id: 5,
    name: "wawa",
    email: "wawa@gmail.com",
    password: "$2y$10$PC1lcdLh9gQlEjWhpvsRyujTh.GFe2sl7cdsZSYDgAAKqPk1NP0IC",
    user_type: 0,
    profile_picture:
      "localhost:8000/api/public/images/1687825929Screenshot_2023-06-23_164135-removebg-preview.png",
    created_at: "2023-06-27T00:30:03.000000Z",
    updated_at: "2023-06-27T00:32:09.000000Z",
  });

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
    if (!getUserToken()) {
      route.replace("/");
    }
    getUserData();
  }, []);

  useEffect(() => {
    setData(user);
  }, [user]);

  const [pp, setPp] = useState(null);

  useEffect(() => {
    console.log(pp);
  }, [pp]);

  const handleChangePhoto = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      await axios.post(
        "http://localhost:8000/api/user/profile-photo",
        formData,
        {
          headers: {
            Authorization: `Bearer ${getUserToken()}`,
          },
        }
      );

      getUserData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="px-24 py-16">
        <div className="font-bold text-xl mb-4">Your Profile</div>
        <div className="flex gap-24">
          <div className="basis-[15%]">
            <img
              src={getLink(user.profile_picture)}
              className="rounded-full w-full aspect-square"
            />
            <input
              hidden
              type="file"
              id="change-pp"
              onChange={handleChangePhoto}
            />
            <label
              htmlFor="change-pp"
              className="bg-primary text-white shadow-lg w-full p-1 rounded mt-4 cursor-pointer block text-center"
            >
              Change Photo
            </label>
            <div className="bg-green-300 mt-3 text-center">
              {user.user_type == 1 ? "Admin" : "Customer"}
            </div>
          </div>
          <div className="basis-[47.5%]">
            <div>Name</div>
            <input value={data.name} className="mb-4" disabled />
            <div>Email</div>
            <input value={data.email} disabled className="mb-4" />
            <div>User Type</div>
            <input
              value={data.user_type == 1 ? "Admin" : "Customer"}
              disabled
            />
          </div>
          <div className="basis-[37.5%]">
            <div>Password</div>
            <input value={"* * * * * * *"} type="password" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
