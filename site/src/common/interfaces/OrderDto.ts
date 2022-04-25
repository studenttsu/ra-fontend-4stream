import { OrderStatus } from "../enums/OrderStatus";
import { DateValue, Guid } from "../types";
import { BaseId } from "./BaseId";

export interface OrderDto extends BaseId {
    createdDate: DateValue;
    customer: CustomerDto;
    visitDate: DateValue;
    status: OrderStatus;
    master: any;
    service: any;
    finishStatus: string;
}

interface CustomerDto extends BaseId<Guid> {
}