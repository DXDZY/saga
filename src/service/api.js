let baseUrl='api';
if (process.env.NODE_ENV === 'production') {
    baseUrl='api'
}
//获取车辆详情
export const get_carDetail_url = `${baseUrl}/carDetail`;
