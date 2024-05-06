import "./CategoriesIndex.css";

export function CategoriesIndex(props) {
  return (
    <div className="categories-container">
      <h1>Exercise Categories</h1>
      <div className="category-list">
        {props.categories.map((category) => (
          <button key={category.id} className="category-card">
            <div>
              <h2>{category.name}</h2>
              <img
                src={category.category_image_url}
                alt={category.name}
                style={{ maxWidth: "15%", height: "auto" }} // Inline styling for image size
              />
              <p>Description: {category.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
