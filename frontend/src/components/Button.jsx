export function Button({label,value}){
    if(value=="green"){
        return <div className="w-full cursor-pointer text-white  bg-green-600 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        {label}
    </div>
    }else{
        <div className="w-full cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        {label}
    </div>
    }
    
}