import { Roles } from "./user-roles.enum";

export interface User {
  _id:      string;
  email:    string;
  name:     string;
  isActive: boolean;
  roles:    Roles[];
}
