import React, { useEffect, useState, memo } from 'react'
import { connect } from 'react-redux'
import { ListWrapper } from './style'
import CommentItem from '../../../components/CommentItem'
import { getCommentsListRequest } from '../../../api/request'
import { getCommentList, changeDianzan } from './store/actionCreators'
import { List } from 'antd-mobile'



const CommentsPart = (props) => {
  const { commentList } = props;
  const { getCommentListDispatch, setDianzanDispatch } = props;
  // const [list = [], setList] = useState([])

  const ChangeDianzan = (id) => {
    setDianzanDispatch(id)
  }

  useEffect(() => {
    getCommentListDispatch();
  }, [])

  // useEffect(() => {
  //   setList(commentList)
  // }, [commentList])

  return (
    <ListWrapper>
      <div className="list">
        <ul>
          {
            commentList.map(comment => {
              return (
                <CommentItem
                  comment={comment}
                  key={comment.rpid}
                  ChangeDianzan={ChangeDianzan}
                />
              )
            })
          }
        </ul>
      </div>
    </ListWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    commentList: state.comments.commentList,
    idtest: state.comments.idtest,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCommentListDispatch() {
      dispatch(getCommentList())
    },
    setDianzanDispatch(id) {
      dispatch(changeDianzan(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(CommentsPart))