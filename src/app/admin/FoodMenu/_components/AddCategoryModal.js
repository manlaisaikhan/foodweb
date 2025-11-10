export const AddCategoryModal = ({
  onClose,
  onAdd,
  newCategoryName,
  setNewCategoryName,
}) => (
  <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-xl w-[400px] shadow-lg relative">
      <h2 className="text-lg font-semibold mb-4 border-b pb-2">
        Add New Category
      </h2>
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-gray-500 hover:text-black"
      >
        ✕
      </button>
      <input
        type="text"
        placeholder="Category name..."
        value={newCategoryName}
        onChange={(e) => setNewCategoryName(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded-md mb-4"
      />
      <div className="flex justify-end">
        <button
          onClick={onAdd}
          className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800"
        >
          Add Category
        </button>
      </div>
    </div>
  </div>
);
