import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {

  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();

  
  return (
    <div className="flex justify-center h-screen bg-slate-300">
      <div className=" flex flex-col justify-center ">
      <div className=" h-max bg-white w-80 text-center px-5 rounded-lg">
      <div>
        <Heading label={"Signup"}></Heading>
        <SubHeading label={"Enter your infromation to create an account"}></SubHeading>
        <InputBox label={"First Name"} placeholder={"saleem"} onChange={(e)=>{setFirstName(e.target.value)}}></InputBox>
        <InputBox label={"Last Name"} placeholder={"raja"}  onChange={(e)=>{setLastName(e.target.value)}} ></InputBox>
        <InputBox label={"Email"} placeholder={"saleem@gamil.com"}  onChange={(e)=>{setEmail(e.target.value)}}></InputBox>
        <InputBox label={"Password"} placeholder={"Enter your password"}  onChange={(e)=>{setPassword(e.target.value)}}></InputBox>
      </div>
      <div className="pt-6 pb-1">
        <Button  label={"signup"} onClick={async()=>{
          const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
            firstName,
            lastName,
            userName:email,
            password
          })
          console.log(response.data.token)
          localStorage.setItem("token",response.data.token)
          navigate("/dashboard")
        }} ></Button>
      </div>
      <BottomWarning label={"Already have an account?"} buttonText={" Sign in"} to={"/signin"} ></BottomWarning>
      </div>
      </div>
    </div>
  );
};
