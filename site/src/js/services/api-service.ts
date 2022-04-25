import { CreateOrderDto, OrderDto } from '../../common/interfaces';
import { API_PATH } from '../constants';
import { HttpService } from './http-service';

class ApiService extends HttpService {
    readonly apiPath: string;

    constructor() {
        super(API_PATH);
    }

    /**
     * Возвращает список сотрудников
     */
     public getMasters() {
        return this.get('staff');
    }

    public getServices() {
        return this.get('services');
    }

    /**
     * Создает новую запись
     */
    public createOrder(orderData: CreateOrderDto): Promise<OrderDto> {
        return this.post('orders', orderData);
    }

    private _modify(): void {
        console.log('modify');
    }
}

export default new ApiService();
