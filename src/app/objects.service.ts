import { Injectable } from '@angular/core';
import { Languages, Project } from './models.interface';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {

  languagesArray: Array<Languages> = [];
  projectArray: Array<Project> = [];

  detailDuack: Array<string> = [
  `dUAck es un proyecto que realicé como mi trabajo de fin de grado en la Universidad de Alicante.`, 
  `Es una aplicación móvil Android con dos funciones principales:`,
      `1) Si estás haciendo turismo en un pueblo o ciudad y quieres saber qué lugares puedes visitar, dUAck te 
      permite saber qué lugares de interés turístico hay cerca de tu ubicación actual en un rango modificable por 
      el usuario.`,
      `2) Si quieres viajar a un pueblo o ciudad, te permite saber qué lugares de interés turístico hay allí para 
      planificar mejor tu viaje.`,
  ];

  detailGTT: Array<string> = [];

  detailN1M: Array<string> = [];

  detailTrello: Array<string> = [
    `ProyectoTrello es un ToDo List que te permite crear listas y, en ellas, crear tareas simulando un 
    tablero Kanban online. Los datos de listas y tareas están asignadas a un usuario particular mediante una API, 
    por lo que tendrá primero que registrarse y posteriormente iniciar sesión con ese usuario para poder empezar 
    a usar el tablero.`
  ];

  detailDestroyStones: Array<string> = [
  `Destroy Stones es un proyecto que realicé en el curso online de Introducción al desarrollo de videojuegos con 
  Unity de la Universidad Politécnica de Valencia.`,
  `Es un juego para ordenador que va lanzando piedras que pasan por la pantalla. El jugador ha de pulsar encima 
  de las piedras para destruirlas y ganar puntos.`
  ];

  detailPeliculas: Array<string> = [];

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
      image: `./assets/duack.png`,
      detail: this.detailDuack,
      github: "https://github.com/edunavarro13/ChatbotTurismo",
      bitbucket: "",
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
      image: `./assets/GTT.jpg`,
      detail: this.detailGTT,
      github: "https://github.com/edunavarro13/GTTCertificate",
      bitbucket: "",
    });
    // Proyecto N1M
    this.projectArray.push({
      id: 3,
      name: 'N1M',
      author: 'Universidad de Alicante',
      date: '04/2017',
      tags: ["HTML5", "CSS", "Bootstrap", "Javascript", "Angular"],
      resume: "Varias apps contra la violencia de género",
      description: "N1M ayuda a prevenir y concienciar sobre la violencia de género y para realizar llamadas de auxilio en caso de necesidad.",
      image: `./assets/LogoN1M_App.png`,
      detail: this.detailN1M,
      github: "",
      bitbucket: "https://bitbucket.org/jorge3ppss/taes2017/src/master/",
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
      image: `./assets/trello.jpg`,
      detail: this.detailTrello,
      github: "https://github.com/edunavarro13/ProyectoTrello",
      bitbucket: "",
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
      image: `./assets/destroyStones.png`,
      detail: this.detailDestroyStones,
      github: "https://github.com/edunavarro13/UnityDestroyStones",
      bitbucket: "",
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
      image: `./assets/peliculas.jpg`,
      detail: this.detailPeliculas,
      github: "https://github.com/edunavarro13/APIAngular",
      bitbucket: "",
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
