import Title from "./Title";
import * as SKILLS from "../constants/techStacks"
import TechStackItem from "./TechStackItem";

const Skills = () => (
  <section id="skills" className="container mt-20 lg:mt-32">
    <Title text=" Skills & Tools" />

    <TechStackItem items={Object.values(SKILLS).sort((a, b) => a.name > b.name ? 1 : 0)} center />
  
    
  </section>
)
export default Skills;
