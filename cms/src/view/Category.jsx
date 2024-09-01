import { useState, useEffect } from "react";
import axios from "axios";

export default function Category() {
  const [categories, setCategories] = useState([]);

  
  async function fetchCategories() {
    try {
      const { data } = await axios.get("https://server.dickytaruna.online/category", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`  
        }
      });
      setCategories(data.dataCategory); 
    } catch (error) {
     console.log(error);
    }
  }

  
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-24">
  <div className="px-6 py-4">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Categories</h1>
    <ul className="space-y-2">
      {categories.map((category) => (
        <li 
          key={category.id} 
          className="flex items-center p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors duration-300"
        >
          <span className="text-lg font-medium text-gray-700">{category.name}</span>
        </li>
      ))}
    </ul>
  </div>
</div>

    </>
  );
}
