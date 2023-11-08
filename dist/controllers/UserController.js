"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      const { nome, email } = novoUser;
      return res.json({ nome, email });
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const users = await _User2.default.findByPk(req.params.id);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['ID Não enviado.'],
        });
      }

      const novosdados = await user.update(req.body);
      const { id, nome, email } = novosdados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['ID Não enviado.'],
        });
      }

      await user.destroy();
      return res.json({ mgs: ['Usuário Apagado com Sucesso!'] });
    } catch (e) {
      return res.status(400).json({
        erros: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
