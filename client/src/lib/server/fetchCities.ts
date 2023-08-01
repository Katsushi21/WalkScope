import type { CityList, CityApiResponse, Fetch } from '$lib/types';
import { OFFICIAL_PREFECTURE_API } from '$env/static/private';

export const fetchCities = async (fetchFn: Fetch = fetch) => {
	if (OFFICIAL_PREFECTURE_API !== 'true') return { props: {} };
	const cityList: CityList = {};
	for (let num = 1; num <= 47; num++) {
		const numString = String(num);
		const code = numString.length === 1 ? '0' + numString : numString;
		const res = await fetchFn(`https://www.land.mlit.go.jp/webland/api/CitySearch?area=${code}`);
		const data: CityApiResponse = await res.json();
		if (data.status === 'OK') {
			const cities = data.data.map((d) => {
				return d.name;
			});
			cityList[code] = cities;
		}
	}
	return { props: { cityList } };
};
