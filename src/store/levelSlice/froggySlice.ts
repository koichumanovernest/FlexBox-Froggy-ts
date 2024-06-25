// froggySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface FroggyState {
	inputValue: string;
}

// Define the initial state
const initialState: FroggyState = {
	inputValue: "",
};

const froggySlice = createSlice({
	name: "froggy",
	initialState,
	reducers: {
		setInputValue: (state, action: PayloadAction<string>) => {
			state.inputValue = action.payload;
		},
	},
});

export const { setInputValue } = froggySlice.actions;
export default froggySlice.reducer;
