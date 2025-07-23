import { handelsMenu } from '../../handelsMenu.js';
import { requiredQuestion } from '../globalFunction.js'
import { makeRequest } from '../makeRequest.js';
import { setToken } from './authToken.js';

export async function login() {
    try {
        const userName = requiredQuestion("Enter Your Name: ");
        const password = requiredQuestion("Enter Your Password: ");
        const body = {
            name: userName,
            password: password
        }
        const res = await makeRequest('/auth/login', 'POST', body);
        if (res.token) {
            setToken(res.token);
            console.log('Logged in successfully');
            await handelsMenu();
        } else {
            console.log('Login failed');
        }
    } catch (err) { console.log("Error: ", err.message) }
}