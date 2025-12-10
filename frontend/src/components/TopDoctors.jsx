import { assets, doctors } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const bgColors = [
  "bg-lavenderMist",
  "bg-peachVeil",
  "bg-mintMist",
  "bg-lightBlue",
];

function TopDoctors() {
  const navigate = useNavigate();

  return (
    <section className="py-12">
      <h1 className="text-3xl font-semibold text-textColor text-center">
        Top Doctors You Can Trust
      </h1>
      <p className="text-lg text-gray-500 text-center mt-2">
        Carefully chosen experts from leading medical specialties.
      </p>

      <div className="py-20 relative bg-gradient-to-b from-white to-[#f6f8ff] lg:h-[54rem]">
        {/* ----Blobs----- */}
        <div class="absolute top-0 left-0 w-72 h-72 bg-[#87e0bd] opacity-20 blur-3xl rounded-full"></div>

        <div class="absolute bottom-0 right-0 w-80 h-80 bg-[#af91e2] opacity-20 blur-3xl rounded-full"></div>

        <div class="absolute top-1/3 right-1/4 w-64 h-64 bg-[#85a5e9] opacity-20 blur-3xl rounded-full"></div>

        {/* -----Card Container */}
        <div className="absolute z-10 w-full flex flex-wrap justify-center gap-x-4 gap-y-24 bg-transparent">
          {doctors.slice(0, 6).map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className={`w-[225px] h-[245px] rounded-2xl ${
                bgColors[index % bgColors.length]
              } hover:translate-y-[-10px] transition duration-500 flex flex-col items-center m-6`}
              key={item.name}
            >
              <img
                src={item.image}
                alt={item.name}
                className="lg:max-w-xs mt-[-85px]"
              />
              <div className="bg-white w-[94%] shadow-lg px-4 py-3 rounded-xl flex gap-4 items-center justify-between">
                <div>
                  <p className="text-textColor font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-700">{item.speciality}</p>
                </div>

                <img
                  src={assets.diagonal_arrow_icon}
                  alt="diagonal arrow"
                  className="w-4 mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopDoctors;
