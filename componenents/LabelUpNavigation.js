import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ViewHeadlineSharpIcon from '@mui/icons-material/ViewHeadlineSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs>
      <Tab icon={<ViewHeadlineSharpIcon />}  />
      <Tab icon={<SearchSharpIcon />}  />
      <Tab icon={<PersonPinIcon />}  />
    </Tabs>
  );
}

