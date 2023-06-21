export default function Product() {
  return (
    <div>
      <div className="text-5xl text-center font-bold mb-16">Our Product</div>
      <div className="flex px-10 space-x-12 items-center">
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
                Browse a variety of food items that are available for donation.
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
  );
}
