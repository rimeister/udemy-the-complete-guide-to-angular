import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'; // Import recipe model

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes:Recipe[] = [// This property holds and array of recipe objects, defined in recipe.model.ts
		new Recipe('Pasta', 'A delicious fettucini alfredo.', 'https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg'),
		new Recipe('Pizza', 'Rustic, simple pizza with think crust.', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
	];

	constructor() { }

	ngOnInit() {

	}

}
