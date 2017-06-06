import { Component } from '@angular/core';
import { Recipe } from './recipe';
// import { recipes } from './mock-recipes';

// Root Component //
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Class Declaration //
export class AppComponent {

  recipes: Recipe[] = [
    new Recipe ('Avacado Toast', ["bread", "avacado", "salt", "lemon", "pepper"], "mash avacado wit lemon juice, salt and pepper & apply liberally to toast"),
    new Recipe ('Healthy Cookies', ["oatmeal", "bananas", "chocolate chips"], "mash bananas, adds and pour in chocolate chips. Bake 10 mins"),
    new Recipe ('Peach Crisp', ["oatmeal", "peaches", "sugar", "butter", "flour"], "cut up peaches, mix butter, flour, sugar and oats. Place peaches in container, put oat mixture on top and chunks of butter on top. Bake.")
  ];

  show = null;
  formShow = null;

  showDetails(recipe) {
    // this.show = true;
    recipe.showIngredients = true;
  }

  hideDetails(recipe) {
    // this.show = null;
    recipe.showIngredients = null;
  }

  showUpdateForm() {
    this.formShow = true;
  }

  hideUpdateForm() {
    this.formShow = null;
  }

}
