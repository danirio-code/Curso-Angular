export class Empleado {
  nombre = ''

  apellido = ''

  cargo = ''

  salario = 0

  constructor(nombre: string, apellido: string, cargo: string, salario: number) {
    this.nombre = nombre
    this.apellido = apellido
    this.cargo = cargo
    this.salario = salario
  }
}

// W2M Trabaja más con interfaces que con clases
// export interface Empleado {
//   nombre: string;
//   apellido: string;
//   cargo: string;
//   salario: number;
// }
