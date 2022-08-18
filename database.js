const {createPool }=require('mysql');
const pool=createPool({
  host:"localhost",
  user:"root",
  password:"root@@@12345",
  database:"db",
  connectionLimit:10
});
pool.query('select glass.glass_name,glass.price,glass.discount,glass.rating,category.category_name from glass inner join category on glass.category_id=category.category_id;',(err,result,fields)=>{
  if(err){
    return console.log(err);
  }
  // console.log('if ane prev it is here', prev);
  return console.log('the result is', result);
});
module.exports = pool;
