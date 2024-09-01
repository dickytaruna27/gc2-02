import ProductForm from "../component/ProductForm";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ProductsForm({ }) {
    const navigate = useNavigate()
    async function handleSubmit(e, name, description, price, imgUrl, stock, CategoryId) {
        e.preventDefault()
        try {
          const dataAdded = { 
            name, 
            description, 
            price: Number(price), 
            imgUrl, 
            stock: Number(stock), 
            CategoryId: Number(CategoryId) 
        };

            const { data } = await axios.post(`https://server.dickytaruna.online/products`, dataAdded, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            console.log(data.dataProduct);
            
            navigate('/')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <ProductForm handleSubmit={handleSubmit} nameProp="Add Product" />
        </>
    )
}