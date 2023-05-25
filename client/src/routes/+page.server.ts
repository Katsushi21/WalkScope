import type { PageServerLoad } from './$types';
import { cityListMock } from './cityListMock';
import { OFFICIAL_PREFECTURE_API } from '$env/static/private';

export type CityList = { [K in string]: string[] };
type CityApiResponse = {
	status: string;
	data: [{ id: string; name: string }];
};

export const load = (async () => {
	const cityList: CityList = cityListMock;
	if (OFFICIAL_PREFECTURE_API !== 'true') return cityList;

	for (let num = 1; num <= 47; num++) {
		const numString = String(num);
		const code = numString.length === 1 ? '0' + numString : numString;

		const res = await fetch(`https://www.land.mlit.go.jp/webland/api/CitySearch?area=${code}`);
		const data: CityApiResponse = await res.json();

		if (data.status === 'OK') {
			const cities = data.data.map((d) => {
				return d.name;
			});
			cityList[code] = cities;
		}
	}
	return cityList;
}) satisfies PageServerLoad;
