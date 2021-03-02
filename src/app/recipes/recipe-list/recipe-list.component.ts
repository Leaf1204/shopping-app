import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe','test', 'https://i.imgur.com/kiU1SBq.jpg'),
    new Recipe('A test Recipe 2','test2 ', 'https://i.imgur.com/kiU1SBq.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
