/**
 * Created by hades on 23/11/2016.
 */
module.exports=function (sequelize,DataTypes){
    var events = sequelize.define ('events',{
        event_id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        title:{
            type:DataTypes.STRING

        },
        starts:{
            type:DataTypes.DATE
        },
        ends:{
            type:DataTypes.DATE
        },
        venue_id:{
            type:DataTypes.INTEGER
        }


    });
    return events;
};