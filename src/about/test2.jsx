import {React,useContext} from 'react';
import { someContext } from './Contexts/context1';

export default function Test2() {

  const {data}=useContext(someContext);

  return (
    <>
        <h1><u>{data.about}</u></h1>
        <h3><i>{data.desc}</i></h3>
    </>
  )
}
