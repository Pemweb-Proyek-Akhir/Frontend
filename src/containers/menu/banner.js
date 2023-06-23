export default function MenuBanner() {
  return (
    <div className="relative mb-24">
      <img
        src="/images/banner-home.jpg"
        className="w-screen h-[80vh]  object-cover"
      />
      <div className="bg-flower-600 w-[630px] text-white py-12 rounded-t-[35px] absolute px-[111px] text-center left-[50%] translate-x-[-50%]  bottom-0">
        <div className="text-5xl font-semibold mb-6">Want to Donate?</div>
        <div className="text-2xl">
          Start your journey with helping other get their food
        </div>
      </div>
    </div>
  );
}
