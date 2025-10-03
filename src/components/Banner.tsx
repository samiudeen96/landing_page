import Button from "./Button";

const Banner = () => {
  return (
    <div className="bg-[#F1F1F1] px-4 md:px-10 py-16 md:py-28 my-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
        HAVE A PROJECT IN MIND ?
      </h1>

      <div>
        <Button label="DROP AN INQUIRY" path="" />
      </div>
    </div>
  );
};

export default Banner;
