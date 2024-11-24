import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";

export const Signup = () => {
  return (
    <div className="flex justify-center h-screen bg-slate-300">
      <div className=" flex flex-col justify-center ">
      <div className=" h-max bg-white w-80 text-center px-5 rounded-lg">
      <div>
        <Heading label={"Signup"}></Heading>
        <SubHeading label={"Enter your infromation to create an account"}></SubHeading>
        <InputBox label={"First Name"} placeholder={"saleem"}></InputBox>
        <InputBox label={"Last Name"} placeholder={"raja"}></InputBox>
        <InputBox label={"Email"} placeholder={"saleem@gamil.com"}></InputBox>
        <InputBox label={"Password"} placeholder={"Enter your password"}></InputBox>
      </div>
      <div className="pt-6 pb-1">
        <Button label={"signup"}></Button>
      </div>
      <BottomWarning label={"Already have an account?"} buttonText={" Sign in"} to={"/signin"} ></BottomWarning>
      </div>
      </div>
    </div>
  );
};
