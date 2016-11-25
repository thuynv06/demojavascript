/**
 * Created by hades on 23/11/2016.
 */
module.exports=function (sequelize,DataTypes){
    var venues = sequelize.define ('venues',{
        venue_id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true

        },
        name:{
            type:DataTypes.STRING
        },
        type:{
            type:DataTypes.STRING,
            defaultValue:'public',
            validate:{
                len:[0,7],
                isIn:{
                    args:[['public','private']]
                }
            }
        },
        city_id:{
            type:DataTypes.INTEGER
        }
    });
    return venues;
};
