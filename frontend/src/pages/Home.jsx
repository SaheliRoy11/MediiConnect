import Banner from "../components/Banner";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";

function Home() {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <HowItWorks />
      <Banner />
    </div>
  );
}

export default Home;
