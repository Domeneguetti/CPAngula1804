import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  tarefas: string[] = [];

  constructor() { }

  adicionarTarefa(tarefa: string): void {
    this.tarefas.push(tarefa);
  }

  listarTarefas(): string[] {
    return this.tarefas;
  }

  removerTarefa(tarefa: string): void {
    const index = this.tarefas.indexOf(tarefa);
    if (index > -1) {
      this.tarefas.splice(index, 1);
    }
  }
}
