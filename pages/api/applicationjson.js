import { apiHandler } from "next-api-simple-handler";

export async function handler(req, res) {
	return apiHandler(
		req,
		res,
		{
			methods: ["POST"],
			contentType: "application/json",
		},
		async (req, res) => {
			return res.status(200).json("Hello world!");
		}
	);
}

export default handler
