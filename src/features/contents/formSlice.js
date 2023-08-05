import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  items: [
    {
      id: "MQCIBO_XgK7Yua857PlQp",
      context: "Kitap oku",
      color: "#9fd3c7",
    },
    {
      id: "2rmYImKWmmCXsW_jDpReY",
      context: "Su iç",
      color: "#e0ffcd",
    },
    {
      id:"TJ0AOhxFm4z1k5jocpuNN",
      context: "React öğren",
      color: "#fdffcd",
    },
    {
      id: "w_08lNPRCMaikXWRPuBHt",
      context: "İngilizce çalış",
      color: "#edb1f1",
    }
  ],
  search: "",
};

export const counterSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, actions) => {
      state.count += actions.payload;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    
  },
});

export const { increment, decrement, reset, incrementByAmount,addItem,setSearch   } =
  counterSlice.actions;

export default counterSlice.reducer;
