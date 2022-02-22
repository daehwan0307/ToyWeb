import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ViewHeadlineSharpIcon from '@mui/icons-material/ViewHeadlineSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs sx={{p:2,}}>
      <Tab icon={<ViewHeadlineSharpIcon />}  />
      <Tab icon={<SearchSharpIcon />}  />
      <Tab icon={<NotificationsNoneSharpIcon />}  />
    </Tabs>
  );
}

