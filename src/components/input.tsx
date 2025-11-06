type inputProps = {
  _for: string;
  _type: string;
  style: string;
};

const Input = ({ _for, _type, style }: inputProps) => {
  return (
    <div className="h-[81px]">
      <label className="block h-[40%] font-bold pl-[10px] pt-[10px]">
        {_for}
      </label>
      <input
        type={_type}
        placeholder={_for}
        className={`h-[60%] w-[100%] pl-[10px] border-2 border-solid border-[var(--transparent-black)] rounded-[5px] ${style}`}
      />
    </div>
  );
};
export default Input;
