import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from '../../services/task-service.service';
import { TarefaService } from '../../services/tarefa-service.service';
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})

export class TarefasComponent implements OnInit {

  tarefas: any[] = [];
  tarefaForm: FormGroup;
  mensagemSucesso: string = '';

  constructor(private taskServiceService: TaskServiceService, private formBuilder: FormBuilder) {
    this.tarefaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      dataVencimento: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.tarefas = this.taskServiceService.getTasks();
  }

  adicionarTarefa(): void {
    if (this.tarefaForm.valid) {
      this.taskServiceService.addTask(this.tarefaForm.value);
      this.tarefaForm.reset();
      this.tarefas = this.taskServiceService.getTasks();
      this.mensagemSucesso = 'Tarefa adicionada com sucesso!';
    } else {
      this.mensagemSucesso = '';
    }
  }

  removerTarefa(tarefa: any): void {
    this.taskServiceService.deleteTask(tarefa);
    this.tarefas = this.taskServiceService.getTasks();
    this.mensagemSucesso = 'Tarefa removida com sucesso!';
  }
}


export class TarefasModule { }

