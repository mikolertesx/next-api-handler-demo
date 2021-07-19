import { apiHandler } from 'next-api-simple-handler'

const handleGet = async (req, res) => {
	// No more checks are necessary in this example.
	return res.json({message: "This is a JSON message"})
}
const handlePost = async(req, res) => {
	// We know that we requrie a username, and a password, and that the application should be of application/json.

	return apiHandler(req, res, {
		requiredBody: ['username', 'password'],
		contentType: 'application/json',
		schema: {
			username: '[String] The name of the user you are trying to log into.',
			password: '[String] The password.',
		}
	}, async(req, res) => {
		return res.json({message: "Successfully registered"});
	});
}

export async function handler(req, res) {
	return apiHandler(req, res, {methods: ['GET', 'POST']}, async () => {
		if (req.method === 'GET') {
			return handleGet(req, res);
		}
		return handlePost(req, res);
	})
}

export default handler
