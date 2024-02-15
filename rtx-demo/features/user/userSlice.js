const createslice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initailUserState = {
  loading: false,
  users: [],
  error: "",
};
const fetchusers = createAsyncThunk("user/fetchusers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res?.data.map((data) => data.id));
});
const userSlice = createslice({
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

module.exports = userSlice.reducer;
module.exports.fetchusers = fetchusers;
