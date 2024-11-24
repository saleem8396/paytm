import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Username } from "../components/UserName"



export const SendMoney=()=>{
 return <div className="flex justify-center  bg-slate-300 h-screen">
   <div className="flex flex-col justify-center">
  <div className=" w-96 h-fit  bg-white rounded px-3">
  <Heading label={"Send Money"} ></Heading>
   <div className="pt-7"><Username></Username></div>
   <InputBox label={"Amount (in Rs)"}></InputBox>
   <div className="pt-4 pb-4 text-center "> 
   <button
               className="my-3 bg-green-600 w-full px-5 py-2 rounded text-white font-medium hover:cursor-pointer hover:scale-[1.01]  duration-100"
            >Initiate Transaction</button>
   </div>
  </div>
   </div>
 </div> 
}