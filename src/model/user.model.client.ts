export class User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  emailId: string;
  cellNumber: string;
  isAdmin: boolean;
  constructor(username: string, password: string, firstName: string, lastName: string, emailId: string,
              cellNumber: string, isAdmin: boolean) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    this.cellNumber = cellNumber;
    this.isAdmin = isAdmin;
  }
}
