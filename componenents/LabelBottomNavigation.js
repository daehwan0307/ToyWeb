import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ChatSharpIcon from '@mui/icons-material/ChatSharp';
export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div>
    <BottomNavigation  sx={{ width: 520 , bottom:0 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="홈"
        value="recents"
        icon={<HomeSharpIcon />}
      />
      <BottomNavigationAction
        label="커뮤니티"
        value="favorites"
        icon={<ChatBubbleOutlineSharpIcon />}
      />
      <BottomNavigationAction
        label="동네레슨"
        value="community"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="채팅"
        value="nearby"
        icon={<ChatSharpIcon />}
      />
      <BottomNavigationAction 
      label="마이페이지" value="folder" 
      icon={<PersonSharpIcon />} />
    </BottomNavigation>
    </div>
  );
}