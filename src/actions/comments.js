export const ADDCOMMENT = 'COMMENT/ADD/FORM/ADDFORM';
export const ADDREPLYID = 'ADD/REPLY/ID';

export function addComment(data) {
    return {type: ADDCOMMENT, data};
}

export function addReplyId(replyId) {
    return {type: ADDREPLYID, replyId};
}