import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchedTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  public search(term: string): void {
    this.searchedTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchedTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }

}
