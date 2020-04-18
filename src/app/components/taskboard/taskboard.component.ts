import { Component } from '@angular/core';

interface Tasks {
  title: string;
  description: string;
  class: string;
}

interface Taskboard {
  title: string;
  valor: string;
  qtd: string,
  tasks: Tasks[];
  class?: string;
}

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent {

  taskboard: Taskboard[] =
  [
    {
      title: 'Contato',
      class: 'todos',
      valor: 'R$ 5.500,00',
      qtd: '{ 8 negócios }',
      tasks:
      [
        {
          title: 'Proposta #567',
          description: 'R$ 900,00 - Guilherme Costa Lopes',
          class: 'task-status-info'
        },
        {
          title: 'Proposta #568',
          description: 'R$ 120,00 - José Lopes',
          class: 'task-status-danger'
        },
        {
          title: 'Proposta #569',
          description: 'R$ 750,00 - Jorge Costa',
          class: 'task-status-warning'
        },
        {
          title: 'Proposta #570',
          description: 'R$ 890,00 - João Costa Lopes',
          class: 'task-status-info'
        },
        {
          title: 'Proposta #250',
          description: 'R$ 450,00 - Gustavo Costa Lopes',
          class: 'task-status-info'
        },
        {
          title: 'Proposta #570',
          description: 'R$ 650,00 - Helena Costa Lopes',
          class: 'task-status-warning'
        },
        {
          title: 'Proposta #580',
          description: 'R$ 550,00 - Maira de Fátima Costa Lopes',
          class: 'task-status-warning'
        },
        {
          title: 'Proposta #590',
          description: 'R$ 269,00 - Joana Lopes',
          class: 'task-status-warning'
        }
      ]
    },
    {
      title: 'Qualificação',
      class: 'inprogress',
      valor: 'R$ 6.500,00',
      qtd: '{ 10 negócios }',
      tasks:
      [
        {
          title: 'Proposta #350',
          description: 'R$ 900,00 - Guilherme Costa Lopes',
          class: 'task-status-danger'
        },
        {
          title: 'Proposta #390',
          description: 'R$ 120,00 - José Lopes',
          class: 'task-status-danger'
        },
        {
          title: 'Proposta #357',
          description: 'R$ 750,00 - Jorge Costa',
          class: 'task-status-info'
        },
        {
          title: 'Proposta #350',
          description: 'R$ 890,00 - Joana Fátima Bernades',
          class: 'task-status-danger'
        },
        {
          title: 'Proposta #350',
          description: 'R$ 450,00 - Maria Paula Lopes',
          class: 'task-status-info'
        },
        {
          title: 'Proposta #80',
          description: 'R$ 650,00 - Paula Joana Bernades',
          class: 'task-status-danger'
        },
        {
          title: 'Proposta #120',
          description: 'R$ 550,00 - Joana Bernades',
          class: 'task-status-danger'
        },
        {
          title: 'Proposta #236',
          description: 'R$ 269,00 - Fátima Joana Bernades',
          class: 'task-status-info'
        }
      ]
    }, {
      title: 'Envio de proposta',
      class: 'completed',
      valor: 'R$ 8.500,00',
      qtd: '{ 15 negócios }',
      tasks:
      [
        {
          title: 'Proposta #120',
          description: 'R$ 900,00 - Sebastião Carlos Lopes',
          class: 'task-status-info'
        },
        {
          title: 'Proposta #800',
          description: 'R$ 120,00 - Ricardo Lopes',
          class: 'task-status-danger'
        },
        {
          title: 'Proposta #1',
          description: 'R$ 750,00 - Renato Costa',
          class: 'task-status-info'
        },
        {
          title: 'Proposta #2',
          description: 'R$ 890,00 - Guilherme Costa Lopes',
          class: 'task-status-info'
        },
        {
          title: 'Proposta #100',
          description: 'R$ 450,00 - Aparecida Lopes',
          class: 'task-status-info'
        },
        {
          title: 'Proposta #30',
          description: 'R$ 650,00 - Maria Zélia Lopes',
          class: 'task-status-danger'
        },
        {
          title: 'Proposta #250',
          description: 'R$ 550,00 - Juliana Lopes',
          class: 'task-status-danger'
        },
        {
          title: 'Proposta #600',
          description: 'R$ 269,00 - Fernanda Lopes',
          class: 'task-status-danger'
        }
      ]
    },
    {
      title: 'Folow-up',
      class: 'onhold',
      valor: 'R$ 1.500,00',
      qtd: '{ 7 negócios }',
      tasks:
      [
        {
          title: 'Proposta #534',
          description: 'R$ 900,00 - Sebastião Carlos Lopes',
          class: 'task-status-warning'
        },
        {
          title: 'Proposta #998',
          description: 'R$ 120,00 - Ricardo Lopes',
          class: 'task-status-danger'
        },
        {
          title: 'Proposta #5',
          description: 'R$ 750,00 - Renato Costa',
          class: 'task-status-danger'
        },
        {
          title: 'Proposta #6',
          description: 'R$ 890,00 - Luis Fernando Costa',
          class: 'task-status-warning'
        },
        {
          title: 'Proposta #9',
          description: 'R$ 450,00 - Aparecida Lopes',
          class: 'task-status-danger'
        },
        {
          title: 'Proposta #10',
          description: 'R$ 650,00 - Tulio Lopes',
          class: 'task-status-danger'
        },
        {
          title: 'Proposta #500',
          description: 'R$ 550,00 - Tulio Ferreira',
          class: 'task-status-warning'
        },
        {
          title: 'Proposta #50',
          description: 'R$ 269,00 - Valdeci Lopes',
          class: 'task-status-danger'
        }
      ]
    },
    {
      title: 'Fechamento',
      class: 'info',
      valor: 'R$ 550,00',
      qtd: '{ 10 negócios }',
      tasks:
      [
        {
          title: 'Proposta #150',
          description: 'R$ 500,00 - Sebastião Carlos Lopes',
          class: 'task-status-warning'
        },
        {
          title: 'Proposta #35',
          description: 'R$ 50,00 - Guilherme Costa Lopes',
          class: 'task-status-danger'
        }
      ]
    }
  ];
}
