import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getUserToken } from "@/utils/storageUtil";
import axios from "axios";
import update from "immutability-helper";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
// import {} from 'reac'

export default function Pembayaran() {
  const route = useRouter();
  const [pembayaran, setPembayaran] = useState(0);
  const [open, setOpen] = useState(false);
  const refModal = useRef(null);
  const [paket, setPaket] = useState({
    name: "",
    price: 0,
  });

  const [form, setForm] = useState({
    campaign_id: route.query.campaign,
    package_id: route.query.pembayaran,
    name: "",
    address: "",
    phone_number: "",
    price: 0,
    quantity: 0,
    total: 0,
    payment_method: "credit_card",
  });

  const getPackage = async () => {
    try {
      const request = await axios.get(
        `http://localhost:8000/api/package/${route.query.pembayaran}`,
        {
          headers: { Authorization: `Bearer ${getUserToken()}` },
        }
      );
      setPaket(request.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setForm({ ...form, price: paket.price });
  }, [paket]);

  useEffect(() => {
    getPackage();
  }, []);

  const handleOptionChange = (e) => {
    setPembayaran(e.target.value);
  };

  useEffect(() => {
    console.log(open);
  }, [open]);

  const handleChange = (e) => {
    setForm(update(form, { [e.target.name]: { $set: e.target.value } }));
  };

  const handleCheckout = async () => {
    setOpen(true);
    try {
      const request = await axios.post(
        "http://localhost:8000/api/orders",
        form,
        {
          headers: {
            Authorization: `Bearer ${getUserToken()}`,
          },
        }
      );

      setTimeout(() => {
        route.replace("/u");
      }, [2000]);
    } catch (err) {}
  };

  return (
    <div>
      <Navbar />
      <div className="px-32 py-24">
        <div className="text-[22px] font-light mb-16">
          {"Home > Campaign > Payment"}
        </div>
        <div className="flex gap-28">
          <div className="basis-[40%]">
            <div className="text-xl font-bold mb-6">Data Order</div>
            <div className="mb-2">Name</div>
            <input
              className="mb-6"
              name="name"
              onChange={handleChange}
              placeholder="Input Your Name"
            />
            <div className="mb-2">Address</div>
            <input
              className="mb-6"
              name="address"
              onChange={handleChange}
              placeholder="Input Your Address"
            />
            <div className="mb-2">Phone Number</div>
            <input
              className="mb-10"
              name="phone_number"
              onChange={handleChange}
              placeholder="Input Your Phone Number"
            />
            <div className="text-xl font-bold mb-4">Receiver</div>
            <div className="py-5 px-4 text-xl text-slate-800 shadow-lg rounded-lg ">
              <div className="mb-1">Yayasan Adihusada Malang</div>
              <div className="text-slate-400 font-light mb-4">
                (+62) 812-3456-7890
              </div>
              <div className="font-bold">Jl. Veteran No. 190</div>
              <div>Klojen, Kota Malang, Jawa Timur, 65115</div>
            </div>
          </div>
          <div className="basis-[60%]">
            <div className="font-bold text-xl mb-6">Order Resume</div>
            <div className="bg-slate-100 items-center rounded-xl mb-10 shadow-md px-8 py-6 flex justify-between  text-slate-600">
              <div className="flex gap-2 items-center">
                <div className="flex gap-3 items-center px-2 border-slate-500 border-2 py-1 rounded-md">
                  <div
                    onClick={() => {
                      setForm({
                        ...form,
                        quantity: form.quantity + 1,
                        total: form.price * (form.quantity + 1),
                      });
                    }}
                    className="border-slate-300 border-2 w-8 rounded-md h-8 flex items-center justify-center hover:cursor-pointer"
                  >
                    <i className="fa fa-plus"></i>
                  </div>
                  <div className="text-xl">{form.quantity}</div>
                  <div className="border-slate-300 border-2 w-8 rounded-md h-8 flex items-center justify-center hover:cursor-pointer">
                    <i
                      className="fa fa-minus"
                      onClick={() => {
                        setForm({
                          ...form,
                          quantity: form.quantity - 1,
                          total: form.price * (form.quantity - 1),
                        });
                      }}
                    ></i>
                  </div>
                </div>
                <div className=" font-medium text-xl">{paket.name}</div>
              </div>
              <div className="font-semibold text-xl">Rp{paket.price}</div>
            </div>
            <div className="text-xl font-bold mb-6">Payment Method</div>
            <div>
              <div
                onClick={() => setPembayaran(1)}
                className="bg-slate-100 hover:cursor-pointer items-center gap-5 text-slate-600 text-xl rounded-xl flex justify-start mb-10 shadow-md px-8 py-6"
              >
                <input
                  type="radio"
                  value="1"
                  checked={pembayaran == 1}
                  id="1"
                  onChange={handleOptionChange}
                  className="w-fit"
                />
                <img src="/icons/shopeepay.svg" />
                <div>ShopeePay</div>
              </div>
              <div
                onClick={() => setPembayaran(2)}
                className="bg-slate-100 hover:cursor-pointer items-center gap-5 text-slate-600 text-xl rounded-xl flex justify-start mb-7 shadow-md px-8 py-6"
              >
                <input
                  type="radio"
                  value="2"
                  checked={pembayaran == 2}
                  id="2"
                  onChange={handleOptionChange}
                  className="w-fit"
                />
                <img src="/icons/gopay.svg" />
                <div>Gopay</div>
              </div>
              <button
                className="px-5 py-3 bg-secondary rounded-lg text-white shadow-md disabled:bg-slate-300"
                disabled={pembayaran == 0}
                onClick={handleCheckout}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
      <ReactModal
        className={
          "bg-white w-fit rounded-xl py-24 px-20 mx-auto mt-10 shadow-xl text-center"
        }
        style={{ overlay: { zIndex: 1000 } }}
        isOpen={open}
      >
        <div ref={refModal}>
          <img
            src="/icons/success.svg"
            width={282}
            height={282}
            className="mb-16"
          />
          <div className="text-secondary font-bold text-2xl">
            DONATE
            <br />
            SUCCESS!
          </div>
        </div>
      </ReactModal>
      <Footer />
    </div>
  );
}
