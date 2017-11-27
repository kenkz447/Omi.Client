import * as React from 'react'
import { ConnectedPostUpdateForm } from './containers/ConnectedPostUpdateForm'
export class PageUpdateComponent extends React.Component {
    render() {
        return (
            <div>
                <div>Form</div>
                <ConnectedPostUpdateForm/>
            </div>
        )
    }
}