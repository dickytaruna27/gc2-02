import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../component/table";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const { data } = await axios.get("https://server.dickytaruna.online/products", {
        headers:{
          Authorization: `Bearer ${localStorage.access_token}`
        }
      })
      console.log(data);
      setProducts(data.dataProduct);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="overflow-x-auto mt-20">
        <table className="table-auto w-full table-xs">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2 w-1/3">Description</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Stock</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <Table product={product} key={product.id} index={index + 1} fetchProducts={fetchProducts} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
