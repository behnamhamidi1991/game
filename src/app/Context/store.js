"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export const GLobalContextProfider = ({children}) => {

    const [userId, setUserId] = useState("")
    const [data, setData] = useState("")


        return (
            <GlobalContext 
        )

}