import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css',
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [];
  private cocktailService = inject(CocktailService);

  ngOnInit(): void {
    this.cocktailService
      .getCocktails()
      .subscribe((cocktailsFromJsonFile: Cocktail[]) => {
        this.cocktails = cocktailsFromJsonFile;
      });
  }
}
