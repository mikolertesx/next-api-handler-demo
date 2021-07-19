import { apiHandler } from 'next-api-simple-handler'

const loginSchema = {
  username: '[String] The name of the user you are trying to log into.',
  password: '[String] The password.',
}

export default async function handler(req, res) {
	return apiHandler(
			req,
			res,
			{
				requiredBody: ['username', 'password'],
				methods: ['POST'],
				contentType: 'application/json',
				schema: loginSchema,
			},
			async (req, res) => {
				const {username, password} = req.body;
				return res.json({
					message: `Username is: ${username}, password is: ${password}`
				});
			}
	)
}
