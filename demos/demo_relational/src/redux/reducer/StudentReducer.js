const studentReducer = (students = [], action) => {
    switch (action.type) {
        case "ADD_STUDENT":
            const temp = [...students, action.payload]
            return temp
        case "REMOVE_STUDENT":
    //         ....
        case "GET_ALL_STUDENT":
            return action.payload

        default:
            return students;
    }
}

export default studentReducer;