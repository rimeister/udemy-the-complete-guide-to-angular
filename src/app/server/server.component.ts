import { Component } from '@angular/core'; // Make @Component decorator known to JS

// Decorators allow you to enhance your classes, tell Angular its a component
@Component({
	selector: 'app-server',
	templateUrl: './server.component.html' // Relative to the TS file
})

export class ServerComponent {
	serverId: number = 10;
	serverStatus: string = 'offline';

	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'; 
	}

	getServerStatus() {
		return this.serverStatus;
	}

	getColor() {
		// Returns either green or red
		// Turnary statement: If this.serverStatus is === online, return green, otherwise, return red.
		return this.serverStatus === 'online' ? 'green' : 'red';
	}

}