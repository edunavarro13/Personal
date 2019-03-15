import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjectsService } from '../objects.service';
import { Project } from '../models.interface';

@Component({
  selector: 'app-description-view',
  templateUrl: './description-view.component.html',
  styleUrls: ['./description-view.component.scss']
})
export class DescriptionViewComponent implements OnInit {

  id: number;
  projectActual: Project;

  constructor(private route: ActivatedRoute, private objectsService: ObjectsService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.projectActual = this.objectsService.projectArray[this.id - 1];
  }

}
