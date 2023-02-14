const ContactInfo = ({ href, Icon, text, className, ...props }) => (
  <div>
    <a
      href={href}
      className="text-text group hover:text-lavender flex items-center gap-2 hover:underline underline-offset-2 text-lg"
      {...props}
    >
      <span>
        <Icon fill="fill-text group-hover:fill-lavender" />
      </span>
      {text}
    </a>
  </div>
);

export default ContactInfo;
