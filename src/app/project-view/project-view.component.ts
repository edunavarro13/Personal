import {
  Component,
  OnInit
} from '@angular/core';
import {
  Project
} from '../models.interface';
import { ObjectsService } from '../objects.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  projectArray: Array < Project > = [] ;

  constructor(private objectsService: ObjectsService )  {}

  ngOnInit() {
    this.projectArray = this.objectsService.projectArray;
  }

}
