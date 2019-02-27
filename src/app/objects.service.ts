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
    // HTML5
    this.languagesArray.push({
      id: 1,
      name: "HTML5",
      description: "Descripcion",
      image: `'../../assets/lenguajes/html5.png'`
    });
    // CSS
    this.languagesArray.push({
      id: 2,
      name: "CSS3",
      description: "Descripcion",
      image: `'../../assets/lenguajes/CSS3.png'`
    });
    // Javascript
    this.languagesArray.push({
      id: 3,
      name: "Javascript",
      description: "Descripcion",
      image: `'../../assets/lenguajes/javascript.png'`
    });
    // ECM6
    this.languagesArray.push({
      id: 4,
      name: "ECMAScript 6",
      description: "Descripcion",
      image: `'../../assets/lenguajes/ecmascript.png'`
    });
    // Typescript
    this.languagesArray.push({
      id: 5,
      name: "Typescript",
      description: "Descripcion",
      image: `'../../assets/lenguajes/typescript.png'`
    });
    // Java
    this.languagesArray.push({
      id: 6,
      name: "Java",
      description: "Descripcion",
      image: `'../../assets/lenguajes/java.png'`
    });
    // PHP
    this.languagesArray.push({
      id: 7,
      name: "PHP",
      description: "Descripcion",
      image: `'../../assets/lenguajes/php.png'`
    });
    // C
    this.languagesArray.push({
      id: 8,
      name: "C",
      description: "Descripcion",
      image: `'../../assets/lenguajes/c.png'`
    });
    // C++
    this.languagesArray.push({
      id: 9,
      name: "C++",
      description: "Descripcion",
      image: `'../../assets/lenguajes/c++.png'`
    });
    // C#
    this.languagesArray.push({
      id: 10,
      name: "C Sharp",
      description: "Descripcion",
      image: `'../../assets/lenguajes/csharp.png'`
    });
  }
}
