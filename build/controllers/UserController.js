"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = [
    { id: 1,
        nama: "farhan ammar",
        role: "backend developer"
    },
    { id: 2,
        nama: "ging freeces",
        role: "fulllstack develope"
    },
    { id: 3,
        nama: "farhan ammar",
        role: "backend developer"
    },
];
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.read = function (req, res) {
        return res.json(data);
    };
    UserController.prototype.index = function (req, res) {
        return res.json(data);
    };
    UserController.prototype.create = function (req, res) {
        var _a = req.body, nama = _a.nama, role = _a.role, id = _a.id;
        var data2 = data.push({
            id: id,
            nama: nama,
            role: role
        });
        return res.send({
            status: "sukses",
            data: data2
        });
    };
    UserController.prototype.update = function (req, res) {
        var id = req.params.id;
        var name = req.body.name;
        var updateData = data.find(function (dt) { return dt.id == id; });
        updateData.nama = name;
        return res.send(updateData);
    };
    UserController.prototype.delete = function (req, res) {
        var id = req.params.id;
        var deletes = data.filter(function (dt) { return dt.id != id; });
        return res.send(deletes);
    };
    return UserController;
}());
exports.default = new UserController();
