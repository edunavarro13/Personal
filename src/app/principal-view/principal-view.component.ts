import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.scss']
})
export class PrincipalViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('section#main-menu ul li').hover(function(){
      /* Removes all .selected class from the menu and adds the .selected class to the pointed element */
      $('section#main-menu ul li').removeClass('selected');
      $(this).addClass('selected');
    
      /* Removes all .active class from the button's elements and adds the .active class to the selected element */
      $('section#main-menu ul li div.futuristic-button .top').removeClass('active');
      $('section#main-menu ul li div.futuristic-button .bottom').removeClass('active');
      $('section#main-menu ul li div.futuristic-button .parallelogram-left').removeClass('active');
      $('section#main-menu ul li div.futuristic-button .parallelogram-right').removeClass('active');
      $('.selected div.futuristic-button .top').addClass('active');
      $('.selected div.futuristic-button .bottom').addClass('active');
      $('.selected div.futuristic-button .parallelogram-left').addClass('active');
      $('.selected div.futuristic-button .parallelogram-right').addClass('active');
    });
  }

}
