export default function About() {
  return (
    <div className="about flex px-36 h-[95vh] items-center justify-center mb-10">
      <div className="relative mr-52 shrink-0">
        <img
          src="/images/about1.svg"
          className="w-[260px] h-[260px] top-0 left-0 block"
        />
        <img
          src="/images/about2.svg"
          className="absolute w-[260px] h-[260px] top-[120px] left-[120px] block"
          width={"260px"}
          height={"260px"}
        />
      </div>
      <div className="">
        <div className="text-5xl font-semibold mb-4">Who We Are?</div>
        <div className="w-[600px] text-justify text-xl">
          We are a team of experienced developers and designers who are
          passionate about creating innovative and user-friendly food delivery
          websites. Our team is made up of experts in all aspects of website
          development, from design and development to marketing and customer
          support. We have a deep understanding of the food delivery industry,
          and we are committed to providing our clients with the best possible
          service.
        </div>
      </div>
    </div>
  );
}
