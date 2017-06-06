import { Component } from '@angular/core';

// Root Component //
@Component({
  selector: 'app-root',
  template: `
  <div>
    <div class="jumbotron">
    <h1>Recipe Box</h1>
    </div>
    <ul>
      <div *ngFor="let recipe of recipes"><a href="#" (click)="showDetails(recipe)">{{recipe.title}}</a>
        <div *ngIf="recipe.showIngredients">
          <ul>
            <li *ngFor="let ingredient of this.recipe.ingredients">{{ingredient}}</li>
          </ul>
          <button (click)="hideDetails(recipe)">Hide Details</button>
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
  showIngredients: boolean = false;
  constructor(public title: string, public ingredients: string[]) {}
}
