
import watchGetPosts from './watchGetPosts';
import watchGetUser from './watchGetUser';
import watchGetCarDetail from './watchGetCarDetail';
// root saga
export default function* rootSaga() {
    yield [
        watchGetUser(),
        watchGetPosts(),
        watchGetCarDetail(),
    ];
}