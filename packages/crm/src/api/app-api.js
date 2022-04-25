import { HttpService } from "../services/http-service";

class AppApi extends HttpService {
    login(loginData) {
        return this.post('login', loginData);
    }
}

export default new AppApi();