export function manageFriends(state= { friends:[] }, action){
    switch (action.type){
        
        case "ADD_FRIEND":
            return  {...state, friends: [...state.friends, action.friend]}
        
        case "REMOVE_FRIEND":
            const friendToRemove = state.friends.findIndex(friend => friend.id === action.id)
            const updatedFriends = [
                ...state.friends.slice(0, friendToRemove), 
                ...state.friends.slice(friendToRemove + 1)
                ]
            return {...state, friends: updatedFriends}
        
        default:
            return state;
    }
}


// export function managePresents(state= { numberOfPresents: 0 }, action){
//     switch (action.type){
//         case "INCREASE":
//         return {numberOfPresents: state.numberOfPresents + 1}
//     default:
//         return state;
//     }
// }