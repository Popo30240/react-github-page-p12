function FilterBar({ selectedFilter, onSelect }) {
  const filters = ["Tous", "Projet professionnel", "Projet personnel"];

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className={selectedFilter === filter ? "active" : ""}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
