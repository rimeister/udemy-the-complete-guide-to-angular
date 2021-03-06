import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

	allowNewServer = false;
	serverCreationStatus = 'No server was created.';
	serverName = 'testServer';
	serverCreated = false;
	servers =['Testserver', 'Testserver 2'];


	constructor() {
		setTimeout( () => {
			this.allowNewServer = true; // 'this' works with fat arrow
		}, 2000)
	}

	ngOnInit() {
	}

	onUpdateServerName(event: any) {
		console.log(event);
		this.serverName = (<HTMLInputElement>event.target).value; // <HTMLInputElement> tells TS that the type of the element on which the event is happening is an HTML input. "Explicit Casting" 
	}

	onCreateServer() {
		this.serverCreated = true;
		this.servers.push(this.serverName);
		this.serverCreationStatus = 'A new server was created. Name is ' + this.serverName;
	}

}
