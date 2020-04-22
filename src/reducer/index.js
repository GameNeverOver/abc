export default function filmList (state = {filmList: []},action) {
    console.log( action,state,'123')
    const { payload, type} = action;
    switch (type) {
        case 'RANK':
            return {...state, filmList: [...payload]};
        default:
            return state
    }
}

// https://www.jianshu.com/p/541202faa65e
