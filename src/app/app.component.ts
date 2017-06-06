import { Component } from '@angular/core';

// Root Component //
@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Recipe Box</h1>
    <ul>
      <p (click)="showIngredients(thisRecipe)" *ngFor="let thisRecipe of recipies">{{thisRecipe.title}} <button (click)="updateRecipe()">Update</button></p>
    </ul>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

// Class Declaration //
export class AppComponent {

  recipies: Recipe[] = [
    new Recipe ('Avacado Toast', ["bread", "avacado", "salt", "lemon", "pepper"]),
    new Recipe ('Healthy Cookies', ["oatmeal", "bananas", "chocolate chips"])
  ];

  // Event Binding //
  updateRecipe() {
    console.log("edit task");
  }

  showIngredients(recipe) {
    console.log(recipe.ingredients);
  }
}

// Model Declaration //
export class Recipe {
  constructor(public title: string, public ingredients: string[]) {}
}
