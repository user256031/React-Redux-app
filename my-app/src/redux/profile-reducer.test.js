import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'This is my first post', likesCount: 25},
        {id: 2, message: 'Hi, how are you', likesCount: 30},
        {id: 3, message: 'I am fine thanks)are you?', likesCount: 35},
        {id: 4, message: 'Vsux', likesCount: 35}
    ],
}

test('Length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("JS samurai");
    //2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

it('Message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator("JS samurai");
    //2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts[4].message).toBe("JS samurai");
});

it('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1);
    //2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    //1. test data
    let action = deletePost(1000);
    //2. action
    let newState = profileReducer(state,action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

