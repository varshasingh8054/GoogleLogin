import { Component, OnInit} from '@angular/core';
import {  Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  // template: `
  //     Say {{ SearchData }}
  // `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchData: Array<Object>;
  constructor(private authService:AuthService, private router:Router,private flashMessage: FlashMessagesService) { }
  ngOnInit() {
    // this.search();
  }

 
  // search()
  // {
  //   this.authService.search().subscribe(tasks =>
  //     {
  //       this.searchTask = tasks;
  //     })
  // }
 

}
