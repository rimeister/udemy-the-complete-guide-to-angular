import { Component } from '@angular/core'; // Make @Component decorator known to JS

// Decorators allow you to enhance your classes, tell Angular its a component
@Component({
	selector: 'app-server',
	templateUrl: './server.component.html' // Relative to the TS file
})

export class ServerComponent {
	serverId: number = 10;
	serverStatus: string = 'offline';

	getServerStatus() {
		return this.serverStatus;
	}

}