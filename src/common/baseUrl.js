import {Platform} from 'react-native';

let baseUrl = '';
{
  Platform.OS === 'android'
    ? (baseUrl = 'https://api.hnttv.live/api/v1')
    : (baseUrl = 'https://api.hnttv.live/api/v1');
}
export default baseUrl;
