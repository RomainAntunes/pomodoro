import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../services/tasks.service";
import {Observable} from "rxjs";
import {Task} from "./models/Task";

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

    tasks$!: Observable<Task[]>

    constructor(
        private readonly tasksService: TasksService,
    ) {
    }

    ngOnInit(): void {
        this.tasks$ = this.tasksService.getTasks$();
    }

    createTask() {
        const task: Task = {
            id: 0,
            title: 'New Task',
            completed: false,
        };

        this.tasksService.createTask$(task);
    }

    deleteTask(id: number) {
        this.tasksService.deleteTask$(id);
    }
}
