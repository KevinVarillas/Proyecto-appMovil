export interface Curso {
  id:string;
  name:string;
  image:string;
  profesor: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  duration: string;
  escuela_id: string;
}
