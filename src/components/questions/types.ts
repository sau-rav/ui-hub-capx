export type Question = {
  id: string;
  title: string;
  position: number;
  description: string;
  descriptionList?: { id: string; title: string; description: string }[];
};
