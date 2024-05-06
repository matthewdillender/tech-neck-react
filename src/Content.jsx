import axios from "axios";

import { useState } from "react";

import { useEffect } from "react";

import { CategoriesIndex } from "./CategoriesIndex";

export function Content() {
  const [categories, setCategories] = useState([]);

  const handleIndexCategories = () => {
    console.log("handleIndexCategories");
    axios.get("http://localhost:3000/categories.json").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  };

  useEffect(handleIndexCategories, []);

  return (
    <main>
      <CategoriesIndex categories={categories} />
    </main>
  );
}
