/**
 * Created by hades on 23/11/2016.
 */
var db = require('./db');

db['countries']=db.import(__dirname+ '/modulels/countries');
db['cities']=db.import(__dirname+ '/modulels/cities');
db['venues']=db.import(__dirname+ '/modulels/venues');
db['events']=db.import(__dirname+ '/modulels/events');

db['countries'].hasMany(db['cities'],{foreignKey:'country_code'});
db['cities'].belongsTo(db['countries'],{foreignKey:'country_code'});


db['cities'].hasMany(db['venues'],{foreignKey:'city_id'});
db['venues'].belongsTo(db['cities'],{foreignKey:'city_id'});


db['venues'].hasMany(db['events'],{foreignKey:'venue_id'});
db['events'].belongsTo(db['venues'],{foreignKey:'venue_id'});



db.sync({force:true});