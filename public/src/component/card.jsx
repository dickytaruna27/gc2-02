import { useNavigate } from "react-router-dom"

export default function Card({product}){

  const navigate = useNavigate()
const handleClickDetail = (id) =>{
  navigate(`/detail/${id}`)
}

  return(
    <>
<>
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl flex flex-col  hover:shadow-2xl hover:scale-105 transition duration-300 m-5 ">
        <figure className="w-full">
          <img
            src={product.imgUrl}
            alt="product-image"
             className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg sm:text-xl md:text-2xl">
            {product.name}
          </h2>
          <p className="text-sm sm:text-base">{product.description}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleClickDetail(product.id)} className="btn btn-primary">See Detail</button>
          </div>
        </div>
      </div>
    </>
</>
  )
}



