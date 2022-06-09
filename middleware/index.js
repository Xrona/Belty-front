export default function ({ route, redirect }) {
  if (route?.fullPath === '/') {
    redirect('/catalog')
  }

  if (
    route?.fullPath === '/profile/order' ||
    route?.fullPath === '/profile/order/'
  ) {
    redirect('/profile/order/active')
  }

  if (route?.fullPath === '/profile' || route?.fullPath === '/profile/') {
    redirect('/profile/cart')
  }
}
