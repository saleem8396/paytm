import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"


export const Signin=()=>{
    return <div className="flex justify-center  bg-slate-300 h-screen">
        <div className="flex flex-col justify-center">
        <div className=" w-80 text-center h-max px-4 rounded-lg bg-white" >

       <Heading label={"Signin"}></Heading>
       <SubHeading label={"Enter your credentials to access your account "}></SubHeading>
       <InputBox label={"Username"}></InputBox>
       <InputBox label={"password"}></InputBox>
       <div className=" pb-1 pt-6">
       <Button label={"Signin"}></Button>
       </div>
       
       <BottomWarning label={"Don't have an account?"}buttonText={"Signup"} to={"/signup"}></BottomWarning>

    </div>
    </div>
    </div>

}