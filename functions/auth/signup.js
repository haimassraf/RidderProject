import { handelsMenu } from '../../handelsMenu.js';
import { requiredQuestion } from '../globalFunction.js'
import { makeRequest } from '../makeRequest.js';
import { setToken } from './authToken.js';

export async function signup() {
    try {
        const userName = requiredQuestion("Enter Your Name: ");
        const password = requiredQuestion("Enter Your Password: ");
        const body = {
            name: userName,
            password: password
        }
        const res = await makeRequest('/auth/signup', 'POST', body);
        if (res.token) {
            setToken(res.token);
            console.log('Sign up successfully');
            await handelsMenu();
        } else {
            console.log('Sign up failed');
        }
        await handelsMenu();
    } catch (err) { console.log("Error: ", err.message) }
}