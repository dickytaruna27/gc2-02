import ProductForm from "../component/ProductForm";
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";

export default function ProductsForm() {
  const [product, setProduct] = useState({});
  const navigate = useNavigate()
  const { id } = useParams()

  async function fetchProduct() {
      try {
          const { data } = await axios.get(`https://server.dickytaruna.online/products/${id}`,{
            headers: {
              Authorization:`Bearer ${localStorage.access_token}`
            }
          })
          console.log(data);

          setProduct(data.dataProduct)
      } catch (error) {
          
      }
  }

  useEffect(() => {
      fetchProduct()
  }, [id])

  async function handleSubmit(e, name, description, price, imgUrl, stock, CategoryId) {
      e.preventDefault()
      try {
          const dataAdded = { name, description, price: +price, imgUrl, stock: +stock, CategoryId: +CategoryId }

          await axios.put(`https://server.dickytaruna.online/products/${id}`, dataAdded, {
              headers: {
                  Authorization: `Bearer ${localStorage.access_token}`
              }
          })

          navigate('/')
      } catch (error) {
          
      }
  }

  return (
      <>
          <ProductForm handleSubmit={handleSubmit} product={product} nameProp="Edit Product" />
      </>
  )
}