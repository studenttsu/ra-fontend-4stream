import { HttpService } from '../services/http-service';

class MastersApi extends HttpService {
  constructor() {
    super('staff');
  }

  /**
   * Возвращает список сотрудников
   */
  getMasters(search = '') {
    return this.get(`?search=${search}`);
  }

  createMaster(masterDto) {
    const formData = new FormData();
    Object.keys(masterDto).forEach(key =>  formData.append(key, masterDto[key]));
    return this.postFormData('', masterDto);
  }
}

export default new MastersApi();
