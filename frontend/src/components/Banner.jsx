import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  return (
    <div className="w-4/5 mx-auto h-[480px] shadow-sm overflow-hidden rounded-lg">
      {/* ----background---- */}
      <div className="w-full h-full relative">
        <img
          src={assets.banner_bg}
          alt="Banner background"
          className="w-full"
        />
        <div className="bg-[rgb(0,0,0,0.6)] h-full w-full absolute left-0 top-0">
          <div className="w-full h-full flex justify-between px-12">
            {/* ----left side---- */}
            <div className="flex flex-col justify-center gap-3 text-5xl font-semibold text-ice">
              <p>Book Appointment</p>
              <p className="my-2">With 100+ Trusted Doctors</p>

              <button
                className="bg-ice my-4 py-3 px-6 rounded-full text-base self-start text-textColor hover:scale-105 transition-all"
                onClick={() => navigate("/login")}
              >
                Create Account
              </button>
            </div>

            {/* ----right side---- */}
            <img
              src={assets.appointment_img}
              alt="Appointment Banner"
              className="h-[450px] self-end"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
