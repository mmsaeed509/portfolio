import TechStackItem from "./TechStackItem";

const TechStackList = ({techStack}) => (
  <>
    <h3 className="font-bold text-text text-base my-2">Tech Stack:</h3>
    
    {techStack.design?.length > 0 ? (
      <TechStackItem items={techStack.design} title="Design:" />
    ) : null}

    {techStack.frontend?.length > 0 ? (
      <TechStackItem items={techStack.frontend} title="Frontend:" />
    ) : null}

    {techStack.api?.length > 0 ? (
      <TechStackItem items={techStack.api} title="API:" />
    ) : null}

    {techStack.backend?.length > 0 ? (
      <TechStackItem items={techStack.backend} title="Backend:" />
    ) : null}

    {techStack.DE?.length > 0 ? (
      <TechStackItem items={techStack.DE} title="Desktop Environment:" />
    ) : null}

    {techStack.WM?.length > 0 ? (
      <TechStackItem items={techStack.WM} title="Mindow Manager:" />
    ) : null} 

    {techStack.temp?.length > 0 ? (
      <TechStackItem items={techStack.temp} title="Template:" />
    ) : null} 

    {techStack.tools?.length > 0 ? (
      <TechStackItem items={techStack.tools} title="Tools:" />
    ) : null} 

  </>
);

export default TechStackList;
