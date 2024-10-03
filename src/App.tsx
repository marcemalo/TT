import {  useState, useEffect } from "react";

import axios from "./api";
import { AxiosResponse } from "axios";
import { Products } from "./types";





import "./index.css";

export interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function App() {

  const [productsData, setProductsData] = useState<Products[]>([]);


  useEffect(() => {
    const loadData = async () => {
      try {
        const response: AxiosResponse = await axios.get("/products");


        if (Array.isArray(response.data.products)) {
          const data: Products[] = response.data.products;
          setProductsData(data);
        } else {
          console.error("API response does not contain a products array:", response.data);
          setProductsData([]); 
        }
      } catch (error) {
        console.error("Failed to fetch products", error);
        setProductsData([]); 
      }
    };

    loadData();
  }, []);

  return (
    <>

<div className="navbar bg-base-100 flex justify-between p-9 bg-slate-400 rounded-full mt-3">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
  <div className="flex">
    <a className="btn btn-ghost text-xl">Liked Products</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
      </svg>
    </button>
  </div>
</div>


    <div className='container'>
    <div className="card-wrapper grid grid-cols-4">
        {productsData.length > 0 ? (
          productsData.map((user: Products) => (
          
            <div className='card'>
               <img className='card-img' src={user.images[0]} alt={user.title} />
               <h2 className='card-title'>{user.title}</h2>
              
               <button className='card-button'>Add Like</button>
             </div>
           
            
          ))
        ).slice(0, 5) : (
          <p>No products available</p>
        )}

        </div>
           </div>
   
    </>
  );
}

export default App;
