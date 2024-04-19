import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  deleteTask(tarefa: any) {
    throw new Error('Method not implemented.');
  }
  addTask(value: any) {
    throw new Error('Method not implemented.');
  }
  getTasks(): any[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
