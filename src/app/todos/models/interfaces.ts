export interface Todos {
  _id?: string;
  text: string;
  completed: boolean;
  completedAt: boolean;
  _creator: string;
}

export interface ResponseTodos {
  todo: Todos;
}
