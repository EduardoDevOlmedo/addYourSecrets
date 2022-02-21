import { types } from "../types/types";


// {
//     id: "312312",
//     fecha: "1/2/22",
//     valor: String
// }


const nominalReducer = (state = [] , action) => {
    switch (action.type) {
       case types.add:
           return {
               ...state, nominalData: [...state.data, action.payload]
           }
        case types.read:
            return {
                ...state, nominalData: action.payload
            }
        case types.remove:
            return {
                ...state, nominalData: state.nominalData.filter(el => el.id !== action.payload)
            }
        case types.clean: 
            return {
                ...state,
                nominalData: []
            }
      
        default:
            return state
    }
}

export default nominalReducer