import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


// Login Actions
import { loginEmail } from '../Functions/loginEmail';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);



// Mock all the exports in the module.
function mockFirebaseService() {
    return new Promise(resolve => resolve(true));
}

// Since "services/firebase" is a dependency on this file that we are testing,
// we need to mock the child dependency.
jest.mock('services/firebase', () => new Promise(resolve => resolve(true)));

describe('login actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
    });

    it('signIn should call firebase', () => {
        const user = {
            email: 'briandorantes@hotmail.com',
            password: 'abd123'
        };

        // eslint-disable-next-line jest/valid-expect-in-promise
        store.dispatch(loginEmail(user.email, user.password)).then(() => {
            expect(mockFirebaseService).toHaveBeenCalled();
        });
    });
});
