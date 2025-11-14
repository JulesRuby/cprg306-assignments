"use client";

function VaporButton({
  variant = "base",
  type = "button",
  children,
  disabled,
  className,
  ...props
}) {
  const basicStyles =
    "hover:not-disabled:alpha-shudder-both hover:not-disabled:border-aether disabled:text-vesper disabled:bg-kinetic/40 h-[3rem] w-full cursor-pointer rounded border-3 p-1 font-bold transition duration-200 ease-in-out hover:not-disabled:bg-transparent disabled:cursor-not-allowed disabled:border-0";

  const variantStyles = {
    primary: "",
    secondary: "",
  };

  return (
    <button
      onClick={props.onClick ? props.onClick : console.log("CLOCK!")}
      disabled={disabled}
      className=""
    >
      {children}
    </button>
  );
}

export default VaporButton;
