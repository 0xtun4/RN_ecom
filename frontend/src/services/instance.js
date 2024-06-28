export let prefixUrl = 'https://api.hnttv.live/api/v1';
// {
//   Platform.OS === 'android'
//     ? (prefixUrl = process.env.API_URL)
//     : (prefixUrl = '');
// }
export const instance = fetch(prefixUrl, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
