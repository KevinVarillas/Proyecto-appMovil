import { Curso } from '../interfaces/curso.interface';

export const cursos: Curso[] = [
  {
    id: '1',
    name: 'Curso de Git y GitHub',
    image: 'assets/img/git.jpg',
    profesor: 'Jorge Córdova',
    difficulty: 'Básico',
    duration: '01:30:04',
    escuela_id: '1',
  },
  {
    id: '2',
    name: 'Curso Práctico de HTML y CSS',
    image: 'assets/img/html.jpg',
    profesor: 'Jorge Córdova',
    difficulty: 'Avanzado',
    duration: '01:30:04',
    escuela_id: '1',
  },
  {
    id: '3',
    name: 'Curso Práctico de Python',
    image: 'assets/img/python.jpg',
    profesor: 'Jorge Córdova',
    difficulty: 'Básico',
    duration: '01:30:04',
    escuela_id: '1',
  },

];
