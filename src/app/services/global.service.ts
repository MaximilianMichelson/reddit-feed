import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private _currentSubreddit: string;
  private readonly _subredditBaseURL = 'https://www.reddit.com/r/';
  constructor() { }

  get currentSubreddit(): string {
    return this._currentSubreddit;
  }

  set currentSubreddit(newSubreddit: string) {
    this._currentSubreddit = newSubreddit;
  }

  get subredditBaseURL(): string {
    return this._subredditBaseURL;
  }

}
