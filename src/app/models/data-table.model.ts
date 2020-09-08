/**
 * A mat-table row containing data from reddit
 */
export interface TableRow {
    selftext: string;
    created: Date;
    num_comments: number;
    title: string;
    author: string;
    score: number;
    permalink: string;
    url: string;
    id: string;
}

/**
 * Objects containing a paginator navigation state
 */
export interface PaginatorNavigationObject {
    before: string;
    after: string;
}

/**
 * Event received from the paginator when its detecting changes
 */
export interface PaginatorEvent {
    previousPageIndex: number;
    pageIndex: number;
    pageSize: number;
    length: number;
}
