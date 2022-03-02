import axios from "axios";
<<<<<<< HEAD

=======
// import { Match } from "../../types/types";
>>>>>>> 0a99e196cdf4e3e2872321eb91205778dc25e117
export type Match = {
	id: string;
	creationTime: number;
	companyName: string;
	amountReq: number;
	borrower: {
		bankruptcy: boolean;
		creditScore: number;
		ssn: number;
		financeData: {
			number: string;
			balance: number;
			currency: string;
		};
		user: {
			firstName: string;
			lastName: string;
			email: string;
			phoneNumber: string;
			state: string;
			userIp: string;
		};
	};
	labels?: string[];
};

// services

export const createApiClient = (page: Number): Promise<Array<Match> | void> => {
	const matches = axios
		.get(`http://localhost:8888/api/match/${page}`)
		.then((res): Match[] => res.data)
		.catch((err): void => console.log(err));
	console.log(matches);
	return matches;
};
