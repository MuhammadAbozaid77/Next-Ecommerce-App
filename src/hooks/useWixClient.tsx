import { WixClientContext } from "@/context/WixContextProvider";
import { useContext } from "react";

export default function useWixClient() {
  return useContext(WixClientContext);
}
