import LabelBottomNavigation from "../componenents/LabelBottomNavigation";
import LabelUpNavigation from "../componenents/LabelUpNavigation"
import UserCard from "../componenents/UserCard";
import React from "react";



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

    <div class="sm:text-center" >
        {
            list.map(data=>
                
                    <UserCard userID={data.userID} location={data.location} writeTime={data.writeTime} />
                
                )
        }

        <LabelBottomNavigation/>
    </div>
    );
}
export default MainPage;
