export const Description = ({
  title,
  description,
  className,
  descriptionList,
}: {
  title: string;
  description?: string;
  className?: string;
  descriptionList?: { id: string; title: string; description: string }[];
}): JSX.Element => {
  return (
    <div className={` flex flex-col gap-4 ${className}`}>
      <div className="text-lg lg:text-2xl md:text-2xl font-bold">{title}</div>
      {description ? (
        <div
          className="text-base lg:text-xl md:text-lg font-normal description [&>p>a]:text-golden"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      ) : null}
      {descriptionList ? (
        <ol className="list-decimal text-base lg:text-xl md:text-lg font-normal text-golden px-4">
          {descriptionList.map((listItem) => (
            <li>
              {listItem.title}:{" "}
              <span className="text-white">{listItem.description}</span>
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  );
};
