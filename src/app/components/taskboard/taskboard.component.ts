import { Component } from '@angular/core';

interface Tasks {
  title: string;
  description: string;
  class?: string;
}

interface Taskboard {
  title: string;
  tasks: Tasks[];
  class?: string;
}

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent {

  taskboard: Taskboard[] = [{
    title: 'Para fazer',
    class: 'todos',
    tasks: [{
      title: 'Fazer integração com APIs, se necessário',
      description: 'O mentor da Globo mandou fazer crawler da programação que está no site da Globo, mas o mentor de tecnologia desaconselhou isto, pois disse que se a Globo mudar algo no site isso pode prejudicar a nossa aplicação'
    }, {
      title: 'Incluir o backend no heroku',
      description: 'Criar a conta. Após subir o código e o banco de dados para o servidor e fazer io teste'
    }]
  }, {
    title: 'Fazendo',
    class: 'inprogress',
    tasks: [{
      title: 'Tela Login e cadastro do app.',
      description: 'Assim, que fizer os endpoints, coloco aqui qual você deve chamar.'
    }, {
      title: 'Criar apresentação do pitch',
      description: 'Fazer os vídeos.',
      class: 'task-status-danger'
    }, {
      title: 'Criar banco de dados e endpoints para chat',
      description: 'Criar a consula e o endpoint para o frontend e o mobile acessar',
      class: 'task-status-info'
    }, {
      title: 'Criar as classes do Backend',
      description: 'Criar as classes de entidades no backend.'
    }]
  }, {
    title: 'Pronto',
    class: 'completed',
    tasks: [{
      title: 'Design work',
      description: 'Commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.'
    }, {
      title: 'Meeting with team',
      description: 'Dapibus ac facilisis in, egestas eget quam.',
      class: 'task-status-success'
    }, {
      title: 'Material Pro angular',
      description: 'We have finished working on MaterialPro'
    }, {
      title: 'Admin wrap converted',
      description: 'We have finished working.'
    }, {
      title: 'Learning Angular 5',
      description: 'Task is now completed to learn angular5',
      class: 'task-status-success'
    }]
  }, {
    title: 'On Hold',
    class: 'onhold',
    tasks: [{
      title: 'Ugrate to bootsrap 4 beta',
      description: 'Its panding in all template to update'
    }, {
      title: 'Required more plugins',
      description: 'Client require more plugins to add.'
    }, {
      title: 'Communication with client',
      description: 'They want to design like minimal way',
      class: 'task-status-danger'
    }, {
      title: 'Use gradiant or not',
      description: 'Need approval on whether use gradiant or make it plain'
    }, {
      title: 'Give review on the product',
      description: 'Commodo luctus, nisi erat porttitor lig.',
      class: 'task-status-danger'
    }]
    }];
  }
