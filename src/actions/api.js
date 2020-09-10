import axios from 'axios';
import { user } from '../reducers/user';
import pet from '../reducers/pet';


const baseUrl = "http://localhost:63851/api/"

const userUrl = {
    user(url = baseUrl + user) {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            authenticate: () => axios.post(baseUrl + "userLogin/authenticate"),
            create: newRecord => axios.post(baseUrl + "userLogin/register", newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete (url + id)
        }
    }
}

const petUrl = {
     pet(url = baseUrl + 'pets') {
            return {
                fetchAll: () => axios.get(url),
                fetchById: id => axios.get(url + id),
                create: newRecord => axios.post(url, newRecord),
                update: (id, updatedRecord) => axios.put(url +id, updatedRecord),
                delete: id => axios.delete (url + id)
        }
    }
}

export {userUrl, petUrl}