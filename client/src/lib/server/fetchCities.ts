import type { CityList, CityApiResponse, Fetch } from '$lib/types';
import { OFFICIAL_PREFECTURE_API } from '$env/static/private';

export const fetchCities = async (fetchFn: Fetch = fetch) => {
	const cityList: CityList = {};
	if (OFFICIAL_PREFECTURE_API !== 'true') return { props: { cityList } };
	for (let num = 1; num <= 47; num++) {
		const code = num.toString().padStart(2, '0');
		const res = await fetchFn(`https://www.land.mlit.go.jp/webland/api/CitySearch?area=${code}`);
		const data: CityApiResponse = await res.json();
		if (data.status === 'OK') {
			const cities = data.data.map((d) => d.name);
			cityList[code] = cities;
		}
	}
	return { props: { cityList } };
};
