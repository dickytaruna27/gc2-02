import axios from 'axios';
import Card from '../component/card'
import { useEffect, useState } from 'react';


export default function HomePage() {
const [page, setPage] = useState([])

const [totalPage, setTotalPage] = useState()
const [currentPage, setCurrentPage] = useState()
const [search, setSearch] = useState("")
const [category, setCategory] = useState()
const [sort, setSort] = useState()

// console.log(page);

  async function fetchData() {
    try {
      const {data} = await axios.get(`https://server.dickytaruna.online/pub/products?page=${currentPage}&name=${search}&${category ? `filter=${category}` : ""}&sort=${sort}`)
      console.log(data)
      setPage(data.dataProduct)  
      setTotalPage(data.totalPage)
      setCurrentPage(data.page)


    } catch (error) {
      console.log(error);
    }
  }
  
  const nextPage = () =>{
    if (currentPage >= totalPage) {
      setCurrentPage(currentPage + 0)
    }else {
      setCurrentPage(currentPage + 1)
    }
  }
 

  useEffect(() =>{
    fetchData(currentPage)
  }, [currentPage, search, category,sort])
  return (
    <>
  <div className="flex justify-center mt-10">
  <input 
    onChange={(e) => setSearch(e.target.value)} 
    type="text" 
    placeholder="Search" 
    className="input input-bordered w-24 md:w-64 lg:w-80" 
  />
  <select onChange={(e)=>setSort(e.target.value)} className="select select-info w-full max-w-xs">
  <option  disabled selected>Sort</option>
  <option value="ASC">New Collection</option>
  <option value="DESC">Old Collection</option>
</select>
</div>

<div className="flex justify-center mt-6 mb-6">
  <div className="join flex gap-2">
    <button 
      onClick={() => setCurrentPage(currentPage - 1)} 
      className="join-item btn btn-outline"
    >
      Previous
    </button>

    <select onChange={(e) => setCategory(e.target.value)} className="select select-success max-w-xs">
      <option disabled selected>Pick Category</option>
      <option value="1">T-SHIRT</option>
      <option value="2">JEANS</option>
      <option value="3">JACKET</option>
      <option value="4">TIE</option>
      <option value="5">SUIT</option>
      
    </select>

    <button 
      onClick={() => nextPage()} 
      className="join-item btn btn-outline"
    >
      Next
    </button>
  </div>
</div>

    <div className="bg-slate-50 flex flex-wrap justify-around">
    {page.map(el =>(<Card product={el} key={el.id}/>))}
    </div>
    </>
  )
}