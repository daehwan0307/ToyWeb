import TopBar from "../componenents/TopBar";
import TopBarNew from"../componenents/TopBarNew";


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
    <TopBarNew/>
    <hr></hr>

    </div>
    );
}
export default MainPage;
