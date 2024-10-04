import { useSelector, useDispatch } from "react-redux"; 
import { productsType } from "../types/index";
import { unlikeProduct } from "../redux/slice/LikeSlice"; 
import { useEffect, useState } from "react";
import axios from "../api/index";


const ProductLikes = () => {
    const likedProductIds = useSelector((state: any) => state.like.likedProducts);
    const [likedProducts, setLikedProducts] = useState<productsType[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchLikedProducts = async () => {
            try {
                const response = await axios.get("/products"); 
                const allProducts = response.data.products;

                const liked = allProducts.filter((product: any) =>
                    likedProductIds.includes(product.id)
                );

                setLikedProducts(liked);
            } catch (err) {
                console.error("Mahsulotlarni yuklashda xato:", err);
            }
        };

        fetchLikedProducts();
    }, [likedProductIds]);

    const toggleLike = (productId: number) => {
        dispatch(unlikeProduct(productId)); 

        setLikedProducts(likedProducts.filter((product) => product.id !== productId));
    };

    if (likedProducts.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold">EY TUXUM LIKE BOS</h1>
            </div>
        );
    }

    return (
        <>
        <h1>LIKED PRODUCTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[100px]">
            
            {likedProducts.map((product: any) => (
                <div key={product.id} className='h-[470px] card max-w-sm rounded-lg overflow-hidden shadow-lg bg-pink-100 hover:shadow-xl transition-shadow duration-300'>
                     <button onClick={() => toggleLike(product.id)} className="absolute top-4 right-4">
                            
                        </button>
                    <img src={product.thumbnail} alt={product.title} className="w-full object-cover border-b" />
                   
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                        <p className="text-xl font-bold text-red-700">{product.price} so'm</p>
                        <p>{product.quantity}</p>
                       
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default ProductLikes;