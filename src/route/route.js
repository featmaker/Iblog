import App from '../App'

const Home = resolve => require.ensure([], () => resolve(require('../pages/Home')), 'Home')

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }]
}]