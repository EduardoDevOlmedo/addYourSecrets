import { db } from "../firebase/config"
import { types } from "../types/types"

export const addActions = (value) => {
  
     const date = new Date().toLocaleString()

    return async(dispatch, getState) => {
      const {uid} = getState().auth
      const datos = {
        fecha: date,
        value: value
      }
      const referencia = await db.collection(`${uid}/secrets/list`).add(datos)
      const id = referencia.id

      const newData = {
        ...datos, id
      }
      dispatch(crear(newData))
    }
}

export const readActions = (data) => {
    return {
      type: types.read,
      payload: data
    }
}

export const crear = (data) => {
  return {
    type: types.add,
    payload: data
  }
}


export const borrarRegistro =  (id) => {

  return async (dispatch, getState) => {
    const {uid} = getState().auth
    await db.doc(`${uid}/secrets/list/${id}`).delete()
    dispatch(deleteValues(id))
  }
}

export const deleteValues = (id) => {
  return {
    type: types.remove,
    payload: id
  }
}

export const clean = () => {
  return {
    type: types.clean,
  }
}