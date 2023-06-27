export default function Product() {
  return (
    <div id="product" className="mb-32">
      <div className="">
        <div className="text-5xl text-center font-bold mb-16">Our Product</div>
        <div className="flex px-10 space-x-12 items-center mb-20">
          <div className="basis-[50%]">
            <div className="w-[80%] mx-auto my-auto">
              <div className="text-4xl font-semibold mb-8">aseupan</div>
              <div className="text-justify mb-8 text-xl">
                Aseupan is a new app that allows you to donate food to those in
                need. It's a great way to help those less fortunate, reduce food
                waste, and feel good about yourself. With Aseupan, you can:
              </div>
              <ol className="mb-8 text-xl">
                <li>
                  Browse a variety of food items that are available for
                  donation.
                </li>
                <li>Donate food that you're not going to eat.</li>
                <li>Track your food donation activity.</li>
              </ol>
              <button className="bg-primary text-white px-4 py-2 rounded-md">
                Try Aseupan
              </button>
            </div>
          </div>

          <div className="basis-[50%]">
            <img src="/images/product.svg" width={"80%"} />
          </div>
        </div>
      </div>
      <div className="flex px-36 space-x-20 items-center">
        <div className="basis-[50%]">
          <img src="/images/kitchen.svg" width={"90%"} />
        </div>
        <div className="basis-[50%]">
          <div className="text-3xl font-bold mb-6">aseupan kitchen</div>
          <div className="text-xl text-slate-700">
            Introducing aseupan Kitchen, an unique website dedicated to food
            donation and delivery.
            <br />
            <br /> aseupan Kitchen is brought to you by the aseupan team, who
            have curated a range of meal packages and snacks that can be
            delivered to individuals in need based on the addresses provided by
            you.
            <br />
            <br /> Join us in our mission to provide nourishment to those in
            need through aseupan. Together, we can be a food hero.
          </div>
        </div>
      </div>
    </div>
  );
}
