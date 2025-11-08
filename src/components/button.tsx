/**
 * Button component provides a reusable button with customizable label, click handler, and styles.
 * Supports both string and React node labels for flexibility.
 */
import React from "react";

/**
 * Props interface for the Button component.
 */
type btnProps = {
  /** The button label, can be text or React element */
  label: string | React.ReactNode;
  /** Click event handler function */
  on_click: any;
  /** CSS class names for styling */
  style: string;
};

/**
 * Button component for consistent button styling and behavior.
 * @param props - The props for the Button component.
 * @returns The rendered Button component.
 */
const Button = ({ label, on_click, style }: btnProps) => {
  return (
    <button className={style} onClick={on_click}>
      {label}
    </button>
  );
};

export default Button;
