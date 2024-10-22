import React from "react";

function Line({title}){
    return(
        <div class="flex items-center m-10 ">
          <h1 class="text-[#A6BBCC] font-bold text-5xl mr-8 ">{title}</h1>
      <hr class="flex-grow w-2.5 border-t-4 border-[#A6BBCC] mt-4"></hr>
     </div>
    );
}
export default Line;