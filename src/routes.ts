import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { RefreshTokenController } from "./controllers/RefreshTokenController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";



const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();
const refreshTokenController = new RefreshTokenController();
const listUserController = new ListUserController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.post("/refresh", refreshTokenController.handle);

router.get("/users/compliments/send/:username",   listUserSendComplimentsController.handle);
router.get("/users/compliments/receive/:username", listUserReceiveComplimentsController.handle);
router.get("/tags",  listTagsController.handle);
router.get("/users", listUsersController.handle);
router.get("/users/:username", listUserController.handle)

export { router }