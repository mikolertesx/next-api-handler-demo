import { apiHandler } from "next-api-simple-handler";

export async function handler(req, res) {
	return apiHandler(
		req,
		res,
		{
			methods: ["POST"],
			contentType: "application/json",
			requiredBody: ["username", "password"],
		},
		async (req, res) => {
			return res.status(200).json({ message: "Hello world!" });
		}
	);
}

export default handler;
