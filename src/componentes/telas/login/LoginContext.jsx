import { createContext, useState } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cadastro, setCadastro] = useState({ id: null, nome: "", email: "", senha: "" });

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, cadastro, setCadastro }}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginContext;
