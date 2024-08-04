import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userService } from '../../services/UserService';
import UserDto from '../../services/Shared/UpdateProfileDto';


interface ThemeProps {
    children?: ReactNode;
}
interface User {
    UserName: string,
    Email: string,
}
const authContext = createContext({
    isLogin: true,
    user: { UserName: "", Email: "" },
}
);
const useAuthContext = () => useContext(authContext);


function Authentication({ children }: ThemeProps) {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [user, setUserDto] = useState<User>({ UserName: "", Email: "" });

    useEffect(() => {
        const isAuth = async () => {
            console.log("dee");
            const response = await userService.getInformation();
            if (response?.IsSuccess && response.Content !== undefined) {
                setUserDto(response.Content);
            } else {
                setIsLogin(false);
                navigate("/login")
            }
        }
        isAuth();
    },[isLogin])

    return (
        <authContext.Provider value={{ isLogin, user }}>
            {children}
        </authContext.Provider>
    )
}

export { Authentication, useAuthContext }