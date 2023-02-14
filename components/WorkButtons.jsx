import Button from "./Button";
import GitHub from "./icons/GitHub";
import ExternalLink from "./icons/ExternalLink";

const WorkButtons = ({ url, sourceCode }) => (
  <div className="flex items-center pt-4 gap-2 flex-col sm:flex-row">
    {url !== "https://mah.codes" ? (
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="w-full"
      >
        <Button
          variant="primary"
          size="lg"
          className="w-full bg-lavender"
          icon={<ExternalLink fill="fill-base" />}
          title="Visit"
        >
          Visit
        </Button>
      </a>
    ) : null}
    <a
      href={sourceCode}
      target="_blank"
      rel="noreferrer noopener"
      className="w-full"
    >
      <Button
        title="Source Code"
        variant="secondary"
        size="lg"
        className="border-lavender text-lavender w-full"
        icon={<GitHub fill="fill-lavender" />}
      >
        Source Code
      </Button>
    </a>
  </div>
);

export default WorkButtons;
