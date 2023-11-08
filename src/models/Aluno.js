import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Nome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'E-mail já existe',
          },
          isEmail: {
            msg: 'E-mail inválido.',
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          isInt: {
            msg: 'Idade precisa ser um número válido.',
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          isFloat: {
            msg: 'Peso precisa ser um número válido.',
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          isFloat: {
            msg: 'Altura precisa ser um número válido.',
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'aluno_id' });
  }
}
