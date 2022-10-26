import React from "react";
import { SearchBox, SearchInput } from "../../styles/SearchStyles";

const Search = ({ setSearch, search }) => {
  return (
    <SearchBox>
      <SearchInput
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search movie/category/year..."
      />
    </SearchBox>
  );
};

export default Search;
