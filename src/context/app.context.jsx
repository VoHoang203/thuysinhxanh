import { createContext, useContext, useEffect, useState } from "react";


const initialAppContext = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
  reset: () => {},
};


export const AppContext = createContext(initialAppContext);


export const useAuth = () => useContext(AppContext);

// Provider
export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("userInfo");
  });

  const [user, setUser] = useState(() => {
    const userInfo = localStorage.getItem("userInfo");
    return userInfo ? JSON.parse(userInfo) : null;
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) return false;
    const parsed = JSON.parse(userInfo);
    return parsed.role === "admin";
  });


  useEffect(() => {
    if (user) {
      localStorage.setItem("userInfo", JSON.stringify(user));
      setIsAuthenticated(true);
      setIsAdmin(user.role === "admin");
    } else {
      localStorage.removeItem("userInfo");
      setIsAuthenticated(false);
      setIsAdmin(false);
    }
  }, [user]);


  const reset = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        isAdmin,
        setIsAdmin,
        reset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
