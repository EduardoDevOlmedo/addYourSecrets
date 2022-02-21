import { db } from "../firebase/config"

export const loadData = async (uid) => {
   const response = await db.collection(`${uid}/secrets/list`).get()
   const data = []
   response.forEach((secret) => {
       const secretsData = secret.data()
       data.push({
           id: secret.id, ...secretsData
       })
   })
   return  data
}