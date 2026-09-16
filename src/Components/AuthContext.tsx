import { createContext } from "react";

export type AuthContextType = {
    user: string | null,
    setUser: ( user: string | null ) => void
};

export const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {}
});