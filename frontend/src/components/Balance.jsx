export function Balance({value}){
    return <div className="flex py-3">
        <div className="font-semibold ">
            Your Balance
        </div>
        <div className="pl-3 font-medium">
            Rs {value}
        </div>
    </div>
}