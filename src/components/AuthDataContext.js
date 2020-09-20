import { authHeader } from "../helpers/auth-header"

const baseUrl = "http://localhost:63851/api/"


export const AuthDataProvider = {
    login,
    logout,
    getAll,
    addPet,
    getAllPets
};

function login(email, password) {
    const requestOptions = {
        method:  'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    };
    
    return fetch(baseUrl + 'userLogin/authenticate', requestOptions)
    .then(handleResponse)
    .then(user => {
        if (user) {
            user.authdata = window.btoa(email + ':' + password);
            localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
    });
}

function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('pets');
}

function getAll() {
    const requestOptions = {
        method:'GET',
        headers: authHeader()
    };
    
    return fetch(baseUrl +'user', requestOptions).then(handleResponse);
}

function addPet(pet){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(pet)
    };

    return fetch(baseUrl + 'pets', requestOptions)
    .then(handleResponse)
    .then(pets => {
        if (pets) {
            pets.authdata = window.btoa({pet});
            localStorage.setItem('pets', JSON.stringify(pets));
        }
    return pet;
    });
}

function getAllPets(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch(baseUrl + 'pets', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
            if(!response.ok) {
                if(response.status === 401){
                    
                logout();
                Location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
        return data;
    });
}

export default AuthDataProvider;