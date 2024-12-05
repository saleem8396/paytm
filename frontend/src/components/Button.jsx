export function Button({label,value,onClick}){
    if(value=="green"){
        return <button onClick={onClick} className="w-full cursor-pointer text-white  bg-green-600 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        {label}
    </button>
    }else{
       return  <button onClick={onClick} className="w-full cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        {label}
    </button>
    }
    
}