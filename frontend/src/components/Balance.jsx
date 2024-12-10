import { useRecoilState } from "recoil"
import { balanceAtom } from "../store/atom"
import { useEffect } from "react";
import axios from "axios";

export function Balance({value}){
    const [balance,setBalance]=useRecoilState(balanceAtom);
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{"headers":{"Authorization":`Bearer ${localStorage.getItem("token")}`}})
        .then(response=>setBalance(response.data.balance))
    })

    return <div className="flex py-3">
        <div className="font-semibold ">
            Your Balance
        </div>
        <div className="pl-3 font-medium">
            Rs {balance}
        </div>
    </div>
}