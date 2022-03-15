import React from 'react'
import { ThemeProvider, initializeIcons } from '@fluentui/react';
import { appTheme } from './components/theme';
import { Navbar as ComponentNavBar } from './components/navBar';
import { InputScreen } from './screens/inputScreen';
import './App.css';


function App() {
  initializeIcons();
  return (
    <ThemeProvider applyTo='body' theme={appTheme}>
      <ComponentNavBar />
       < InputScreen />
    </ThemeProvider>
  );
}
export default App;
