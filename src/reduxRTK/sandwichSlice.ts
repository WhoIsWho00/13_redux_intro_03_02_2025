import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ingredient = 'bread' | 'cheese' | 'sausage' | 'tomato'

export interface InitialState {
    ingredients: ('bread' | 'cheese' | 'sausage' | 'tomato')[]
}

const initialState: InitialState = {
    ingredients: []
}

const sandwichSlice = createSlice ({
    name: 'ingredients',
    initialState,
    reducers: {
        add(state, action: PayloadAction<ingredient>){
            state.ingredients.push(action.payload)        
        },
        clearIngredients(state){
            state.ingredients = []
        }
    }
})

export const { add, clearIngredients } = sandwichSlice.actions;

export default sandwichSlice.reducer;