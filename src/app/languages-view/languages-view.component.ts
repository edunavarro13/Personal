import { Component, OnInit } from '@angular/core';
import { Languages } from '../models.interface';
import { ObjectsService } from '../objects.service';

@Component({
  selector: 'app-languages-view',
  templateUrl: './languages-view.component.html',
  styleUrls: ['./languages-view.component.scss']
})
export class LanguagesViewComponent implements OnInit {

  languagesArray: Array < Languages > = [] ;
  constructor(private objectsService: ObjectsService) { }

  ngOnInit() {
    this.languagesArray = this.objectsService.languagesArray;
  }

}
