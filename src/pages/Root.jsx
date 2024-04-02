import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Count from "../apps/Ex99_Counter";

export default function Root() {
  return (
    <div style={{margin: '20px'}}>
      {/* <Navbar />
      <Outlet /> */}
      <Count />
    </div>
  )
}