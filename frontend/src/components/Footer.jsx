import { assets, specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="mt-12 w-full pt-16 pb-12 px-28 bg-gradient-to-r from-[#2E5AC5] via-[#2E5AC5] via-30% to-[#10296e]
">
      <div className="text-blue-200 flex justify-between">
        <div className="flex flex-col justify-between">
          <div>
            <img src={assets.logo} alt="Logo" className="w-[280px] h-18 my-[-20px]"/>

            <p className="mt-3 text-base text-white">Expert care made accessible and reliable.</p>
          </div>

          {/* ----contact---- */}
          <div>
            <p className="font-semibold text-blue-100">CONTACT</p>
            <p>Phone: +91-xxxxxxx</p>
            <p>Email: support@mediiconnect.com</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16">
          {/* ----company quick links---- */}
          <div>
            <p className="text-blue-50 font-semibold mb-2">COMPANY </p>

            <ul>
              <li className="my-1">
                <Link to="/about">About Us</Link>
              </li>
              <li className="my-1">Privacy Policy</li>
              <li className="my-1">Terms and Conditions</li>
            </ul>
          </div>

          {/* ----services---- */}
          <div>
            <p className="text-blue-50 font-semibold mb-2">SERVICES</p>
            <ul>
              {specialityData.map((item) => (
                <li className="my-1">
                  <Link
                    to={`/doctors/${item.speciality}`}
                    key={item.speciality}
                    className="cursor-pointer"
                  >
                    {item.speciality}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center mt-20 text-blue-100 font-semibold">Copyright 2025@Mediiconnect - All rights reserved.</p>
    </section>
  );
}

export default Footer;
