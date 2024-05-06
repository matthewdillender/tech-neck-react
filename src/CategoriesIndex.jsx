export function CategoriesIndex(props) {
  return (
    <div>
      <h1>All Categories</h1>
      {props.categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <img src={category.category_image_url} />
          <h3>Description: {category.description}</h3>
        </div>
      ))}
    </div>
  );
}
