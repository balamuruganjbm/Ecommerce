import mongoose from "mongoose";

const dbConnect = async () => {
	try {
		const dbconn = await mongoose.connect(process.env.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log(`DB connectd : ${dbconn.connection.host}`);
	} catch (error) {
		console.log(`Oops DB Error: ${error}`);
		process.exit(1);
	}
};

export default dbConnect;
