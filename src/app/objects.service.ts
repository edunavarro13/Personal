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
      name: 'dUAck',
      author: 'Universidad de Alicante',
      date: '06/2018',
      tags: ["Java", "Android", "Android Studio", "C#", "Visual studio", "IBM Watson", "Ngrok"],
      resume: "Chatbot de turismo",
      description: "Es un chatbot de turismo que permite comprobar qué lugares de interés turístico hay cerca de ti. Fue mi TFG.",
      image: `'./assets/duack.png'`
    });
    // Proyecto GTT
    this.projectArray.push({
      id: 2,
      name: 'Proyecto GTT',
      author: 'Bootcamp Geekshubs',
      date: '02/2019',
      tags: ["HTML5", "CSS", "Javascript", "ECM6", "Typescript", "Angular", "C#", "Visual Studio"],
      resume: "Gestión de certificados",
      description: "Proyecto que permite gestionar certificados digitales y subir avisos a Jira cuando alguno de ellos está cercano a caducar.",
      image: `'./assets/GTT.jpg'`
    });
    // Proyecto N1M
    this.projectArray.push({
      id: 3,
      name: 'N1M',
      author: 'Universidad de Alicante',
      date: '04/2017',
      tags: ["HTML", "CSS", "Bootstrap", "Javascript", "Angular"],
      resume: "Varias apps contra la violencia de género",
      description: "N1M ayuda a prevenir y concienciar sobre la violencia de género y para realizar llamadas de auxilio en caso de necesidad.",
      image: `'./assets/LogoN1M_App.png'`
    });
    // Proyecto Trello
    this.projectArray.push({
      id: 4,
      name: 'Trello',
      author: 'Bootcamp Geekshubs',
      date: '01/2019',
      tags: ["HTML5", "CSS", "Javascript", "ECM6", "Typescript", "Angular"],
      resume: "Tablero de tareas",
      description: "Proyecto que permite crear y gestionar listas y tareas, similar a Trello.",
      image: `'./assets/trello.jpg'`
    });
    // Proyecto Destroy Stones
    this.projectArray.push({
      id: 5,
      name: 'Destroy stones',
      author: 'Curso edx',
      date: '03/2019',
      tags: ["C#", "Unity"],
      resume: "Videojuego en Unity",
      description: "Videojuego que consiste en destruir piedras que van saliendo en pantalla para conseguir la máxima puntuación posible.",
      image: `'./assets/destroyStones.png'`
    });
    // Proyecto Peliculas
    this.projectArray.push({
      id: 6,
      name: 'Proyecto películas',
      author: 'Bootcamp Geekshubs',
      date: '01/2019',
      tags: ["HTML5", "CSS", "Bootstrap", "Javascript", "ECM6", "Typescript", "Angular"],
      resume: "Visor de películas",
      description: "Proyecto que permite visualizar las películas más populares actualmente.",
      image: `'./assets/peliculas.jpg'`
    });
  }

  inicialiceLanguages() {
    // HTML5
    this.languagesArray.push({
      id: 1,
      name: "HTML5",
      link: "https://es.wikipedia.org/wiki/HTML5",
      projects: [this.projectArray[1], this.projectArray[2], this.projectArray[3], this.projectArray[5]],
      image: './assets/lenguajes/html5.png'
    });
    // CSS
    this.languagesArray.push({
      id: 2,
      name: "CSS3",
      link: "https://es.wikipedia.org/wiki/Hoja_de_estilos_en_cascada",
      projects: [this.projectArray[1], this.projectArray[2], this.projectArray[3], this.projectArray[5]],
      image: './assets/lenguajes/CSS3.png'
    });
    // Javascript
    this.languagesArray.push({
      id: 3,
      name: "Javascript",
      link: "https://es.wikipedia.org/wiki/JavaScript",
      projects: [this.projectArray[1], this.projectArray[2], this.projectArray[3], this.projectArray[5]],
      image: './assets/lenguajes/javascript.png'
    });
    // ECM6
    this.languagesArray.push({
      id: 4,
      name: "ECMAScript 6",
      link: "https://es.wikipedia.org/wiki/ECMAScript",
      projects: [this.projectArray[1], this.projectArray[3], this.projectArray[5]],
      image: './assets/lenguajes/ecmascript.png'
    });
    // Typescript
    this.languagesArray.push({
      id: 5,
      name: "Typescript",
      link: "https://es.wikipedia.org/wiki/TypeScript",
      projects: [this.projectArray[1], this.projectArray[3], this.projectArray[5]],
      image: './assets/lenguajes/typescript.png'
    });
    // Java
    this.languagesArray.push({
      id: 6,
      name: "Java",
      link: "https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)",
      projects: [this.projectArray[0]],
      image: './assets/lenguajes/java.png'
    });
    // C#
    this.languagesArray.push({
      id: 7,
      name: "C Sharp",
      link: "https://es.wikipedia.org/wiki/C_Sharp",
      projects: [this.projectArray[0], this.projectArray[1], this.projectArray[4]],
      image: './assets/lenguajes/csharp.png'
    });
    // C
    this.languagesArray.push({
      id: 8,
      name: "C",
      link: "https://es.wikipedia.org/wiki/C_(lenguaje_de_programaci%C3%B3n)",
      projects: [],
      image: './assets/lenguajes/c.png'
    });
    // C++
    this.languagesArray.push({
      id: 9,
      name: "C++",
      link: "https://es.wikipedia.org/wiki/C%2B%2B",
      projects: [],
      image: './assets/lenguajes/c++.png'
    });
    // PHP
    this.languagesArray.push({
      id: 10,
      name: "PHP",
      link: "https://es.wikipedia.org/wiki/PHP",
      projects: [],
      image: './assets/lenguajes/php.png'
    });
  }
}
