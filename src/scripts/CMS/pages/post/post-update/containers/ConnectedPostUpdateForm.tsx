import { RequestCacheDelete } from '../../../../../shared/core/data/state'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { RequestSend } from 'shared/core'

import { DispatchProps, PostForm, StateProps } from '../../_shared'
import { CMSRootState } from '../../../../Types'
import { POST_API } from '../../../../api'

const mapStateToProps = (state: CMSRootState): StateProps => {
    return {
        initPost: state.data.getIn(['GET_POST_FOR_UPDATE', 'response']),
        submitResult: state.data.getIn(['UPDATE_POST', 'response', 'code'])
    }
}

const mapDispatchToProps = (dispatch): DispatchProps => {
    return {
        getPost: (postId) => {
            const action = RequestSend('GET_POST_FOR_UPDATE', {
                url: `${POST_API}${postId}`
            })
            dispatch(action)
        },
        onUpdate: (values) => {
            const action = RequestSend('UPDATE_POST', {
                url: POST_API,
                requestInit: {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: new Headers({
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    })
                }
            })
            dispatch(action)     
        },
        clearSubmitResult: () => {
            const action = RequestCacheDelete('UPDATE_POST')
            dispatch(action)     
        }
    }
}

export const ConnectedPostUpdateForm = withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm))