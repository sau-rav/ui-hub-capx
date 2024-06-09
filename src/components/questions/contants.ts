import type { Question } from "./types";

export const QUESTIONS: Question[] = [
  {
    id: "1",
    title: "What is the point of joining the waitlist?",
    position: 1,
    description: "Waitlist members will enjoy several exclusive benefits:",
    descriptionList: [
      {
        id: "1.1",
        title: "Exclusive Benefits",
        description:
          "Access unique features and receive lifetime brokerage discounts, which are available solely to waitlist members.",
      },
      {
        id: "1.2",
        title: "Early Access",
        description:
          "Be among the first to experience and explore our new product.",
      },
      {
        id: "1.3",
        title: "Elite Community",
        description: "Gain entry into an exclusive community of elite traders.",
      },
      {
        id: "1.4",
        title: "CapX Insider",
        description:
          "Have the opportunity to help shape CapX by becoming one of the select 100 individuals helping us design the platform.",
      },
    ],
  },
  {
    id: "2",
    title: "When will the product be live?",
    position: 2,
    description:
      "The top 1000 people on the waitlist leaderboard at the end of 31st July will get early access to CapX in August 2024. For those not in the top 1,000, hang tight—your access is coming soon.",
  },
  {
    id: "3",
    title: "How will the trading work here?",
    position: 3,
    description: "Trading journey of an early access member:",
    descriptionList: [
      {
        id: "3.1",
        title: "Seamless Integration",
        description:
          "Link your preferred brokers, such as Zerodha, on CapX once you get early access.",
      },
      {
        id: "3.2",
        title: "Enhanced Trading Tools",
        description:
          "CapX provides personalized tools to enhance your trading experience, helping you make informed decisions faster.",
      },
      {
        id: "3.3",
        title: "Broker-Managed Trades",
        description:
          "Trade confidently on CapX, knowing that your current brokers, like Zerodha, manage all trading activities, ensuring security and reliability.",
      },
    ],
  },
  {
    id: "4",
    title:
      "Why use a Google account, and what information from my Google account do you access?",
    position: 4,
    description:
      "Google sign-up helps verify the legitimacy of users better plus makes it easier to sign up as well. We get email address, name, and profile picture when someone signs up via Google Signup.",
  },
  {
    id: "5",
    title: "How do we reach out to CapX if we have any queries?",
    position: 5,
    description:
      "<p>Please write to us at <a href='mailto:contact@capx.live'>contact@capx.live</a> to share any thoughts, experiences or problems encountered.</p>",
  },
];
