import { ViewRoute } from 'shared/core'
import { AdminCMSPostIndex } from './post-index'
import { AdminCMSPostCreate } from './post-create'
import { AdminCMSPostUpdate } from './post-update'

// localhost:3000/admin/cms/post

const AdminCMSPost: ViewRoute = {
    name: 'AMDIN_CMS_POST',
    path: '/post',
    parent: 'AMDIN_CMS',
}

export const PostRoutes = [
    AdminCMSPost,
    AdminCMSPostIndex,
    AdminCMSPostCreate,
    AdminCMSPostUpdate
]