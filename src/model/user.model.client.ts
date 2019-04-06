export class User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  emailId: string;
  constructor(username: string, password: string, emailId: string) {
    this.username = username;
    this.password = password;
    this.emailId = emailId;
  }
}
