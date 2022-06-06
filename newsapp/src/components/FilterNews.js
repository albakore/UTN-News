import React from "react";
import shortid from "shortid";

function FilterNews({ pageSize, setPageSize, categories, setCategory }) {
  return (
    <div>
      <form>
        <label>Cant. Result</label>
        <input 
          value={pageSize}
          onChange={(ev) => {
            setPageSize(ev.target.value);
          }}
        />
        <selection  onChange={(ev) => console.log(ev)}>
          {categories.map((item) => (
            <option key={shortid.generate() } value={item}/>
          ))}
        </selection>
      </form>
    </div>
  );
}

export default FilterNews;
