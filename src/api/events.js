import axios from 'axios';
import { apiUrl } from './index';

axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

export default {
    getItems() {
        return axios({
            method: 'get',
            url: `${apiUrl}/calendar.php`
        });
    }
};
