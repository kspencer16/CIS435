function SearchBar({
  filterText,
  setFilterText
}) {

  return(

    <section>

      <h2>Search Contacts</h2>

      <input
        type="text"
        placeholder="Search by name or email"
        value={filterText}
        onChange={(e)=>
          setFilterText(
            e.target.value
          )
        }
      />

    </section>

  );

}

export default SearchBar;
