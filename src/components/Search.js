import { GoSearch } from "react-icons/go";

const Search = ({placeholder,search,setSearch}) => {
  return (
    <div>
      <form className="form">
        <div className="search">
          <GoSearch></GoSearch>
        </div>
        <input
        onChange={(e)=>setSearch(e.target.value) }
        value={search}
          type="text"
          name=""
          id=""
          placeholder={placeholder}
        />
      </form>
    </div>
  );
  //
};

export default Search;
