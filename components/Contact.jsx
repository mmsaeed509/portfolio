import Title from "./Title";
import Email from "./icons/Email";
import Phone from "./icons/Phone";
import ContactInfo from "./ContactInfo";
import { socials } from "../constants/socials";
import GitHub from       "../components/icons/GitHub";
import LinkedIn from   "../components/icons/LinkedIn";
import Instagram from "../components/icons/Instagram";
import FaceBook from   "../components/icons/FaceBook";
import Reddit from       "../components/icons/Reddit";
import YouTube from     "../components/icons/YouTube";
import Discord from     "../components/icons/Discord";

const Contact = () => (
  <section id="contact" className="my-20 lg:mt-32 container md:px-0">
    <Title text="Contact Me" />
    <div className="flex gap-8 items-center justify-center mt-4 flex-col md:flex-row">
      <Box title="">

        <ContactInfo
          href="mailto:mmsaeed509@gmail.com"
          Icon={Email}
          text="mmsaeed509"
        />

        <ContactInfo
          href="https://www.linkedin.com/in/mahmoud-mohamed-a934b21a5/"
          Icon={LinkedIn}
          text="LinkedIn"
        />

        <ContactInfo
          href="https://www.facebook.com/mmsaeed509"
          Icon={FaceBook}
          text="FaceBook"
        />

        <ContactInfo
          href="https://discordapp.com/users/528010173403365377"
          Icon={Discord}
          text="Discord"
        />
        


        {/* <ContactInfo
          href="tel:+20"
          Icon={Phone}
          text="+20"
        /> */}

        

      </Box>

      
      <Box title="Follow me on">
        {socials.map((social) => (
          <ContactInfo
            key={social.href}
            href={social.href}
            Icon={social.Icon}
            text={social.title}
          />
        ))}
      </Box>
     

    </div>
  </section>
);

const Box = ({ children, title }) => (
  <div className="flex items-center flex-col gap-4 justify-between p-8 rounded-md shadow-sm w-full shadow-text">
    <h3 className="text-lg text-text pb-8 font-bold">{title}</h3>
    {children}
  </div>
);

export default Contact;
