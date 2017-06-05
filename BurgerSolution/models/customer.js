module.exports = function(sequelize, DataTypes) {
	
	var Customer = sequelize.define("customer", {
		name: {
			type: DataTypes.STRING,
			allowNull: false, 
			validate: {
	          len: [1, 160]
	        }
		},
		{
			classMethods: {
				associate: function(models) {
					Customer.hasMany(models.Burger)
				}
			}
		}
	});
	return Customer;
};