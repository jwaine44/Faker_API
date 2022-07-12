const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('./node_modules/@faker-js/faker');

class User {
    constructor() {
        this.password = faker.internet.password();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.number();
        this.lastName = faker.name.lastName();
        this.firstName = faker.name.firstName();
        this._id = faker.datatype.uuid();
    }
}


class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zipCode: faker.address.zipCodeByState(),
            country: faker.address.country()
        }
    }
}

const newUser = new User
const newCompany = new Company


// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
    res.send(newUser);
});

app.get("/api/companies/new", (req, res) => {
    res.send(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const userWithCompany = {
        user: newUser,
        company: newCompany
    }
    res.send(userWithCompany);
})

app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${port}!`)
);