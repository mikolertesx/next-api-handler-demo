import { apiHandler } from "next-api-simple-handler";

const registerSchema = {
	username: "[String] The name of the user you are trying to log into.",
	password: "[String] The password.",
};

export async function handler(req, res) {
	return apiHandler(
		req,
		res,
		{
			methods: ["POST"],
			contentType: "application/json",
			requiredBody: ["username", "password"],
			errorMessages: {
				"missing-body-key": (missingKeys) =>
					`A username, and a password are required to register an account. You are missing ${missingKeys.join(
						", "
					)}`,
				"wrong-content-type": (expectedContentType, receivedContentType) =>
					`Only ${expectedContentType} is allowed on this route; You sent ${receivedContentType}`,
				"wrong-method": (allowedMethods) =>
					`Only the methods ${allowedMethods.join(
						", "
					)} can be done in this route.`,
			},
			schema: registerSchema,
		},
		(req, res) => {
			return res.json({ message: "User was successfully registered" });
		}
	);
}

export default handler;
