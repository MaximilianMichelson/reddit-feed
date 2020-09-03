import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public currentSubreddit: string = 'sweden';
  public subredditBaseURL: string = 'https://www.reddit.com/r/';
  constructor() { }
}
