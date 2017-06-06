import { Component } from '@angular/core';

// Root Component //
@Component({
  selector: 'app-root',
  template: `
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>Recipe Box</h1>
      </div>
    </div>
    <ul>
      <div *ngFor="let recipe of recipes">

        <div *ngIf="recipe.showIngredients == null">
          <a href="#" (click)="showDetails(recipe)">{{recipe.title}}</a>
        </div>

        <div *ngIf="recipe.showIngredients">
          <a href="#" (click)="hideDetails(recipe)">{{recipe.title}}</a>
        </div>

        <div *ngIf="recipe.showIngredients">
          <ul>
            <li *ngFor="let ingredient of this.recipe.ingredients">{{ingredient}}</li>
          </ul>
        </div>

      </div>

    </ul>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

// Class Declaration //
export class AppComponent {

  recipes: Recipe[] = [
    new Recipe ('Avacado Toast', ["bread", "avacado", "salt", "lemon", "pepper"]),
    new Recipe ('Healthy Cookies', ["oatmeal", "bananas", "chocolate chips"])
  ];

  show = null;

  showDetails(recipe) {
    recipe.showIngredients = true;
  }

  hideDetails(recipe) {
    recipe.showIngredients = null;
  }

}

// Model Declaration //
export class Recipe {
  showIngredients: boolean = null;
  constructor(public title: string, public ingredients: string[]) {}
}
