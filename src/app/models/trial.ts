import {StudyStatus} from './studyStatus';

export class Trial {
    public title: string;
    public stage: string;
    public phase: string;
    public insNumber: string;
    public status: StudyStatus;
    public researchEntity: string;
    public startDate: string;
    public endDate: string;

    constructor(title: string, stage: string) {
        this.status = new StudyStatus();
    }
}
