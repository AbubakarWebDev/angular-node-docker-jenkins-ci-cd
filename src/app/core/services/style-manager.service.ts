import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StyleManager {
    isDark = false;

    toggleDarkTheme() {
        if (this.isDark) {
            this.removeStyle('dark-theme');
            document.body.classList.remove('dark-theme');
            this.isDark = false;
        } 
        else {
            const href = 'dark-theme.css';
            this.getLinkElementForKey('dark-theme').setAttribute('href', href);
            document.body.classList.add('dark-theme');
            this.isDark = true;
        }
    }

    removeStyle(key: string) {
        const existingLinkElement = this.getExistingLinkElementByKey(key);
        if (existingLinkElement) {
            document.head.removeChild(existingLinkElement);
        }
    }

    private getLinkElementForKey(key: string) {
        return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
    }

    private getExistingLinkElementByKey(key: string) {
        return document.head.querySelector(
            `link[rel="stylesheet"].${this.getClassNameForKey(key)}`
        );
    }

    private createLinkElementWithKey(key: string) {
        const linkEl = document.createElement('link');
        linkEl.setAttribute('rel', 'stylesheet');
        linkEl.classList.add(this.getClassNameForKey(key));
        document.head.appendChild(linkEl);
        return linkEl;
    }

    private getClassNameForKey(key: string) {
        return `style-manager-${key}`;
    }
}

