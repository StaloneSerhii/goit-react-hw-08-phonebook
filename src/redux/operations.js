import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const addContact = createAsyncThunk(
  'contact/addContact',
  async ({name, phone}, thunkAPI) => {
    try {
      const  data  = await axios.post('/contacts', {name, phone});
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchContact = createAsyncThunk(
  'contact/fetchContact',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deletecontact',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${taskId}`);
      return response.data;
   
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const register = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      const {data} = await axios.post(`/user/signup`, credentials);
      return data;
    } catch (e) {
    console.log(e);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      const {data} = await axios.post(`/user/login`, credentials);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);