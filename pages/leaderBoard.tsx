import { Divider } from "../src/components/Divider";
import { BoostYourRankComponents } from "../src/components/LeaderBoard/Components/BoostYourRankComponents";
import { ComponentPerksForBeta } from "../src/components/LeaderBoard/Components/ComponentPerksForBeta";
import { joiningWaitList } from "../src/components/LeaderBoard/Components/Constants";
import { HeaderComponent } from "../src/components/LeaderBoard/Components/HeaderComponent";
import { SurveyBanner } from "../src/components/LeaderBoard/Components/SurveyBanner";
import { TextComponent } from "../src/components/LeaderBoard/Components/TextComponent";
import { NavBar } from "../src/components/NavBar";

const ScreenLeaderBoard = () => {
  return (
    <div className="bg-black text-center font-montserrat">
      <NavBar />
      <HeaderComponent />
      <TextComponent />
      <SurveyBanner />

      <div className="mt-10 mb-10">
        <Divider />
      </div>

      <BoostYourRankComponents />

      <div className="mt-10 mb-10">
        <Divider />
      </div>

      <div
        style={{
          padding: 20,
          textAlign: "start",
        }}
      >
        <div className="text-white font-bold text-xl md:text-7xl lg:text-8xl ">
          Perks of joining{" "}
          <span className="text-yellow-500">priority access</span>
        </div>
      </div>

      <ComponentPerksForBeta data={joiningWaitList} />

      <div className="mt-10">
        <Divider />
      </div>
    </div>
  );
};

export default ScreenLeaderBoard;
