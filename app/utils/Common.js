//@flow

export const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))

export const randomFromArray = (arr: Array<any>) => arr[Math.floor(Math.random() * arr.length)]
