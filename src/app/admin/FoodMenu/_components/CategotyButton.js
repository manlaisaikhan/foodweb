export const CategoryButton = (props) => {
  const { CategoryName, showByCategory, category, foodCount } = props;

  return (
    <button
      onClick={() => showByCategory(CategoryName)}
      className={`h-9 border rounded-[50px] cursor-pointer flex justify-center gap-2 items-center text-[14px] font-medium pl-4 pr-4 
        ${
          category === CategoryName
            ? "bg-black text-white"
            : "bg-gray-100 text-black"
        }
      `}
    >
      {CategoryName}
      {foodCount !== undefined && <span>({foodCount})</span>}
    </button>
  );
};
