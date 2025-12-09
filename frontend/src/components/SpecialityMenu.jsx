import { specialityData } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

function SpecialityMenu() {
  const navigate = useNavigate();
  return (
    <section id="speciality" className="bg-ice py-12 px-6">
      <div className=" max-w-6xl mx-auto ">
        <h1 className="text-3xl font-semibold text-textColor text-center">
          Explore Our Medical Specialities
        </h1>

        <p className="text-gray-500 text-center mt-2">
          Expert doctors across every major department, ready to support your
          health needs.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
          {/* ----Card---- */}
          {specialityData.map((item) => (
            <Link
              to={`/doctors/${item.speciality}`}
              key={item.speciality}
              className="cursor-pointer"
            >
              <div className="bg-white p-6 flex flex-col items-center rounded-xl shadow-sm hover:shadow-md transition hover:scale-[1.02]">
                <div
                  className="w-24 h-24 p-2 rounded-full bg-[#2962FF]/20
flex items-center justify-center "
                >
                  <img
                    src={item.image}
                    alt={item.speciality}
                    className=" w-[65%] mb-4 object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg text-textColor">
                  {item.speciality}
                </h3>
                <p className="text-gray-500 text-sm mt-1 text-center">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => navigate("/doctors")}
          className="bg-[#2962FF] text-white mx-auto block px-6 py-2 rounded-full hover:bg-[#1F4FCC]"
        >
          Browse All Doctors
        </button>
      </div>
    </section>
  );
}

export default SpecialityMenu;
