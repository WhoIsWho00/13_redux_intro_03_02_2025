// import { sandwichAction } from "./sandwichAction";

// export interface InitialState {
//     ingredients: ('bread' | 'cheese' | 'sausage' | 'tomato')[]
// }

// const initialState: InitialState = {
//     ingredients: []
// }

// export default function sandwichReducer (state: InitialState = initialState, action: sandwichAction){

//     switch (action.type) {
//         case 'ingredients/add':
//             return {... state, ingredients: [... state.ingredients, action.payload]};
            

//             case "ingredients/clear":
//                 return {... state, ingredients: []};
    
//         default:
//             return state;
            
//     }
// }