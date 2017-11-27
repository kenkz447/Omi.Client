import { ViewRoute } from 'shared/core'
import { PageUpdateComponent } from './Page'

export const AdminCMSPostUpdate: ViewRoute = {
    name: 'AMDIN_CMS_POST_Update',
    parent: 'AMDIN_CMS_POST',
    path: '/update/:id',
    component: PageUpdateComponent
}