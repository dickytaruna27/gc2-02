
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Detail = () =>{

  const {id} = useParams()
  const [detailProduct, setDetailProduct] = useState({})

  const fetcDetailProducts = async (id) =>{
    try {
      const {data} = await axios.get(`https://server.dickytaruna.online/pub/products/${id}`)
      setDetailProduct(data.dataProduct)

    } catch (error) {
      console.log(error);
      
    }
  }
// console.log(detailProduct);
  useEffect(
    ()=>{
      fetcDetailProducts(id)
    },[]
  )

  function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  }
  return (
    <>
<div className="card max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  <figure className="w-full">
    <img
      src={detailProduct.imgUrl}
      alt={detailProduct.name}
      className="w-full object-contain"
    />
  </figure>
  <div className="card-body p-6 flex flex-col justify-between">
    <h2 className="card-title text-2xl font-bold text-gray-900 mb-4 text-center">{detailProduct.name}</h2>
    <p className="text-gray-700 mb-4 text-center">{detailProduct.description}</p>
    <div className="mt-auto text-center">
      <p className="text-xl font-semibold text-green-600 mb-2">{formatRupiah(detailProduct.price)}</p>
      <p className="text-sm text-gray-500">Stock: {detailProduct.stock}</p>
    </div>
  </div>
</div>
</>
  )
}

export default Detail

