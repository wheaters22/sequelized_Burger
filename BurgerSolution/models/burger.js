module.exports = function(sequelize, DataTypes) {
  console.log(DataTypes);
        var Burger = sequelize.define("burgers", {
                burger_name: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                    validate: {
                        len: [1, 160]
                    }
                },
                devoured: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false,
                    validate: {
                        len: [1]
                    }
                },
                classMethods: {
                        associate: function(models) {
                            // An Author (foreignKey) is required or a Post can't be made
                            Burger.belongsTo(models.Customer, {
                                foreignKey: {
                                    allowNull: false
                                }
                            });
                        }
                    }
                });
            return Burger;
        };


        // var burger = {
        //   all: function(cb) {
        //     orm.all("burgers", function(res) {
        //       cb(res);
        //     });
        //   },
        //   create: function(name, cb) {
        //     orm.create("burgers", [
        //       "burger_name", "devoured"
        //     ], [
        //       name, false
        //     ], cb);
        //   },
        //   update: function(id, cb) {
        //     var condition = "id=" + id;
        //     orm.update("burgers", {
        //       devoured: true
        //     }, condition, cb);
        //   }
        // };

        // module.exports = burger;
