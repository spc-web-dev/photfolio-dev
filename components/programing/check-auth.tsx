"use client";
import { useAppSelector } from "@/lib/redux/hook";
import React, { useEffect } from "react";
import ProgramingContainer from "./programing-container";
import { useRouter } from "next/navigation";
import { checkLocalStorageExpired } from "@/lib/local_storage";

function CheckAuth() {
  const { auth } = useAppSelector((state) => state.auth);
  const router = useRouter()

  useEffect(() => {
    checkLocalStorageExpired('auth')
    if(!auth) router.push('/programing/verify')
  });
    return (
      <div className="flex justify-center p-5">
        <ProgramingContainer />
      </div>
    );
}

export default CheckAuth;
