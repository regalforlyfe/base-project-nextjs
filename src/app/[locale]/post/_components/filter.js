export default function Filter() {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 my-6">
      <h2 className="text-xl font-semibold mb-4">Filter Options</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="search" className="text-gray-700 mb-1">
            Search:
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="category" className="text-gray-700 mb-1">
            Category:
          </label>
          <select
            id="category"
            className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            <option value="category1">Man</option>
            <option value="category2">Woman</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="price" className="text-gray-700 mb-1">
            Cool Range:
          </label>
          <input type="range" id="price" min="0" max="10" className="w-full" />
          <div className="flex justify-between text-gray-700">
            <span>1</span>
            <span>10</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Apply Filters
        </button>
      </div>
    </div>
  );
}
