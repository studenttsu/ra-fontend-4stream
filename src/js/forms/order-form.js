import ApiService from '../services/api-service';

export class OrderForm {
    constructor() {
        this.formEl = document.getElementById('order-form');
        this.mastersSelect = this.formEl.elements.masterId;
        this.servicesSelect = this.formEl.elements.serviceId;

        this._init();
        this._bindEvents();
    }

    #_init() {
        this._buildMastersSelect();
        this._buildServicesSelect();
    }

    #_bindEvents() {
        this.formEl.addEventListener('submit', event => {
            event.preventDefault();
            // ...
        });
    }

    async #_buildMastersSelect() {
        const masters = await ApiService.getMasters();
    
        masters.forEach(master => {
          const option = document.createElement('option');
          option.value = master.id;
          option.textContent = master.fullName;
          this.mastersSelect.add(option);
        });
    }

    async #_buildServicesSelect() {
        const services = await ApiService.getServices();
    
        services.forEach(service => {
          const option = document.createElement('option');
          option.value = service.id;
          option.textContent = service.name;
          this.servicesSelect.add(option);
        });
    }
}