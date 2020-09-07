import axios from "axios";
import { user } from "../reducers/user";

const baseUrl = "http://localhost:63851/api/"


const userUrl = {
    user(url = baseUrl + user) {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            // create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete (url + id)
        }
    }
}

const petUrl = {
     pets(url = baseUrl + 'pets') {
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