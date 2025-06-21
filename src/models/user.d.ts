/**
 * UserType
 * 在 TypeScript 中，
 * 类型定义中的问号（?）表示该属性是可选的。
 * 也就是说，拥有问号的属性在对象中可以存在，也可以不存在。
 */
export type UserType = {
    id: number,
    username: string,
    userAccount: string,
    avatarUrl?: string,
    gender: string,
    profile?: string,
    phone: string,
    email: string,
    userStatus: number,
    userRole: number,
    planetCode: string,
    tags: string[],
    createTime: Date,
};