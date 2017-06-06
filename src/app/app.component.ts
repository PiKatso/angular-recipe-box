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
      <div *ngFor="let recipe of recipes" class="container">
        <a *ngIf="recipe.showIngredients == null"href="#" (click)="showDetails(recipe)">{{recipe.title}}</a>

        <div *ngIf="recipe.showIngredients" class="recipe-item">
          <a href="#" (click)="hideDetails(recipe)">{{recipe.title}}</a>
          <ul>
            <li *ngFor="let ingredient of this.recipe.ingredients">{{ingredient}}</li>
          </ul>

          <button class="btn btn-primary btn-sm" (click)="showUpdateForm()">Update Recipe</button>
          <hr>
          <div *ngIf="formShow">
            <h3>Update Recipe</h3>
            <label>Change the Recipe Name</label>
            <input [(ngModel)]="recipe.title">
            <button class="btn btn-primary btn-sm" (click)="hideUpdateForm()">Done</button>
          </div>
        </div>

      </div>
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

// Model Declaration //
export class Recipe {
  showIngredients: boolean = null;
  constructor(public title: string, public ingredients: string[]) {}
}
