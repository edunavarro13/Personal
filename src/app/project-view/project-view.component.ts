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
      this.projectArrayAux = this.projectArray.filter( elem => {
        for (let tag of elem.tags) {
          if(tag === filter) {
            return elem;
          }
        }
      });
    }
  }

}
