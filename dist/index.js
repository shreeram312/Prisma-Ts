"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(email, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield prisma.userInfo.findMany({
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                },
                where: {
                    lastName: lastName,
                },
            });
            console.log("User got from db:", res);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
function updateUser(id_1, _a) {
    return __awaiter(this, arguments, void 0, function* (id, { username }) {
        try {
            const res = yield prisma.userInfo.update({
                where: {
                    id,
                },
                data: {
                    email: username,
                },
            });
            console.log(res);
        }
        catch (e) {
            console.log(e);
        }
    });
}
const Up = {
    username: "suryakarna@gmail.com",
};
updateUser(19, Up);
