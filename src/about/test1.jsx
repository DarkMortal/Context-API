import {React,useContext} from 'react';
import Test2 from "./test2";
import { someContext } from './Contexts/context1';

export default function Test1() {

  const {name}=useContext(someContext);

  return (
    <>
        <h1>
            <u>Hello {name}</u>
        </h1>
        <br/><Test2/>
    </>
  )
}
