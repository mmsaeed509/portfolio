import Link from "next/link";
import AnimatedText from "./AnimatedText";
import Button from "./Button";
import Arrow from "./icons/Arrow.jsx";
import Profile from "./icons/Profile";

const Hero = () => (
  <section
    id="hero"
    className="pt-32 lg:pt-52 pb-32 lg:pb-36 flex flex-col-reverse lg:flex-row items-center justify-between relative overflow-hidden container gap-8"
  >
    <div className="w-fit md:w-auto my-auto text-text">
      <p className="flex gap-2 items-center">
      
      Hi there 
      
        <video width="24" height="24" loop={true} autoPlay={true} muted src="/images/hi.webm" alt="hand wavying hello" />

        <br/>
        
        I&apos;m Mahmoud Mohamed, You can call me Özil or Wolf
        
        <br/>
        
        a Linux Engineer, PenTesting Enthusiast and open source contributor

      </p>
      
      <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-6xl text-lavender pt-4 pb-8">
      
      Linux Engineer  <br/>

      PenTesting Enthusiast

      </h1>

{
      // <p className="text-xl mb-8">
      //   I craft <span className="font-bold">AWESOME</span> Projects with
      //   <span className="inline-flex pl-1">
      //     <video
      //       width="24"
      //       height="24"
      //       loop={true}
      //       autoPlay={true}
      //       muted
      //       src="/images/heart.webm"
      //       alt="heart on fire, passion"
      //     />
      //   </span>
      // </p>
 }

      <div className="flex flex-col-reverse sm:flex-row items-center gap-3 mb-8 relative">
        <Link href="#work" className="w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            title="My Projects"
          >
            My Projects
          </Button>
        </Link>
        <Link href="#contact" className="w-full sm:w-auto">
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            title="contact me"
          >
            Get in touch!
          </Button>
        </Link>
        <Arrow
          className="absolute left-0 bottom-0 lg:-translate-x-18 translate-y-full w-24 scale-x-[-1] -rotate-45"
          stroke="stroke-overlay0"
        />
      </div>
    </div>
    <div>
      <Profile fill="fill-text" />
    </div>
    <AnimatedText />
  </section>
);

export default Hero;
