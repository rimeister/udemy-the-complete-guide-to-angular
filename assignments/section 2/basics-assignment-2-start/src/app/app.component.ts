import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	userName:string;

	resetUserName() {
		this.userName = '';
	}

	testEmpty() {
		var isEmpty:boolean;
		if (this.userName !== '') {
			isEmpty = false;
		} else {
			isEmpty = true;
		}
		return isEmpty;
	}

}
