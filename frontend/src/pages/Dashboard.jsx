import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/User"




export const Dashboard=()=>{

    return <div>
       <Appbar></Appbar>
       <Balance value={"200"}></Balance> 
       <Users></Users>
       
    </div> 

}