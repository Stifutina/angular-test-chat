import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {

  messages: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {}

  ngOnInit() {
    this.getChatData();
  }

  getChatData() {
    this.messages = this.db.list('chat_messages').valueChanges();
  }

  newMessage(message) {
    this.db.list('chat_messages').push(message);
  }
}
