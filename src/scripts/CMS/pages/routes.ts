import { ViewRoute } from 'shared/core'
import { PostRoutes } from './post'
// localhost:3000/admin/cms

const AdminCMS: ViewRoute = {
    name: 'AMDIN_CMS',
    path: '/admin/cms'
}

export const CMSRoutes = [
    AdminCMS,
    ...PostRoutes
]