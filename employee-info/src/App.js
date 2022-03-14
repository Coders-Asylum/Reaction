import React from 'react'
import { ThemeProvider, initializeIcons } from '@fluentui/react';
import { appTheme } from './components/theme';
import { Navbar as ComponentNavBar } from './components/navBar';
import { EmployeeCard } from './components/employeeCard'
import { http_request } from './backend/parse';
import './App.css';


function App() {
  initializeIcons();
  
  const http = new http_request();
   http.get("https://services.odata.org/V4/Northwind/Northwind.svc/Employees").then(function(res){
     console.log(res.data["value"]);
    });


  return (
    <ThemeProvider applyTo='body' theme={appTheme}>
      <ComponentNavBar />
      <div class='AppBody'>
        <EmployeeCard />
      </div>
    </ThemeProvider>
  );
}
export default App;
