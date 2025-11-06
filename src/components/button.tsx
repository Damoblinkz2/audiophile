import React from "react";

type btnProps = {
  label: string | React.ReactNode;
  on_click: any;
  style: string;
};

const Button = ({ label, on_click, style }: btnProps) => {
  return (
    <button className={style} onClick={on_click}>
      {label}
    </button>
  );
};

export default Button;
// className="bg-[color:var(--color1)] text-[var(--white)] hover:bg-[color:var(--color1-light)] w-[160px] h-[48px]"
