import axios from "axios";

 const POST_API_URL = "http://localhost:3001/Users";

export const PostUser =(User)=>axios.post(`${POST_API_URL}/CutoffMarksCalulation`,User)
