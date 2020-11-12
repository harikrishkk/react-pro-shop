import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@mymail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Tyler",
    email: "tyler@mymail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Max",
    email: "max@mymail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
