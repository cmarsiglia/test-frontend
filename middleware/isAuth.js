// import cookies from 'js-cookie';
export default function ({ app, store, error, redirect }) {
  const hasToken = !!app.$cookies.get('sesionID')
  if (!hasToken) {
    error({ errorCode: 503, message: 'No estás permitido para ver esto.' })
    return redirect('/login')
  }
}
