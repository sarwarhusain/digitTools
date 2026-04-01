import video from "../../assets/Play.png";
import bannerImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="container mx-auto flex items-center justify-between mt-10">
      <div className="">
        <button className="btn  gap-5 bg-[#E1E7FF] text-[#9514FA] ">
          <div className="indicator">
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
          New: AI-Powered Tools Available
        </button>
        <div className="">
          <h1 className="md:text-[72px] text-4xl font-bold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="md:text-2xl text-sm text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
        </div>
        <div className="space-x-5 mt-5">
          <button className="btn  rounded-full text-white bg-linear-to-r from-[#7B2FF7] to-[#F107A3] border-none">
            Explore Products
          </button>
          <button className=" btn text-[#9514FA] rounded-full">
            <img src={video} alt="" /> Watch Demo
          </button>
        </div>
      </div>
      <div>
        <img className="w-auto" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
