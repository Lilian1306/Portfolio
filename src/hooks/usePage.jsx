import { useContext } from "react";
import PageContext from "../context/PageProvider";

export const usePage = () => {
  return useContext(PageContext);
};
