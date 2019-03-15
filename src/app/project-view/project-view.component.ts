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
  projectArrayAux: Array < Project > = [] ;

  constructor(private objectsService: ObjectsService )  {}

  ngOnInit() {
    this.projectArray = this.objectsService.projectArray;
    this.projectArrayAux = this.projectArray;
  }

  filterChange(ev) {
    let filter: string = ev.target.value;
    if(filter === "Todos") {
      this.projectArrayAux = this.projectArray;
    }
    else {
      this.projectArrayAux = [];
      for(let project of this.projectArray) {
        for (let tag of project.tags) {
          if(tag === filter) {
            this.projectArrayAux.push(project);
          }
        }
      }
    }
  }

}
