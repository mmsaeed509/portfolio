const sizes = {
  lg: "py-3 px-6 text-base",
  md: "py-2 px-4 text-sm",
  sm: "py-1 px-2 text-xs",
  xs: "py-0 px-0 text-xs"
};

const iconSized = {
  lg: "p-3",
  md: "p-2",
  sm: "p-1",
  xs: "p-0",
};

const animateUpDown = "hover:shadow-btnUp hover:tranlate-x-[-1px] hover:translate-y-[-2px] transition-translate transition-shadow active:translate-y-0 active:translate-x-0 active:shadow-btnDown";

const variants = {
  primary: `text-base bg-peach border-transparent ${animateUpDown}`,
  secondary: `text-peach bg-transparent border-peach ${animateUpDown}`,
  tertiary: `text-text bg-base border-transparent shadow-sm shadow-text ${animateUpDown}`,
  transparent: "text-peach hover:underline border-transparent",
};

const Button = ({className, size, variant, icon, iconAfter, disabled, children, title, ...props}) => (
    <button
      aria-label={title}
      title={title}
      className={`rounded-md font-bold text-base flex items-center justify-center cursor-pointer border-2 gap-2 
         ${disabled ? "cursor-not-allowed opacity-40" : ""}
         ${children ? sizes[size] : iconSized[size]}
         ${variants[variant]}
         ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {icon ? <span className={iconAfter ? "order-2" : ""}>{icon}</span> : null}
      {children}
  </button>
)

export default Button;
