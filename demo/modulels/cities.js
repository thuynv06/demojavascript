/**
 * Created by hades on 23/11/2016.
 */
/**
 * Created by hades on 23/11/2016.
 */
module.exports=function (sequelize,DataTypes){
    var cities = sequelize.define ('cities',{
        cities_id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING

        },
        postal_code:{
            type:DataTypes.STRING,
            validate:{
                len:[0,9],
                mes:'Loi Nhap postal_code qua dai'
            }
        },
        country_code:{
            type:DataTypes.STRING,
            validate:{
                len:[0,2],
                mes:'Loi Nhap country_code qua dai'
            }
        }
    });
    return cities;
};
