import {StudyStatus} from './studyStatus';

export class Study {
    public title: string;
    public stage: string;
    public phase: string;
    public insNumber: string;
    public status: StudyStatus;
    public researchEntity: string;

    constructor(title: string, stage: string) {
        this.status = new StudyStatus();
    }
}
