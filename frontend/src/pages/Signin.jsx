import axios from "axios"
import {useState} from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom"


export const Signin=()=>{
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    
    return <div className="flex justify-center  bg-slate-300 h-screen">
        <div className="flex flex-col justify-center">
        <div className=" w-80 text-center h-max px-4 rounded-lg bg-white" >

       <Heading label={"Signin"}></Heading>
       <SubHeading label={"Enter your credentials to access your account "}></SubHeading>
       <InputBox label={"Username"} onChange={(e)=>{setUserName(e.target.value)}}></InputBox>
       <InputBox label={"password"} onChange={(e)=>{setPassword(e.target.value)}} ></InputBox>
       <div className=" pb-1 pt-6">
       <Button label={"Signin"} onClick={()=>{
        
        axios.post("http://localhost:3000/api/v1/user/signin",{
            userName,
            password
        }).then((response)=>{
            localStorage.setItem("token",response.data.token)
            navigate("/dashboard")
        })
       }}></Button>
       </div>
       
       <BottomWarning label={"Don't have an account?"}buttonText={"Signup"} to={"/signup"}></BottomWarning>

    </div>
    </div>
    </div>

}