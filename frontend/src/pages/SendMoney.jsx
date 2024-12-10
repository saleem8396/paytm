
import axios from "axios"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Username } from "../components/UserName"
import { useSearchParams } from "react-router-dom"
import {useState} from "react"



export const SendMoney=()=>{
  const [params]=useSearchParams();
  const name=params.get("name");
  const id=params.get("id");
  const [amount,setAmount]=useState(0);

  
 return <div className="flex justify-center  bg-slate-300 h-screen">
   <div className="flex flex-col justify-center">
   
  <div className=" w-96 h-fit  bg-white rounded px-3">
  <Heading label={"Send Money"} ></Heading>
  
   <div className="pt-7"><Username type={"green"} userName={name}></Username></div>
   <InputBox label={"Amount (in Rs)"} onChange={(e)=>setAmount(e.target.value)}></InputBox>
   <div className="pt-4 pb-4 text-center "> 
   <button onClick={async()=>{
   const response=await axios.post("http://localhost:3000/api/v1/account/transfer",{
      to: id,
      amount:parseInt(amount)
    },{"headers":{"Authorization": `Bearer ${localStorage.getItem("token")}`
      
    }})

   }}
               className="my-3 bg-green-600 w-full px-5 py-2 rounded text-white font-medium hover:cursor-pointer hover:scale-[1.01]  duration-100"
            >Initiate Transaction</button>
   </div>
  </div>
   </div>
 </div> 
}