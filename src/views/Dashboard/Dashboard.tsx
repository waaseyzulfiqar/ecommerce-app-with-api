import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [products, setProducts] = useState<any>([]);

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (product:any) => {
    navigate(`/detail/${product.id}`)
  }

  

  return (
    <div className="h-screen w-full p-7">
      <h2 className="text-2xl text-center">Dashboard</h2>
      <div className="flex justify-center items-center gap-10 flex-wrap py-6">
        {products.map((product: any) => {
          return (
            
              <div onClick={() => handleClick(product)} className="border w-64 h-[340px] text-center bg-slate-200 py-3 px-5 rounded-md cursor-pointer">
                <img className="w-32 mb-6 mx-auto rounded-md" src={product.image} alt="" />
                <h3 className="text-base">{product.title}</h3>
              </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
