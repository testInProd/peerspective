import {addIssue} from './actions.js';

const initialState = {
    text: []
}

export const addIssueReducer = (state = initialState, action) => {
    switch (action.type) {
        case addIssue.ADD_ISSUE: {

          return state;
        }
    }
}
