import { Injectable } from '@angular/core';
import { Languages, Project } from './models.interface';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {

  languagesArray: Array<Languages> = [];
  projectArray: Array<Project> = [];

  constructor() { 
    this.inicialiceProjects();
    this.inicialiceLanguages();
  }

  inicialiceProjects() {
     // Proyecto Duack
     this.projectArray.push({
      id: 1,
      name: 'Duack',
      author: 'Universidad de Alicante',
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
      author: 'Bootcamp Geekshubs',
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
      author: 'Universidad de Alicante',
      date: 'Hoy',
      tags: ["Javascript", "Bootstrap", "Angular", "HTML", "CSS"],
      resume: "Yeah",
      description: "Descripcion del proyecto N1M ira aqui en proximas implementaciones",
      image: `'../../assets/LogoN1M_App.png'`
    });
    // Proyecto Trello
    this.projectArray.push({
      id: 4,
      name: 'Trello',
      author: 'Bootcamp Geekshubs',
      date: 'Hoy',
      tags: ["Javascript", "Typescript", "Angular", "HTML", "CSS", "C#"],
      resume: "Yeah",
      description: "Descripcion del proyecto Trello ira aqui en proximas implementaciones",
      image: `'../../assets/LogoN1M_App.png'`
    });
    // Proyecto Peliculas
    this.projectArray.push({
      id: 5,
      name: 'Proyecto películas',
      author: 'Bootcamp Geekshubs',
      date: 'Hoy',
      tags: ["Javascript", "Bootstrap", "Angular", "HTML", "CSS"],
      resume: "Yeah",
      description: "Descripcion del proyecto Peliculas ira aqui en proximas implementaciones",
      image: `'../../assets/LogoN1M_App.png'`
    });
  }

  inicialiceLanguages() {
    // Javascript
    this.languagesArray.push({
      id: 1,
      name: "Javascript",
      description: "Descripcion",
      image: `'../../assets/lenguajes/javascript.png'`
    });
    // HTML5
    this.languagesArray.push({
      id: 2,
      name: "HTML5",
      description: "Descripcion",
      image: `'../../assets/lenguajes/html5.png'`
    });
    // CSS
    this.languagesArray.push({
      id: 3,
      name: "CSS3",
      description: "Descripcion",
      image: `'../../assets/lenguajes/CSS3.png'`
    });
  }
}
