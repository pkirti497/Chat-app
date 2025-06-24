import jwt from "jsonwebtoken";

// Function to generate a token  for  a user 
export const generateToken = (userId) =>{
     const token = jwt.sign({userId},process.env.jWT_SECRET);
     return token;
}