let baseUrl='';
if (process.env.NODE_ENV === 'production') {

}else{
    baseUrl="/api/"
}
// console.log(process.env.NODE_ENV);
//获取车辆详情信息
export const GET_POSTS_URL = `${baseUrl}detail.json`;
//获取用户信息
export const GET_USER_URL = 'https://jsonplaceholder.typicode.com/users';