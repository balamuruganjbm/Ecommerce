import bcrypt from "bcryptjs";
const customers = [
	{
		name: "albus",
		email: "albus@example.com",
		password: bcrypt.hashSync("1234", 10),
		isAdmin: true,
	},
	{
		name: "harry",
		email: "harry@example.com",
		password: bcrypt.hashSync("1234", 10),
	},
	{
		name: "tom",
		email: "tom@example.com",
		password: bcrypt.hashSync("1234", 10),
	},
];

export default customers;
