import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {
    "id": 1,
    "firstName": "Dave",
    "lastName": "Simmons", 
    "email": "davey@mammut.com",     
    "username": "davey5000",
    "password": "assembler",
    "avatar": "https://robohash.org/laboreautaccusamus.png?size=50x50&set=set1"
  },
  {
    "id": 2,
    "firstName": "Jane",
    "lastName": "Simmons",      
    "email": "jane@mammut.com",     
    "username": "chilltimel01",
    "password": "assembler",
    "avatar": "https://robohash.org/aspernaturvoluptatemnam.png?size=50x50&set=set1"
  },
  {
    "id": 3,
    "firstName": null,
    "lastName": null,      
    "email": "K84Real@mammut.com",     
    "username": "K84Real",
    "password": "assembler",
    "avatar": "https://robohash.org/etquieum.png?size=50x50&set=set1"
  }
];


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}

});



export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;