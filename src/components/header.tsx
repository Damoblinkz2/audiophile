/**
 * Props interface for the Header component.
 */
type headerProps = {
  /** The category name to display in the header */
  category: string;
};

/**
 * Header component displays the category title for product pages.
 * @param props - The props for the Header component.
 * @returns The rendered Header component.
 */
const Header = ({ category }: headerProps) => {
  return (
    <header className="container mt-[80px] flex items-center justify-center px-[10%] text-[color:var(--white)] bg-[var(--black)] h-[150px] ">
      <h1 className="uppercase font-bold text-[25px]">{category}</h1>
    </header>
  );
};

export default Header;
