import React from "react";
import { useEffect, useState } from "react";
import fakeAttorneyData from "./sampleData";
import SearchForm from './SearchForm'

export default function Attorneys() {

  useEffect(() => {
    //fetch Attorney picture, bio, other info
    return () => {
      ;
    };
  }, []);


  return (
    <div>
        <div>Attorneys Page</div>
        <SearchForm/>
    </div>
  );
}
