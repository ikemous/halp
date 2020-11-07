import axios from "axios";

export default {
  signup(userInfo: Object) {
    return axios.post("/user/signup", userInfo);
  },
  login(userInfo: Object) {
    return axios.post("/user/login", userInfo);
  },
  signout() {
    return axios.get("/signout");
  },
  checkUser() {
    return axios.get("/user/verify");
  },
  findUsersBy(query:Array<string>) {
    return axios.post("/users/search", query);
  },
  getAllTickets(ticketInfo: object) {
    console.log(ticketInfo)
    return axios.post("/search", ticketInfo);
  },
  createTicket(ticketInfo: object) {
    return axios.post("/tickets/create", ticketInfo);
  },
};