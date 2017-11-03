export default function ({ store, error }) {
    if (!store.state.authUser) {
        error({
            message: 'For signed in users',
            statusCode: 403
        })
    }
}