import {User} from './user.model.client';
import {Posting} from './posting.model.client';

export class Request {
  date: Date;
  user: User;
  posting: Posting;
  constructor(date: Date, user: User, posting: Posting) {
    this.date = date;
    this.user = user;
    this.posting = posting;
  }

}
