import React from "react";

import '../../input.css'
import '../../output.css'

type SearchProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  updatePageNumber: React.Dispatch<React.SetStateAction<number>>;
};

const Search: React.FC<SearchProps> = ({ setSearch, updatePageNumber }) => {
  const searchBtn = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  return (
    <form
      className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5 mt-6"
    >
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        type="text"
      />
      <button
        onClick={searchBtn}
        className="mr-2 px-2 py-2 bg-green-500 text-slate-900 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Search
      </button>
    </form>
  );
};

export default Search;