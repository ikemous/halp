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
    return axios.post("/search", ticketInfo);
  },
  createTicket(ticketInfo: object) {
    return axios.post("/tickets/create", ticketInfo);
  },
  findOne(id: string) {
    return axios.get(`/tickets/${id}`);
  },  
  updateOne(data: object) {
    return axios.put("/tickets/update", data);
  },
  // deleteOne(ticketInfo: ) {
  //   return axios.delete("/tickets/delete", { data: ticketInfo });
  // },
};