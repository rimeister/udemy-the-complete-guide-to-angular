import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	showText:boolean = true;
	clicks = [];

	toggleText() {

		this.showText=!this.showText

		var timeStamp = new Date();

		// Get the time and format it
		var hours = timeStamp.getHours();
		var minutes = "0" + timeStamp.getMinutes();
		var seconds = "0" + timeStamp.getSeconds();
		var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

		this.clicks.push(formattedTime);

	}

	toggleStyle() {


		var displayVal;
		if (this.showText) {
			displayVal = 'block';
		} else {
			displayVal = 'none';
		}

		return displayVal;
	}

	setBackgroundColor(index) {
		var bgColor;

		if (index > 3) {
			bgColor = 'blue';
		} else {
			bgColor = 'white';
		}

		return bgColor;

	}

}
