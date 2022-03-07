import React from "react";
import TopBar from "../componenents/TopBar";



const list = [
    {
      userID: 'React',
      location: 'Seoul',
      writeTime: 4,
    },
    {
        userID: 'React2',
        location: 'Seoul2',
        writeTime: 3,
      },
  ];

const MainPage=()=>{
    return(
    
    <div >
    <TopBar/>

    </div>
    );
}
export default MainPage;
