import { useEffect, useState } from "react"
import {Button} from "./Button"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export function Users(){
    const [users,setUsers]=useState([])
    

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk",{"headers":{"Authorization":`Bearer ${localStorage.getItem("token")}`}}).then((response)=>{
            setUsers(response.data.users)
        })

    },[])
    return <div>
        
        <div className="font-bold mt-2 text-lg">
            Users
        </div>
        <div className="my-2">
            <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user=><User user={user} />)}
        </div>

    </div>
}

function User({user}){
    const navigate=useNavigate()
return <div className="flex py-1 justify-between">
    <div  className="flex">
    <div className="bg-slate-600 rounded-full w-10 ml-1 mt-1 h-10 text-gray-50 text-center flex flex-col justify-center">
   {user.firstName[0].toUpperCase()}
</div>
<div className=" flex flex-col  justify-center pl-2 text-lg" >
{user.firstName}
</div>
    </div>
<div className="pr-2">
    <Button onClick={()=>{ navigate(`/sendMoney?name=${user.firstName}&id=${user._id}`)}}label={"Send Money"} value={"green"}></Button>
</div>

</div>
}
