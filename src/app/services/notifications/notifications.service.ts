import { Injectable } from '@angular/core';
import {Notification} from '../../entities/Notifications/Notification';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
    public errors   = new BehaviorSubject([]);
    public warnings = new BehaviorSubject([]);
    public success  = new BehaviorSubject([]);
    setError() {
      this.errors.next(
          this.errors.value.push({
              status: 3,

          })
      );
    }
    setWarning() {

    }
    setSuccess() {

    }
}
