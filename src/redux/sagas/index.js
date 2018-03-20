
import watchGetPosts from './watchGetPosts';
import watchGetUser from './watchGetUser';
// root saga
export default function* rootSaga() {
    yield [
        watchGetUser(),
        watchGetPosts(),
    ];
}