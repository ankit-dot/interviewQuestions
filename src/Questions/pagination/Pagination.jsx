import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pagination = () => {
    const [products , setProducts] = useState([]);
    const [page , setPage] = useState(1);
    const [loading , setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState()
    

    

  async function getData(){

    setLoading(true);
    const response = await axios.get(`https://dummyjson.com/products?limit=10&skip=${page*10 - 10}`);
    console.log(totalPages);
    setTotalPages(response.data.total/10)
    setProducts(response.data.products);
    setLoading(false);
    
  }

  

  useEffect(()=> {
    getData();
  },[page])

 function updatePage(pageNum){
    if(pageNum > 0 && pageNum <= (totalPages) && pageNum !== page ){
        setPage(pageNum);
    }
 }

  if(loading){
    return <> Loading...</>
  }
  return (
    <>
    <div className = "grid grid-cols-4 w-[80%]  m-auto">
        {products.map((product) => (
            <div key = {product.title} className='m-[20px] h-[20rem] w-[17rem] bg-gray-200 flex flex-col justify-center items-center'>
                <img src = {product.thumbnail} alt = {product.id} className = 'h-[15rem] w-[15rem] object-cover' />
                <span>{product.title}</span>
            </div>
        ))}
    </div>
    
    <div className = "buttons flex w-[100%] justify-center m-auto text-3xl">
        <button onClick={() => updatePage(page - 1)}>◀️</button>
        {[...Array(totalPages)].map((_,i) => {
           return <div onClick={() => updatePage(i + 1)} className = {`text-3xl p-[20px] m-[5px] cursor-pointer border-solid border-2 rounded-[100%] ${page === i+1? "bg-gray-400": ""}`} key = {i}>{i+1}</div>
        })}
        <button onClick={() => updatePage(page + 1)}>▶️</button>
    </div>
    </>
  )
}

export default Pagination