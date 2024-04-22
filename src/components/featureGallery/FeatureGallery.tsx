const FEATURES = Array(10).map((item, index) => ({
  id: index,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}));

export const FeatureGallery = (): JSX.Element => {
  return (
    <div className="p-16 bg-slate-300 flex flex-col gap-3">
      <div className="flex-1 text-black text-8xl font-bold">
        Text to add here, forever now
      </div>
      <ul className="m-0 p-0 whitespace-nowrap w-full overflow-x-auto">
        {FEATURES.map((feature) => (
          <li key={feature.id}></li>
        ))}
      </ul>
    </div>
  );
};
