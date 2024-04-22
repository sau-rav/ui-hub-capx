export type Feature = {
  id: string;
  title?: string;
  description?: string;
  icon?: any;
};

export const FeatureCard = ({ feature }: { feature: Feature }): JSX.Element => {
  return (
    <div className="border border-solid rounded-3xl border-red-950 hover:border-orange-900 h-96 p-4 w-80 flex">
      <div className="flex-1 flex items-end text-right">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer Ipsum.
      </div>
    </div>
  );
};
