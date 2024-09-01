import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Table({ product, index, fetchProducts }) {
const navigate = useNavigate()

  async function handleDelete(id) {
    try {
      await axios.delete(`https://server.dickytaruna.online/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit(id) {
    navigate(`/edit/${id}`)
    
  }

  function HandleUoploadImg(id) {
    navigate(`/product/${id}`)
  }

  return (
    <tr>
      <td className="border px-4 py-2 text-center">{index}</td>
      <td className="border px-4 py-2">{product.name}</td>
      <td className="border px-4 py-2">{product.description}</td>
      <td className="border px-4 py-2">{product.price}</td>
      <td className="border px-4 py-2 text-center">{product.stock}</td>
      <td className="border px-4 py-2 text-center">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="w-28 h-20 object-cover"
        />
      </td>
      <td className="border px-4 py-2 text-center">
          <button
            onClick={() => handleDelete(product.id)}
            className="btn btn-error btn-sm m-1 w-full"
          >
            Delete
          </button>
          <button
            onClick={() => handleEdit(product.id)}
            className="btn btn-warning btn-sm m-1 w-full"
          >
            Edit
          </button>
          <button
            onClick={() => HandleUoploadImg(product.id)}
            className="btn btn-warning btn-sm m-1 w-full"
          >
            upload image
          </button>
          </td>
      

    </tr>
  );
}
