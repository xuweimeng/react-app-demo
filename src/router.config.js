export default [
	// {
	// 	name: '登录',
	// 	path: '/login',
	// 	component: './containers/login/index.js'
	// },
	{
		name: 'dashboard',
		path: '/dashboard',
	},
	{
		name: '表单',
		path: '/form',
		children: [
			{
				name: '基本表单',
				path: '/form/basic-form',
			},
			{
				name: '进阶表单',
				path: '/form/dd-form',
			},
		]
	}
]