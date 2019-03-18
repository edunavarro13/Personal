export interface Project {
    id: number;
    name: string;
    author: string;
    date: string;
    tags: Array< string >;
    resume: string;
    description: string;
    image: string;
    detail: Array<string>;
    github: string;
    bitbucket: string;
  }
export interface Languages {
  id: number;
  name: string;
  link: string;
  projects: Array<Project>;
  image: string;
}