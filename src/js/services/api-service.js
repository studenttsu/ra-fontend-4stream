import { API_PATH } from '../constants';
import { HttpService } from './http-service';

class ApiService extends HttpService {
    constructor() {
        super(API_PATH);
    }

    /**
     * Возвращает список сотрудников
     */
    getMasters() {
        return this.get('staff');
    }

    getServices() {
        return this.get('services');
    }

    createOrder(orderData) {
        return this.post('orders', orderData);
    }
}

export default new ApiService();