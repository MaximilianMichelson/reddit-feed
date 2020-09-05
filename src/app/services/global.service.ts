import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private _currentSubreddit: string;
  constructor() { }

  get currentSubreddit(): string {
    return this._currentSubreddit;
  }

  set currentSubreddit(newSubreddit: string) {
    this._currentSubreddit = newSubreddit;
  }

  timeAgo(unixTimestamp: number): string {

    const seconds = Math.floor((new Date().getTime() - unixTimestamp) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
        return `${Math.floor(interval)} years ago`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return `${Math.floor(interval)} months ago`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return `${Math.floor(interval)} days ago`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return `${Math.floor(interval)} hours ago`;
    }
    interval = seconds / 60;
    if (interval > 1) {
        return `${Math.floor(interval)} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
}

}
