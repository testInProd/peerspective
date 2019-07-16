const ADD_ISSUE = 'ADD_ISSUE';

export const addIssue = text => ({
    type: ADD_ISSUE,
    payload: text,
});
