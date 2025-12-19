const FAKE_USER = {
  email:"admin@gmail.com",
  password:"admin1234"
};
  
export const login = (email , password) =>{
  if(email === FAKE_USER.email && password === FAKE_USER.password){
    localStorage.setItem("user", JSON.stringify(FAKE_USER));
    return { success: true };
  } else {
    return { success: false, message: "Invalid email or password" };
  }
}

export const isAuthenticated = () => {
   return !!localStorage.getItem("user");
}

export const logout = () => {
  localStorage.removeItem("user");
}