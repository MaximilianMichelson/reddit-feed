/**
 * A reddit comment
 */
export interface RedditComment {
    author: string;
    text: string;
    score: number;
    created: number;
    data?: {
        children: {
            data: {
                replies: {
                    data: RedditCommentReply[];
                };
            };
        }[];
    };
}

/**
 * A reply to a reddit comment
 */
export interface RedditCommentReply {
    data: {
        author: string,
        body: string,
        score: number,
        created: string,
        created_utc: number,
        replies: {
            data: {
                children: RedditCommentReply[]
            };
        };
    };
}

/**
 * The Feed from reddit.com
 */
export interface RedditListing {
    data: {
        children: RedditPost[];
        after: string;
        before: string;
        current: string;
    };
}

/**
 * A Post on reddit
 */
export interface RedditPost {
    data: {
        created: string;
        permalink: string;
        stickied: boolean;
    };
}
