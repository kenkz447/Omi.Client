import { autobind } from 'core-decorators'
import * as React from 'react'
import { Field, reduxForm } from 'redux-form'

import { PostViewModel } from '../../../../website/Types'
import ReduxPostForm from './ReduxPostForm'

export interface StateProps {
    initPost?: PostViewModel
    submitResult?: string
}

export interface DispatchProps {
    getPost: (postId: number) => void
    onUpdate: (values: PostViewModel) => void
    clearSubmitResult: () => void
}

interface OwnProps {
    match?: any
}

export class PostForm extends React.Component<OwnProps & StateProps & DispatchProps> {
    componentWillMount() {
        const id = this.props.match.params.id
        id && this.props.getPost(+id)
    }

    componentWillReceiveProps(nextProps: StateProps) {
        if (nextProps.submitResult === 'SUCCEEDED') {
            console.log('Succeeded!')
            this.props.clearSubmitResult()
        }
    }

    render() {
        return (<ReduxPostForm onSubmit={this.props.onUpdate}/>)
    }
}