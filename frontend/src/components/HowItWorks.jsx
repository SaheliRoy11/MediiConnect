import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function HowItWorks() {
  return (
    <section className="w-full mb-12 py-12 bg-gradient-to-b from-[#ffffff] to-[#E9FBF8]">
      <h1 className="text-3xl font-semibold text-textColor text-center">
        How <span className="text-primary font-bold text-4xl">Mediiconnect</span> Makes
        Healthcare Simple
      </h1>

      <p className="text-lg text-gray-500 text-center mt-2">
        Your health journey, streamlined in just a few steps.
      </p>

      <div className="py-20 flex justify-center gap-10">
        <div className="w-1/4 rounded-2xl shadow-lg bg-white flex flex-col items-center py-8 px-6 border-t-4 border-[#e0e7ff]">
          <div className="bg-[#E8F0FF] rounded-full p-6 m-4">
            <FontAwesomeIcon
              icon="fa-solid fa-magnifying-glass"
              className="text-4xl text-[#2962FF]"
            />
          </div>
          <p className="text-lg font-semibold text-textColor">Search & Select</p>
          <p className="text-textMuted text-center">
            Browse specialists, read profiles, and find the doctor that fits
            your needs.
          </p>
        </div>

        <div className="w-1/4 rounded-2xl shadow-lg bg-white flex flex-col items-center py-8 px-6 border-t-4 border-[#e0e7ff]">
          <div className="bg-[#E8F0FF] rounded-full p-6 m-4">
            <FontAwesomeIcon
              icon="fa-solid fa-calendar"
              className="text-4xl text-[#2962FF]"
            />
          </div>
          <p className="text-lg font-semibold text-textColor">Book Instantly</p>
          <p className="text-textMuted text-center">
            Choose your preferred time slot and confirm your appointment in
            seconds.
          </p>
        </div>

        <div className="w-1/4 rounded-2xl shadow-lg bg-white flex flex-col items-center py-8 px-6 border-t-4 border-[#e0e7ff]">
          <div className="bg-[#E8F0FF] rounded-full p-6 m-4">
            <FontAwesomeIcon
              icon="fa-solid fa-stethoscope"
              className="text-4xl text-[#2962FF]"
            />
          </div>
          <p className="text-lg font-semibold text-textColor">Get Care Easily</p>
          <p className="text-textMuted text-center">
            Visit the clinic or connect online—your doctor will be ready for
            you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
