import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios, { Axios } from "axios"

export default function UploadPage() {
const [image, setImage] = useState()
const {id} = useParams()
const navigate = useNavigate()

async function changeImg(e) {
 const file = e.target.files[0]
 const formData = new FormData()
 formData.append("img", file)
 await axios.patch(`https://server.dickytaruna.online/products/${id}` , formData, {
  headers:{
    Authorization: `Bearer ${localStorage.access_token}`,
    "content-type": 'multipart/form-data'
  }
 })
 navigate("/")
//  console.log(file);
}
  return(
    <> 
    <label
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-36"
    htmlFor="file_input"
  >
    Upload file
  </label>
  <input onChange={changeImg}
    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    id="file_input"
    type="file"
  />
  </>
  )
}