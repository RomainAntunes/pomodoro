import {Component, OnInit} from '@angular/core';
import {SettingsService} from "../../../../shared/services/settings.service";
import {SettingsTimer} from "../../../../shared/models/settings";

@Component({
    selector: 'app-timer-settings',
    templateUrl: './timer-settings.component.html',
    styleUrls: ['./timer-settings.component.scss']
})
export class TimerSettingsComponent implements OnInit {

    timer?: SettingsTimer

    constructor(
        private readonly settingsService: SettingsService
    ) {
    }

    ngOnInit(): void {
        this.timer = this.settingsService.getTimerSettings();
    }


}
