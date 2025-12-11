import { assets } from "../assets/assets";

function Header() {
  return (
    <div className="w-full bg-hero-gradient flex flex-col md:flex-row flex-wrap px-6 md:px-10 lg:px-20">

      {/* -----left side ------ */}
      <div className="md:w-1/2 flex flex-col justify-center items-start gap-5 m-auto relative">
        <p className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          Book Appointment <br /> With Trusted Doctors
        </p>

        <p className="md: w-4/5 text-md text-[#e6e8f0]">
          Access expert medical advice and trusted consultations with ease. Book appointments and get top-tier healthcare services - all in one place.
        </p>

        <div className="bg-black/50 py-2 px-4 rounded-lg flex gap-3">
          <img src={assets.group_profiles} alt="Group Profile Image" className="w-28"/>

          <div>
            <p className="text-gray-300 text-lg font-semibold">Top ranked healthcare service</p>
            <p className="text-blue-200 font-bold">100,000+ Happy Patients</p>
          </div>
        </div>

        <a
          href="#speciality"
          className="flex items-center gap-2 bg-ice px-8 py-3 rounded-full text-gray-600 ml-[15%] hover:scale-105 transition-all duration-300 "
        >
          Book Appointment{" "}
          <img src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
        </a>
      </div>

      {/* -----right side ------ */}
      <div className="md:w-1/2 pt-2">
        <img src={assets.header_img} className="w-full bottom-0" />
      </div>
    </div>
  );
}

export default Header;
