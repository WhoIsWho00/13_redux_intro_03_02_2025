import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface InitialState {
    value: 'dark' | 'light';
}

const initialState: InitialState = {
    value: 'dark'
}

const themeSlice = createSlice ({
    name: 'theme',
    initialState,
    reducers: {
        change(state, action: PayloadAction<'dark' | 'light'>){
            state.value = action.payload
        }
    }
});

export const { change } = themeSlice.actions;

export default themeSlice.reducer;