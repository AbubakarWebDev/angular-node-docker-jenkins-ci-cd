import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { UrlBuilder } from '../../shared/classes/url-builder';
import { QueryStringParameters } from '../../shared/classes/query-string-parameters';

@Injectable()
export class ApiEndpointsService {
    apiBaseURL: string;
    
    constructor() {
        this.apiBaseURL = `${environment.api.URL}/api/${environment.api.VER}`;
    }

    public getUserEndpoint(): string {
        return this.createUrl('users');
    }

    public getUserByNameEndpoint(name: string): string {
        return this.createUrlWithPathVariables('users', [name]);
    }

    private createUrl(action: string): string {
        const urlBuilder: UrlBuilder = new UrlBuilder(this.apiBaseURL, action);
        return urlBuilder.toString();
    }

    private createUrlWithQueryParameters(
        action: string,
        queryStringHandler?: (queryStringParameters: QueryStringParameters) => void
    ): string {
        const urlBuilder: UrlBuilder = new UrlBuilder(this.apiBaseURL, action);

        // Push extra query string params
        if (queryStringHandler) {
            queryStringHandler(urlBuilder.queryString);
        }
        
        return urlBuilder.toString();
    }

    // URL WITH PATH VARIABLES
    private createUrlWithPathVariables(
        action: string,
        pathVariables: any[] = []
    ): string {
        let encodedPathVariablesUrl: string = '';

        // Push extra path variables
        for (const pathVariable of pathVariables) {
            if (pathVariable !== null) {
                encodedPathVariablesUrl +=
                    `/${encodeURIComponent(pathVariable.toString())}`;
            }
        }

        const urlBuilder: UrlBuilder = new UrlBuilder(
            this.apiBaseURL,
            `${action}${encodedPathVariablesUrl}`
        );
        
        return urlBuilder.toString();
    }
}