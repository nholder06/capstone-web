import axios from 'axios';
import { user } from '../reducers/user';
import { pets } from "../reducers/pets";


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
     pets(url = baseUrl + pets) {
            return {
                fetchAll: () => axios.get(url + "pets"),
                fetchById: id => axios.get(baseUrl + "user/" + id + "/pet"),
                create: newRecord => axios.post(url, newRecord),
                update: (id, updatedRecord) => axios.put(url +id, updatedRecord),
                delete: id => axios.delete (url + id)
        }
    }
}

export {userUrl, petUrl}