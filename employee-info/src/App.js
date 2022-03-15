import React from 'react'
import { ThemeProvider, initializeIcons } from '@fluentui/react';
import { appTheme } from './components/theme';
import { Navbar as ComponentNavBar } from './components/navBar';
import { EmployeeCard } from './components/employeeCard'
import { Employee, EmployeeData } from './backend/json';
import { InputBox } from './components/input';
import { InputScreen } from './screens/inputScreen';
import './App.css';


function App() {
  initializeIcons();
  
    const empData = new EmployeeData();
    const employees = empData.allEmployees();
    console.log(employees);


  return (
    <ThemeProvider applyTo='body' theme={appTheme}>
      <ComponentNavBar />
       < InputScreen />
    </ThemeProvider>
  );
}
export default App;
