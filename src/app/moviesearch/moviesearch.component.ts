import { Component, OnInit } from '@angular/core';
import { MoviesearchService } from '../service/movie/moviesearch.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-moviesearch',
  templateUrl: './moviesearch.component.html',
  styleUrls: ['./moviesearch.component.css']
})
export class MoviesearchComponent implements OnInit {
  movieList: any = [];
  movieName: string='';
  constructor(private movie: MoviesearchService) { }

  ngOnInit() {
 

  }
  searchMovie(){
    debugger;
    this.movie.loadMovieName('iron').subscribe((data) => {

     this.movieList = data.Search;
    });
   
  }
}
