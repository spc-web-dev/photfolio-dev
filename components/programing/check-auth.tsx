"use client";
import { useAppSelector } from "@/lib/redux/hook";
import React, { useEffect, useState } from "react";
import ProgramingContainer from "./programing-container";
import { useRouter } from "next/navigation";

function CheckAuth() {
  const { auth } = useAppSelector((state) => state.auth);
  const router = useRouter()

  useEffect(() => {
    if(!auth) router.push('/programing/verify')
  }, [auth]);
    return (
      <div className="flex justify-center p-5">
        <ProgramingContainer />
      </div>
    );
}

export default CheckAuth;
