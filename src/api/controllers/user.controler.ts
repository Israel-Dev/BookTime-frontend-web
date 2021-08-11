import FutureUserService from '../services/future-user.service';
import validator from 'validator';

const UserController = {
    saveNewUser: async (email: string) => {
        try {
            const { isEmail } = validator;

            if (isEmail(email)) {
                const FutureUser = new FutureUserService(email);

                await FutureUser.saveNewFutureUser();

                return FutureUser;
            }
        } catch (e) {
            console.error(e);
        }
    },
};

export default UserController;
