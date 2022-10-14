import { combineReducers } from 'redux'
import { reducer as DonghuaTuijianReducer } from
    '@/pages/Donghua/Tuijian/store'
import { reducer as ShouyeReducer } from
    '@/pages/Shouye/store'
// import { reducer as SpaceReducer } from
//     '@/pages/Space/store'
import { reducer as CommentsReducer } from
    '@/pages/VideoDetail/CommentsPart/store'
import { reducer as RecommendPart } from
    '@/pages/VideoDetail/RecommendPart/store'
// import { reducer as SearchReducer } from
//     '@/pages/Search/store'
export default combineReducers({
    donghuatuijian: DonghuaTuijianReducer,
    shouye: ShouyeReducer,
    // space: SpaceReducer,
    recommend: RecommendPart,
    comments: CommentsReducer,
    // search: SearchReducer
})