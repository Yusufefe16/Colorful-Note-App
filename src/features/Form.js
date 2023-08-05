import { useSelector, useDispatch } from "react-redux";
import {  } from "./contents/formSlice";
import { useState } from "react";
import Search from "./contents/Search";
import Input from "./contents/Input";

const Counter = () => {



  return (
    <section id="form">
      <Search/>
      <Input/>
    </section>
  );
};

export default Counter;
