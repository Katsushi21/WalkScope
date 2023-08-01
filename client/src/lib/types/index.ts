export type CityList = { [K in string]: string[] };
export type CityApiResponse = {
	status: string;
	data: [{ id: string; name: string }];
};
export type Conditions = {
	city: string;
	condition: string[];
	scope: number;
};
export type Fetch = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
