import { ImageMap } from "./components/Card";

export const FEATURES = [
  {
    id: "1",
    title: "Losses",
    description:
      "Daily Indian traders suffer losses due to lack of guidance and self-control",
    image: "feature1" as keyof ImageMap,
  },
  {
    id: "2",
    title: "Knowledge Gap",
    description:
      "~60% of traders can't explain terms like Demat, mutual funds or understand how Nifty works",
    image: "feature2" as keyof ImageMap,
  },
  {
    id: "3",
    title: "Money Issues",
    description:
      "Traders beliveve they need lots of money to start rather than learning how to trade smartly",
    image: "feature3" as keyof ImageMap,
  },
  {
    id: "4",
    title: "Information overload",
    description:
      "Too much information but not knowing which source to trust",
    image: "feature4" as keyof ImageMap,
  },
  {
    id: "5",
    title: "Time issue",
    description:
      "Traders make rash decision or quit the market altogether due to lack of time",
    image: "feature5" as keyof ImageMap,
  },
];
