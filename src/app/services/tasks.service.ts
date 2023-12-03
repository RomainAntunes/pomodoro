import {Injectable} from '@angular/core';
import {Task} from "../components/tasks/models/Task";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    tasks: Task[] = [];

    constructor() {
        this.tasks.push({
            id: 1,
            title: 'Task 1',
            notes: 'This is a note',
            done: 0,
            iteration: 1,
            completed: false
        });
    }

    getTasks$(): Observable<Task[]> {
        return of(this.tasks);
    }

    findTask$(taskId: number): Observable<Task | undefined> {
        return of(this.tasks.find(t => t.id === taskId));
    }

    createTask$(task: Task): Task {
        task.id = this.tasks.length + 1;

        this.tasks.push(task);
        return task;
    }

    updateTask$(task: Task): Task {
        const index = this.tasks.findIndex(t => t.id === task.id);
        this.tasks[index] = task;
        return task;
    }

    deleteTask$(taskId: number): void {
        const index = this.tasks.findIndex(t => t.id === taskId);
        this.tasks.splice(index, 1);
    }

    completeTask$($event: number) {
        const index = this.tasks.findIndex(t => t.id === $event);
        this.tasks[index].completed = true;
    }

    resetIterationTask$($event: number) {
        const index = this.tasks.findIndex(t => t.id === $event);
        this.tasks[index].completed = false;
    }
}
