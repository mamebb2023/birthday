const Button = ({ children, className, href, iswhite = false }) => {
  const classes =
    "mt-5 px-5 py-3 bg-n-1/30 backdrop-blur-md rounded-xl flex justify-center items-center transition";

  const white = iswhite
    ? "hover:bg-n-8 hover:text-n-1"
    : "hover:bg-n-1 hover:text-n-8";

  if (href) {
    return (
      <a href={href} className={`${white} ${classes} ${className}`}>
        {children}
      </a>
    );
  } else {
    <button href={href} className={`${white} ${classes} ${className}`}>
      {children}
    </button>;
  }
};

export default Button;
