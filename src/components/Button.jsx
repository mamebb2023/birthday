const Button = ({ children, className, href, iswhite = false }) => {
  const classes =
    "mt-5 px-5 py-3 rounded-xl flex justify-center items-center transition";

  const white = iswhite
    ? "bg-n-1 hover:bg-n-8 hover:text-n-1"
    : "bg-[#000] hover:bg-n-1 hover:text-n-8";

  if (href) {
    return (
      <a href={href} className={`${white} ${classes} ${className}`}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={`${white} ${classes} ${className}`}>{children}</button>
    );
  }
};

export default Button;
