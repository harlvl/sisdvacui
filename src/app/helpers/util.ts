import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class Util {

    public errorMessage: string;
    constructor(private router: Router) {}

    public base64ToBlob(b64Data, contentType= '', sliceSize= 512) {
        b64Data = b64Data.replace(/\s/g, ''); // IE compatibility...
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);

            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        return new Blob(byteArrays, {type: contentType});
    }

}
