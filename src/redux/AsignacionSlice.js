import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAsignacion: null,
    datos: false,
    error: false,
  }; 



  export const asignacionSlice = createSlice({
    name: "asignacion",
    initialState,
    reducers: {
      indicadorDatos: (state) => {
        state.datos = true;
      },
      fetchSuccess: (state, action) => {
        state.currentAsignacion = action.payload;
      },
      fetchFailure: (state) => {
        state.datos = false;
        state.error = true;
      },
      
    },
  });
  
  export const { indicadorDatos, fetchSuccess, fetchFailure } =
    asignacionSlice.actions;
  
  export default asignacionSlice.reducer;
  













