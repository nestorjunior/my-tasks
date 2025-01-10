interface ButtonProps {
  text: string;
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void;
}

export default function Button({
  text,
  primary,
  secondary,
  onClick,
}: ButtonProps) {
  const buttonClasses = `
    px-5 py-2 border transition-colors duration-300 ease-in-out
    ${
      primary
        ? "text-white hover:text-black hover:bg-white rounded-full border border-white"
        : ""
    }
    ${
      secondary
        ? "text-black bg-white hover:bg-black hover:text-white rounded-md border"
        : ""
    }
  `;

  return (
    <>
      <button className={buttonClasses} onClick={onClick}>
        {text}
      </button>
    </>
  );
}
