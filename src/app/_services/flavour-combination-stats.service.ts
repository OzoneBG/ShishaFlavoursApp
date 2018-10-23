import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class FlavourCombinationStats {
    constructor(private http: HttpClient) {}
 
    getTopTenCombos() {
        let url  = environment.apiEndpoint + environment.apiSuffix + 'flavourcombinationsstatistics/GetTop10FlavourCombinations';
        return this.http.get(url);
    }   
}