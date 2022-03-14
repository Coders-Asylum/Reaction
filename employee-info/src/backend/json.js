import { toHaveFocus, toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import { http_request, jsonParser } from "./parse";


class Employee {
    name;
    titleOfCourtsey;
    title;
    phone;
    address;
    city;
    region;
    postalCode;

    constructor({ name, titleOfCourtsey, title, phone, address, city, region, postalCode } = {}) {
        this.name = name;
        this.titleOfCourtsey = titleOfCourtsey;
        this.title = title;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.region = region;
        this.postalCode = postalCode;

    }



}

class employeeData {
    http;
    url = "https://services.odata.org/V2/Northwind/Northwind.svc/Employees"
    emp_str='';

    constructor() {
        this.http = new http_request();
        this.http.get(this.url).then((res) => {
            if (res.status != 200) {
                console.log(`Error Occurect while fetching employee data: ${res.status} ${res.statusText}`)
            } else {
                this.emp_str = res.data;
            }

        }).catch((err) => console.log(`[E] Error occured while fetching data: ${err}`));
    }
    first10employees() {
        l = [];
        const j = new jsonParser(this.emp_str);

        for (let i=0;i<10;i++){
        
        }

        return l;
    }
}




export { Employee }


