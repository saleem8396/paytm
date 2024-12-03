export function Username({type}){
 
   if(type=="green"){
     return <div className="flex ">
        <div className="bg-green-500 rounded-full w-10  h-10 text-center flex flex-col justify-center">
           S
        </div>
        <div className=" flex flex-col justify-center ml-3 text-lg" >
            saleem
        </div>
     </div>
   }
   else{
      return <div className="flex ">
      <div className=" flex flex-col justify-center pr-2 text-lg" >
         saleem
      </div>
      <div className="bg-slate-600 rounded-full w-10  h-10 text-gray-50 text-center flex flex-col justify-center">
         S
      </div>
   </div>

   }
}