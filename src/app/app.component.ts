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
      <div (click)="showDetails(recipe)" *ngFor="let recipe of recipes">{{recipe.title}}
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

  showDetails(recipe) {
    recipe.showIngredients = true;
  }

}

// Model Declaration //
export class Recipe {
  showIngredients: boolean = false;
  constructor(public title: string, public ingredients: string[]) {}
}
