import axios from 'axios';
import { futureUserEndpoint } from '../constants/endpoints';
import { SaveNewFutureUserDTO } from '../dto/future-user';

class FutureUserService {
    public email: string;
    public message: string | null;
    public status: number | null;

    constructor(email: string) {
        this.email = email;
        this.status = null;
        this.message = null;
    }

    async saveNewFutureUser() {
        try {
            const requestDTO: SaveNewFutureUserDTO = { email: this.email };

            const response = await axios.post(futureUserEndpoint, requestDTO);

            this.status = response.status;
            this.message = response.data.message;
        } catch (e: any | unknown) {
            console.error(e);
            this.status = e.response.status;
            this.message = e.response.data.message;
        }
    }
}

export default FutureUserService;
