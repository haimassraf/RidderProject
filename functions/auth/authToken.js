import fs from 'fs';

const tokenFile = './token.json';
let token = null;

if (fs.existsSync(tokenFile)) {
    try {
        token = JSON.parse(fs.readFileSync(tokenFile, 'utf-8')).token;
    } catch {
        token = null;
    }
}

export function getToken(){
    return token;
}

export function setToken(newToken){
    token = newToken;
    fs.writeFileSync(tokenFile, JSON.stringify({token: newToken}));
}

export function clearToken(){
    token = null;
    if (fs.existsSync(tokenFile)) fs.unlinkSync(tokenFile);
}