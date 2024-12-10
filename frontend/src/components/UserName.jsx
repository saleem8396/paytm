export function Username({type,userName}){
 
   console.log(userName)
   if(type=="green"){
     return <div className="flex ">
        <div className="bg-green-500 rounded-full w-10  h-10 text-center flex flex-col justify-center">
          {userName[0].toUpperCase()}
        </div>
        <div className=" flex flex-col justify-center ml-2 text-lg" >
        {userName}
        </div>
     </div>
   }
   else{
      return <div className="flex ">
      <div className=" flex flex-col justify-center pr-2 text-lg" >
      {userName}
      </div>
      <div className="bg-slate-600 rounded-full w-10  h-10 text-gray-50 text-center flex flex-col justify-center">
      {userName[0].toUpperCase()}
      </div>
   </div>

   }
}