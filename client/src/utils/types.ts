/**
 * User Interface
 * createdDate(Optional): Date User Was Created
 * updatedDate(Optional): Date User Was Updated
 * loggedIn: Bool if user is logged in
 * projects: Array of projects user has
 * username: String for the Users username
 * _id: string of Users ID
 * email: String of the users Email
 * expire(Optional): Date that Expires the users login
 */
export interface User {
  createdDate?: Date;
  updatedDate?: Date;
  loggedIn: boolean;
  projects: [];
  username: string;
  _id: string;
  email: string;
  expire?: Date;
} // End User Interface

export interface TicketUserInfo {
  _id: string;
  email: string;
}

export interface Ticket{
  _id?: string;
  updatedDate?: Date;
  createdDate?: Date;
  subject: string;
  createdBy: string | {
    _id: string;
    email: string;
  };
  updatedBy: string | {
    _id: string;
    email: string;
  };
  description: string;
  priorityLevel: Number;
  status: string;
  type: string;
  assignedTo: string | {
    _id: string;
    email: string;
  };
}

export interface DropdownsOptions {
  text: string;
  value: string | number;
}
