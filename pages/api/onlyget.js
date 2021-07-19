import { apiHandler } from "next-api-simple-handler";

export async function handler(req, res) {
	return apiHandler(
		req,
		res,
		{
			methods: ["GET"],
		},
		async (req, res) => {
			return res.status(200).json({message: "Hello world!"});
		}
	);
}

export default handler
