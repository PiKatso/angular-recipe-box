import { Component } from '@angular/core';

// Root Component //
@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Recipe Box</h1>
    <ul>
      <p *ngFor="let thisRecipe of recipies">{{thisRecipe.title}} ~ {{thisRecipe.ingredients}}</p>
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
}


// Model Declaration //
export class Recipe {
  constructor(public title: string, public ingredients: string[]) {}
}
