import React from 'react';
import Navigations from './navigations/Navigations';
import { Theme, useThemeContext } from './context/theme/Theme';
import { styles } from './style';



function App() {
  const { theme } = useThemeContext();
  const classes = styles(theme);
  return (
    <div className={classes.mainContainer}>
      <Navigations></Navigations>
    </div>

  );
}

export default App;
