/**
 * Created by hades on 23/11/2016.
 */
module.exports=function (sequelize,DataTypes){
  var counttries = sequelize.define ('countries',{
      country_code:{
          type:DataTypes.STRING,
          primaryKey: true,
          unique:true,
          validate:{
              len:{
                  args:[0,2],
                  mes:'Loi nhap country code'
              }
          }
      },
      country_name:{
          type:DataTypes.STRING,
          unique:true
      }
  });
    return counttries;
};

