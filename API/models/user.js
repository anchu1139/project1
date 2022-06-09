module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            name: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: "full_name cannot be empty"
                    }
                }
            },
            phone_number: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: "phone cannot be empty"

                    }
                }
            },
            email: {
                type: DataTypes.STRING,
                unique: {
                    args: true,
                    msg: 'Oops. Looks like you already have an account with this email address. Please try to login.',
                    fields: [sequelize.fn('lower', sequelize.col('email'))]
                },
                validate: {
                    isEmail: {
                        args: true,
                        msg: 'The email you entered is invalid'
                    }
                }
            },
            password: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        args: true,
                        msg: "password cannot be empty"
                    }

                }
            },
          
        }
    );
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};
