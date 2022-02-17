import LabelBottomNavigation from "../componenents/LabelBottomNavigation";
import LabelUpNavigation from "../componenents/LabelUpNavigation"
import UserCard from "../componenents/UserCard";

export default function MainPage(){
    return(

    <div>
        <LabelUpNavigation/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <LabelBottomNavigation/>
    </div>
    );
}

