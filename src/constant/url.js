let baseUrl='';
if (process.env.NODE_ENV === 'production') {
    baseUrl='https://wwww.hao123.com'
}
console.log(process.env.NODE_ENV);
//获取车辆详情信息
export const GET_POSTS_URL = `${baseUrl}detail.json`;
//获取用户信息
export const GET_USER_URL = '/users';
//获取车辆详情
export const get_carDetail_url = `${baseUrl}/carDetail`;
