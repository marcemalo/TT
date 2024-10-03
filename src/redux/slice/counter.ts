import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    number: number
}

const initialState: IInitialState = {
    number: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<number>) => {
            state.number += action.payload
        },
        remove: (state, action: PayloadAction<number>) => {
            state.number -= action.payload
        }
    }
})

export default counterSlice.reducer
export const {add, remove} = counterSlice.actions