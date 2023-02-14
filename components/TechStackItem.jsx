import Button from "./Button";

const TechStackItem = ({ items, title, center }) => (
  <div className="flex gap-2 lg:gap-4 flex-col lg:flex-row py-2 lg:items-center">
    <span className="font-bold text-overlay2 text-sm min-w-[4.5rem]">
      {title}
    </span>
    <div className={`flex gap-2 lg:gap-4 items-center flex-wrap ${center ? "justify-center" : "justify-start"}`}>
      {items.map((item) => (
        <a
          href={item.url}
          key={item.url}
          target="blank"
          rel="noopener noreferrer"
        >
          <Button
            title={item.name}
            variant="tertiary"
            size="md"
            className="group hover:text-lavender"
            icon={<item.Icon fill="fill-text group-hover:fill-lavender" />}
          >
            {item.name}
          </Button>
        </a>
      ))}
    </div>
  </div>
);

export default TechStackItem;
