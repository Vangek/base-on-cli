export const menuList = [
  // BASE-ON-CLI
  {
    path: '/audit-unit',
    component: () => import('@/layout'),
    children: [
      {
        path: 'list',
        component: () => import('@/views/audit-unit/index'),
        name: 'AuditUnit',
        meta: { title: 'BASE-ON-CLI', icon: 'OfficeBuilding', affix: true ,isMenu: true}
      },
    ]
  },
  // 账户管理
  {
    path: '/account',
    component: () => import('@/layout'),
    children: [
      {
        path: 'list',
        component: () => import('@/views/account/index'),
        name: 'Account',
        meta: { title: '账户管理', icon: 'User', affix: true ,isMenu: true}
      },
    ]
  },
  // 项目管理
  {
    path: '/project',
    component: () => import('@/layout'),
    children: [
      {
        path: 'list',
        component: () => import('@/views/project/index'),
        name: 'Project',
        meta: { title: '项目管理', icon: 'FolderOpened', affix: true ,isMenu: true}
      },
    ]
  },
  // 知识管理
  {
    path: '/knowledge',
    component: () => import('@/layout'),
    children: [
      {
        path: 'list',
        component: () => import('@/views/knowledge/index'),
        name: 'Knowledge',
        meta: { title: '知识管理', icon: 'Document', affix: true ,isMenu: true}
      },
    ]
  },
  // 数据管理
  {
    path: '/data',
    component: () => import('@/layout'),
    children: [
      {
        path: 'list',
        component: () => import('@/views/data/index'),
        name: 'Data',
        meta: { title: '数据管理', icon: 'DataLine', affix: true ,isMenu: true}
      },
    ]
  },
  //  软件管理
  {
    path: '/software',
    component: () => import('@/layout'),
    children: [
      {
        path: 'list',
        component: () => import('@/views/software/index'),
        name: 'SoftwareManagement',
        meta: { title: '软件管理', icon: 'Monitor', affix: true ,isMenu: true}
      },
    ]
  },
 
]

const joinPath = (basePath, subPath) => {
  if (subPath.startsWith('/')) {
    return subPath
  }
  return `${basePath}/${subPath}`.replace(/\/+/g, '/')
}


export const sideMenuList = menuList.flatMap((route) => {
  const children = route.children || []
  return children
    .filter((child) => child.meta?.isMenu)
    .map((child) => ({
      path: joinPath(route.path, child.path),
      name: child.name,
      meta: child.meta
    }))
})