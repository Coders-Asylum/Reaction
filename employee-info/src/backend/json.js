import { http_request } from "./parse";


class Employee {
    name;
    titleOfCourtsey;
    title;
    phone;
    address;
    city;
    region;
    country;
    bio;
    postalCode;

    constructor({ emp_name, title, phone, address, city, region, postalCode, country, bio } = {}) {
        this.name = emp_name;
        this.title = title;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.region = region;
        this.country = country;
        this.bio = bio;
        this.postalCode = postalCode;
    }
}

class EmployeeData {
    http;
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Employees"
    _emps = []

    constructor() {
        this.http = new http_request();
        this.http.get(this.url).then((res) => {
            if (res.status !== 200) {
                console.log(`Error Occurect while fetching employee data: ${res.status} ${res.statusText}`)
            } else {
                res.data['value'].forEach((emp) => {
                    this._emps.push(new Employee({
                        emp_name: `${emp['TitleOfCourtesy']}${emp['FirstName']} ${emp['LastName']}`,
                        title: emp['Title'],
                        phone: emp['HomePhone'],
                        address: emp['Address'],
                        city: emp['City'],
                        region: emp['Region'],
                        country: emp['Country'],
                        bio: emp['Notes'],
                        postalCode:emp['PostalCode']
                    }
                    ))
                });
            }
        }).catch((err) => console.log(`[E] Error occured while fetching data: ${err}`));
    }


    allEmployees() {
        return this._emps;
    }
}




export { Employee, EmployeeData }


