import "./styles.scss";
// import getapis from "./apis.json";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import ApiItem from "./components/Api-item";

function App() {
  const [apis, setApis] = useState([]);
  const [search, setSearch] = useState("");
  const bookMarkItems = [1, 2,3];
  const toggleBookmark = (id) => {
    setApis(
      apis.map((api) => {
        if (api.id === id) {
          api.bookmark = !api.bookmark;
        }
        return api;
      })
    );
  };

  useEffect(() => {
    fetch("https://625dbfae4c36c75357796366.mockapi.io/apis")
      .then((res) => res.json())
      .then((data) =>
        setApis(
          data.map((api) => {
            if (bookMarkItems.includes(api.id)) {
              api.bookmark = true;
            }
            return api;
          })
        )
      );
  }, []);
  return (
    <div>
      <div className="main">
        {" "}
        <h3>
          A collective list of free APIs for use in <br /> software and web
          development.
        </h3>
        <Search setSearch={setSearch} search={search}></Search>
        <div className="container">
          <h4>Featured APIs of this week</h4>
          <div className="api-list">
            {apis
              .filter((api) =>
                api.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((api) => (
                <ApiItem
                  toggleBookmark={toggleBookmark}
                  key={api.id}
                  api={api}
                ></ApiItem>
              ))}
          </div>
        </div>
        <div className="container">
          <h4>Your Bookmark</h4>

          <div className="api-list">
            {apis
              .filter((api) => api.bookmark === true)
              .map((api) => (
                <ApiItem
                  toggleBookmark={toggleBookmark}
                  key={api.id}
                  api={api}
                ></ApiItem>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
