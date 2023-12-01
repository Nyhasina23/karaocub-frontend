import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface UserInitialState {
    id: string | null | undefined;
    email?: string | null | undefined;
    token?: string | null | undefined;
    isAuthenticated?: boolean;
}

const initialState: UserInitialState = {
    id: '',
    email: '',
    token: '',
    isAuthenticated: false
}

export const userSlice = createSlice({
    name: "karaocub_user",
    initialState,
    reducers: {
        setAuthentication: (state, action: PayloadAction<UserInitialState>) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },
        resetUserAuthentication: (state) => {
            state.id = null;
            state.email = null;
            state.token = null;
            state.isAuthenticated = false;
        }

    }
})

export const { setAuthentication, resetUserAuthentication } = userSlice.actions;
export default userSlice.reducer;