import { Response } from "express";


class LogoutUserService {
    execute(res: Response) {
        res.clearCookie('refreshtoken', {path: '/refresh'})
        res.clearCookie('aux', {path: '/'})
    }
}

export { LogoutUserService }