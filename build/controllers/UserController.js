"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = [
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
class UserController {
    read(req, res) {
        return res.json(data);
    }
    index(req, res) {
        return res.json(data);
    }
    create(req, res) {
        const { nama, role, id } = req.body;
        let data2 = data.push({
            id,
            nama,
            role
        });
        return res.send({
            status: "sukses",
            data: data2
        });
    }
    update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        let updateData = data.find(dt => dt.id == id);
        updateData.nama = name;
        return res.send(updateData);
    }
    delete(req, res) {
        const { id } = req.params;
        let deletes = data.filter(dt => dt.id != id);
        return res.send(deletes);
    }
}
exports.default = new UserController();
