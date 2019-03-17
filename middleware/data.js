/* eslint-disable no-console */
export default function({ req, store }) {
  if (process.server) {
    // console.log('req: ', req)
    // console.log('req.socket: ', req.socket)
    // https://github.com/nuxt/nuxt.js/issues/2914
    // const ip = req.connection.remoteAddress || req.socket.remoteAddress
    // store.commit('SET_IP', ip)
  }
  //   if (process.client) {
  //     localStorage.setItem('ip', store.getters.ip)
  //   }
}

// export default function ({ store, route, redirect }) {
//     store.commit('ADD_VISIT', route.path)
//   }
