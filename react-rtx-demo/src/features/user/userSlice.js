import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
const initailUserState = {
  loading: false,
  users: [],
  error: "",
};
const fetchusers = createAsyncThunk("user/fetchusers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res?.data);
});
const userSlice = createSlice({
  name: "user",
  initialState: initailUserState,
  extraReducers: (builder) => {
    builder.addCase(fetchusers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchusers.fulfilled, (state, action) => {
      (state.loading = false),
        (state.users = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchusers.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
  },
});

export default userSlice.reducer;
export {fetchusers};
