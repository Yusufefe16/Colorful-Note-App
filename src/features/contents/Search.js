import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "./formSlice";

function Search() {
  const dispatch = useDispatch();
  
  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return <div>
    <div id="Title">NoteApp</div>
    <input type="text" placeholder="Search..." id="search" onChange={handleSearchChange}/>

  </div>;
}

export default Search;
