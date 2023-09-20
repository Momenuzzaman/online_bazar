const Search = ({ setParPage, setSearchValue, searchValue }) => {
  return (
    <div className="flex justify-between items-center">
      <select
        onChange={(e) => setParPage(parseInt(e.target.value))}
        className="px-4 input bg-[#283046]"
      >
        <option value="5">5</option>
        <option value="15">10</option>
        <option value="15">15</option>
      </select>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className="px-4 input bg-bg_primary"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
