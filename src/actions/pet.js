import { petUrl } from "./api";

export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_BY_ID  : 'FETCH_BY_ID',
    FETCH_ALL : 'FETCH_ALL'
}

const formatData = data => ({
    ...data,
    age:parseInt(data.age?data.age:0)
})

export const fetchAll = () => dispatch => {
    petUrl.pets().fetchAll()
    .then(res => {
        dispatch({
            type: ACTION_TYPES.FETCH_ALL,
            payload: res.data
        })
    })
    .catch(err => console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
    data = formatData(data)
    petUrl.pets().create(data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}


export const fetchById = (id, data, onSuccess) => dispatch => {
    data = formatData(data)
    petUrl.pets().fetchById(id, data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                patyload: {id, ...data}
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    data = formatData(data)
    petUrl.pets().update(id, data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.UPDATE,
                patyload: {id, ...data}
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    petUrl.pets().delete(id)
    .then(res=> {
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: id
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}