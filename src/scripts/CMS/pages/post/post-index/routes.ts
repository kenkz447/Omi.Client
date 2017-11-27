import { ViewRoute } from 'shared/core'
import { PageIndexComponent } from './Page'

export const AdminCMSPostIndex: ViewRoute = {
    name: 'AMDIN_CMS_POST_INDEX',
    parent: 'AMDIN_CMS_POST',
    component: PageIndexComponent,
    exact: true    
}