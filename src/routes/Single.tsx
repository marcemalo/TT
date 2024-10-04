import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../api/index";
import { AxiosResponse } from "axios";
import { Products } from "../types/index";

const Single = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Products | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response: AxiosResponse = await axios.get(`/products/${id}`);
        
        console.log(response.data); 

        if (response.data) {
          const data: Products = response.data;
          setProduct(data);
        } else {
          setError("Product not found");
        }
      } catch (error) {
        setError("Failed to fetch product");
      }
    };

    loadProduct();
  }, [id]);

  return (
    <>
      {product ? (
        <div className='h-[470px] card max-w-sm rounded-lg overflow-hidden shadow-lg bg-pink-100 hover:shadow-xl transition-shadow duration-300'>
          <img className='card-img w-full h-80 object-cover' src={product.images[0]} alt={product.title} />
          <div className='p-4'>
            <h2 className='card-title text-2xl font-semibold text-pink-900'>{product.title}</h2>
            <p className="card-description text-pink-700">{product.description}</p>
            <button className='card-button mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-colors'>
              Add Like
            </button>
          </div>
        </div>
      ) : (
        <p>{error || "Loading product..."}</p>
      )}
    </>
  );
};

export default Single;
