import WebView from "./WebView";
import TechStackList from "./TechStackList";
import WorkButtons from "./WorkButtons";
import { myWork } from "../constants/myWork";
import Arrow from "./icons/Arrow";
import { Fragment } from "react";

const Work = () => (
  <section>
    <div id="work" className="overflow-hidden">
      {myWork.map((work, i) => (
        <Fragment key={work.url}>
          <div
            className={`flex justify-between flex-col gap-8 hover:shadow-lg transition-shadow bg-crust rounded-lg p-4 items-stretch container ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
          >
            <WebView url={work.url} src={work.thumbnail} alt={work.title} />
            <div className="flex-06 flex items-stretch flex-col justify-start">
              <h2 className="font-bold text-3xl">
                <a
                  href={work.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:underline underline-offset-4 text-lavender"
                >
                  {work.title}
                </a>
              </h2>
              <p className="py-4 text-text">{work.description}</p>
              <TechStackList techStack={work.techStack} />
              <WorkButtons url={work.url} sourceCode={work.sourceCode} />
            </div>
          </div>
          {i < myWork.length - 1 ? (
            <Arrow
              className={`w-24 ${i % 2 === 0
                  ? "rotate-45 mx-auto translate-x-[100%] md:translate-x-[300%] lg:translate-x-[500%]"
                  : "-rotate-45 mx-auto scale-x-[-1] -translate-x-[100%] md:-translate-x-[300%] lg:-translate-x-[500%]"
                }`}
              stroke="stroke-overlay0"
            />
          ) : null}
        </Fragment>
      ))}
    </div>
  </section>
);

export default Work;
