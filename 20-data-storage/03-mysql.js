#!/usr/bin/node

const mysql = require('mysql');

const con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'gsb19980130',
  database:'test'
});

con.connect();

//操作数据库的代码

//
const sql = 'select * from books where book_id=?';
//?是占位符，有几个问号，下面就对应几个参数
con.query(sql,[1],function(err,result){
if(err){
  console.log(err);
  process.exit(100);
}else{
console.log(result);
}
});


/*插
const sql = 'insert into books(book_id,title,status) value(?,?,?)';

con.query(sql,[2,'Node.js 实战',2],function(err,result){
  if(err){
    console.log(err);
    process.exit(100);
  }else{
    console.log(result);
  }
});
*/

/*改
const sql = 'update books set title = ? where book_id=?';
con.query(sql,['Mysql',2],function(err,result){
  if(err){
        console.log(err);
         process.exit(100);
              
  }else{
        console.log(result);        
  }
})
*/

//const sql = 'delete from books wherer book_id=?';
//con.query(sql,[2],function(err, result){
  //if(err) {
    //    console.error(err.message);
      //  process.exit(1);       
 // }
   // console.log(result);
//});
//con.end();
//释放连接

