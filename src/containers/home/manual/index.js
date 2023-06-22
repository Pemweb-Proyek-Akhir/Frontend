export default function Manual() {
  return (
    <div className="px-24 mb-24">
      <div className="text-5xl text-center font-bold text-slate-900 mb-20">
        How to Use?
      </div>
      <div className="flex space-x-8 text-slate-600 font-bold text-[28px]">
        <div className="grow px-4 py-8 bg-slate-100 rounded-2xl shadow-xl text-center">
          <img
            className="mx-auto mb-5 h-[250px] w-[250px]"
            src="/images/man.svg"
          />
          <div>
            Create
            <br />
            Account
          </div>
        </div>
        <div className="grow px-4 py-8 bg-slate-100 rounded-2xl shadow-xl text-center">
          <img
            className="mx-auto mb-5 h-[250px] w-[250px]"
            src="/images/geography.svg"
          />
          <div>
            Choose Donation
            <br />
            Location
          </div>
        </div>
        <div className="grow px-4 py-8 bg-slate-100 rounded-2xl shadow-xl text-center">
          <img
            className="mx-auto mb-5 h-[250px] w-[250px]"
            src="/images/payment.svg"
          />
          <div>
            Pay with
            <br />
            Chips
          </div>
        </div>
        <div className="grow px-4 py-8 bg-slate-100 rounded-2xl shadow-xl text-center">
          <img
            className="mx-auto mb-5 h-[250px] w-[250px]"
            src="/images/courier.svg"
          />
          <div>
            We Deliver
            <br />
            To Them
          </div>
        </div>
      </div>
    </div>
  );
}
