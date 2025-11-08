/**
 * Props interface for the Input component.
 */
type inputProps = {
  /** The label text for the input field */
  _for: string;
  /** The input type (e.g., text, email, tel, radio) */
  _type: string;
  /** Additional CSS classes for styling */
  style: string;
};

/**
 * Input component renders a labeled input field with customizable type and styling.
 * @param props - The props for the Input component.
 * @returns The rendered Input component.
 */
const Input = ({ _for, _type, style }: inputProps) => {
  return (
    <div className="h-[81px]">
      {/* Label for the input */}
      <label className="block h-[40%] font-bold pl-[10px] pt-[10px]">
        {_for}
      </label>

      {/* Input field */}
      <input
        type={_type}
        placeholder={_for}
        className={`h-[60%] w-[100%] pl-[10px] border-2 border-solid border-[var(--transparent-black)] rounded-[5px] ${style}`}
      />
    </div>
  );
};

export default Input;
