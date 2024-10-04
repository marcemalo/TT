import { useState, useEffect } from "react";

import axios from "../api/index";
import { AxiosResponse } from "axios";
import { Products } from "../types/index";
import Logo from "../img/Union.png"
import Facebook from "../img/Facebook.svg"
import Telegram from "../img/_1.svg"
import Instagram from "../img/photo.svg"
import Scan from "../img/scaner.jpeg"
import HeroImg from "../img/img_lg.png"
import Brand1 from "../img/brand1.png"
import Brand2 from "../img/brand2.png"
import Brand3 from "../img/brand3.png"
import Brand4 from "../img/brand4.png"
import Brand5 from "../img/brand5.png"
import Brand6 from "../img/brand6.png"

import { useDispatch, useSelector } from "react-redux"; 
import { likeProduct, unlikeProduct } from "../redux/slice/LikeSlice";

import { Link } from "react-router-dom";


export interface Props {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }


const Home = () => {


    const dispatch = useDispatch(); 
    const likedProducts = useSelector((state: any) => state.like.likedProducts); 

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

  const toggleLike = (productId: number) => {
    if (likedProducts.includes(productId)) {
      dispatch(unlikeProduct(productId));
      alert("Dislike");
    } else {
      dispatch(likeProduct(productId)); 
      alert("Like");
    }
  };



  return (
    <>
         <div className="nav h-[70px] fixed z-10 w-full bg-white ">
        <div className="container flex w-[1350px] h-full  m-auto">
          <div className="nav__wrapper flex w-full h-full ">
            <div className="nav__logo">
              <img src={Logo} alt="" />
            </div>
            <div className="nav__search">
              <ul className="nav__list flex gap-[30px]">
                <li className="font-bold">Aksiyalar</li>
                <li className="font-bold">Dokonlar</li>
                <li className="font-bold"><Link to={"/like"}>Yoqgan Mahsulotlar</Link></li>
                <li className="font-bold">Shaxsiy Kabinet</li>
              </ul>
            </div>
            <div className="nav__icons flex gap-[30px]">
              <img className="w-[35px]" src={Facebook} alt="" />
              <img className="w-[35px]" src={Telegram} alt="" />
              <img className="w-[35px]" src={Instagram} alt="" />
            </div>
            <div className="nav__lang flex gap-[9px]">
              <h2 className="RU font-bold">RU /</h2>
              <h2 className="UZ text-pink-500 font-bold ">UZ</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="hero h-[600px] pt-[120px] ">
        <div className="container flex w-[1350px] h-full m-auto  ">
          <div className="hero__wrapper w-full h-full flex justify-center items-center ">
            <div className="hero__content flex w-[1200px] h-[500px] rounded-2xl">
              <div className="hero__text p-8">
                <div className="hero__title w-[525px]">
                  <h1 className="title__hero font-semibold text-white">Ilova orqali kartaga ega bo'ling
                    Ilovani yuklab oling va oshirilgan keshbek oling
                  </h1>
                </div>
                <div className="mt-[50px] ml-11">
                  <img className=" w-[200px] rounded-3xl" src={Scan} alt="" />
                </div>
              </div>
              <div className="hero__img">
                <img className="h-[500px] w-[700px]  " src={HeroImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="Map mt-[90px]">
        <div className="container flex w-[1350px] h-full  m-auto ">
          <div className="map__wrapper flex w-full bg-slate-200 p-4 gap-6 justify-between rounded-xl">
            <div className="form w-[500px]  h-[200px]">
              <h1 className="font-form2">M Cosmetic</h1>
              <p className="font-form">Biz bilan bog’lanish murojat uchun +998 99 999 99 99</p>
              <br />
              <div className="check flex">
                <input type="checkbox" />
                <p > : Siz murojat qilmoqchisiz</p>
              </div>
              <div className="flex">
                <input className="w-[400px] h-[50px]" type="text" placeholder="Ismingiz" />
                <button className="btn ">Qoldirish</button>
              </div>


            </div>
            <div className="map">
              <iframe className="w-[800px] h-[200px] rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.256926458215!2d69.24263117587537!3d41.32502617130788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfaedfe3e1d:0x23ac4a5a705b84ab!2sNajot Ta&#39;lim Xadra filiali!5e0!3m2!1sru!2s!4v1728036936969!5m2!1sru!2s"
                width="600"
                height="450"
                style={{ border: 'none' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>



      <div className='container flex w-[1350px] h-full  m-auto mt-[90px]'>
        <div className="card-wrapper grid grid-cols-4 gap-7">
          {productsData.length > 0 ? (
            productsData.map((user: Products) => (

              <div key={user.id} className='h-[470px] card max-w-sm rounded-lg overflow-hidden shadow-lg bg-pink-100 hover:shadow-xl transition-shadow duration-300'>
                <Link to={`/single/${user.id}`}><img className='card-img w-full h-80 object-cover' src={user.images[0]} alt={user.title} /></Link>
                <div className='p-4'>
                  <h2 className='card-title text-2xl font-semibold text-pink-900'>{user.title}</h2>
                  <button onClick={() => toggleLike(user.id)} className='card-button mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-colors'>
                    Add Like
                  </button>
                </div>
                
              </div>

              



            ))
          ).slice(0, 4) : (
            <p>No products available</p>
          )}

        </div>
      </div>



      <div className="Marq mt-[90px] m-auto w-full">
        <div className="container">
          <div className="brand__wrapper">
            <div className="marquee ">
              <p className="scrolling-text font-mono">Sale 10% Sale 20% Sale 30% Sale 40% Sale 50%  Sale 70%  
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="brand mt-[90px]">
        <div className="container  w-[1350px] h-full  m-auto ">
          <h2 className="font-form3 font-bold">Brendlar</h2>
          <div className="brand__wrapper bg-pink-500 flex flex-wrap items-center  justify-between p-8 rounded-3xl" >
            <div className="brand__card ">
               <img className="w-[200px]" src={Brand1} alt="" />
            </div>
            <div className="brand__card">
               <img className="w-[200px]" src={Brand2} alt="" />
            </div>
            <div className="brand__card">
               <img className="w-[200px]" src={Brand3} alt="" />
            </div>
            <div className="brand__card">
               <img className="w-[200px]" src={Brand4} alt="" />
            </div>
            <div className="brand__card">
               <img className="w-[200px]" src={Brand5} alt="" />
            </div>
            <div className="brand__card">
               <img className="w-[200px]" src={Brand6} alt="" />
            </div>
            

          </div>
        </div>
      </div>






      <div className="product mt-[90px] p-[20px] bg-slate-300">
          <div className="nav__wrapper flex w-full h-full ">
            <div className="nav__logo">
              <img src={Logo} alt="" />
            </div>
           
            <div className="nav__icons flex gap-[30px]">
              <img className="w-[35px]" src={Facebook} alt="" />
              <img className="w-[35px]" src={Telegram} alt="" />
              <img className="w-[35px]" src={Instagram} alt="" />
            </div>
            <div className="nav__lang flex gap-[9px]">
              <h2 className="UZ  font-bold ">Ismoiljon</h2>
            </div>
          </div>
      </div>


    </>
  )
}

export default Home