import {
  Component,
  OnInit
} from '@angular/core';
import {
  Project
} from '../models.interface';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  projectArray: Array < Project > ;

  constructor() {}

  ngOnInit() {
    this.projectArray = [];
    // Proyecto Duack
    this.projectArray.push({
      id: 1,
      name: 'Duack',
      author: 'Eduardo Navarro',
      date: 'Hoy',
      tags: ["Java", "Android", "Android Studio", "C#"],
      resume: "Yeah",
      description: "Descripcion del proyecto Duack ira aqui en proximas implementaciones",
      image: `'../../assets/duack.png'`
    });
    // Proyecto GTT
    this.projectArray.push({
      id: 2,
      name: 'Proyecto GTT',
      author: 'Eduardo Navarro',
      date: 'Hoy',
      tags: ["Javascript", "Typescript", "Angular", "C#", "HTML5", "CSS", "Visual Studio"],
      resume: "Yeah",
      description: "Descripcion del proyecto GTT ira aqui en proximas implementaciones",
      image: `'../../assets/LogoGTT.jpg'`
    });
    // Proyecto N1M
    this.projectArray.push({
      id: 3,
      name: 'N1M',
      author: 'Eduardo Navarro',
      date: 'Hoy',
      tags: ["Javascript", "Bootstrap", "Angular", "HTML", "CSS"],
      resume: "Yeah",
      description: "Descripcion del proyecto N1M ira aqui en proximas implementaciones",
      image: `'../../assets/LogoN1M_App.png'`
    });
  }

}
