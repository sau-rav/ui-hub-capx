import { Divider } from "../src/components/Divider";
import { BoostYourRankComponents } from "../src/components/LeaderBoard/Components/BoostYourRankComponents";
import { ComponentPerksForBeta } from "../src/components/LeaderBoard/Components/ComponentPerksForBeta";
import { HeaderComponent } from "../src/components/LeaderBoard/Components/HeaderComponent";
import { ShareComponent } from "../src/components/LeaderBoard/Components/ShareComponent";
import { SurveyBanner } from "../src/components/LeaderBoard/Components/SurveyBanner";
import { TextComponent } from "../src/components/LeaderBoard/Components/TextComponent";

const ScreenLeaderBoard = () => {
  return (
    <div className="text-center font-montserrat">
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

      <ComponentPerksForBeta />

      <div className="mt-10 mb-10">
        <Divider />
      </div>

      <ShareComponent />

      <div className="bg-black font-normal text-base leading-5 text-yellow-400 py-10">
        Copyright CapX 2024. Made in India
      </div>
    </div>
  );
};

export default ScreenLeaderBoard;
