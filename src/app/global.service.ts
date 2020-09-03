import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private _currentSubreddit: string;
  private _subredditBaseURL: string = 'https://www.reddit.com/r/';
  constructor() { }

  get currentSubreddit() {
    return this._currentSubreddit
  }

  set currentSubreddit(newSubreddit: string) {
    this._currentSubreddit = newSubreddit;
  }

  get subredditBaseURL() {
    return this._subredditBaseURL
  }

  set subredditBaseURL(newSubreddit: string) {
    this._subredditBaseURL = newSubreddit;
  }
}
