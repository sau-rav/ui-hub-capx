import { Divider } from "../src/components/Divider";
import { BoostYourRankComponents } from "../src/components/leaderBoard/Components/BoostYourRankComponents";
import { ComponentPerksForBeta } from "../src/components/leaderBoard/Components/ComponentPerksForBeta";
import { HeaderComponent } from "../src/components/leaderBoard/Components/HeaderComponent";
import { ShareComponent } from "../src/components/leaderBoard/Components/ShareComponent";
import { SurveyBanner } from "../src/components/leaderBoard/Components/SurveyBanner";
import { TextComponent } from "../src/components/leaderBoard/Components/TextComponent";

export const ScreenLeaderBoard = () => {
  return (
    <div className="text-center">
      <HeaderComponent />
      <TextComponent />
      <SurveyBanner />

      <div style={{ paddingTop: 30, paddingBottom: 35 }}>
        <Divider />
      </div>

      <BoostYourRankComponents />

      <div style={{ paddingTop: 30, paddingBottom: 35 }}>
        <Divider />
      </div>

      <ComponentPerksForBeta />

      <div style={{ paddingTop: 30, paddingBottom: 35 }}>
        <Divider />
      </div>

      <ShareComponent />

      <div className="bg-black font-normal text-base font-montserrat leading-5 text-yellow-400 py-10">
        Copyright CapX 2024. Made in India
      </div>
    </div>
  );
};
