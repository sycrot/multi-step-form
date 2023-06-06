import { createContext } from "react";
import { ContextType } from "../types/ContextType";

export const FormContext = createContext<ContextType | null>(null);