import { ViewRoute } from 'shared/core'
import { PageCreateComponent } from './Page'

export const AdminCMSPostCreate: ViewRoute = {
    name: 'AMDIN_CMS_POST_CREATE',
    parent: 'AMDIN_CMS_POST',
    path: '/create',
    component: PageCreateComponent
}