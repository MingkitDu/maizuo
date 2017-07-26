function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_OPEN":
            return Object.assign({}, state, {
                head: {
                    open:!state.head.open,
                    titleList:state.head.titleList,
                    routerUrl:state.head.routerUrl,
                }
            })
        case "CHANGE_TITLE":
            return Object.assign({}, state, {
                title:action.title
            })
        default:
            return state
    }
}

export default reducer;