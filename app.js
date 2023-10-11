import Koa from 'koa';
import Router from 'koa-router';
import cors from 'koa2-cors'


const app = new Koa();
const router = new Router();

app.use(cors())

//#region 
// app.use(async (ctx, next) => {
//   ctx.body = 'Hello World';
//   // next();
// })

// app.use(async (ctx, next) => {
//   const responseData = {
//     errno: 0,
//     data: [
//       {
//         name: "John",
//         age: 17,
//         gender: "male"
//       },
//       {
//         name: "Tom",
//         age: 17,
//         gender: "male"
//       },
//       {
//         name: "Lucy",
//         age: 16,
//         gender: "female"
//       }
//     ]
//   };

//   // 设置响应Content-Type为application/json
//   ctx.type = 'application/json';

//   // 将JSON数据作为字符串赋值给ctx.body
//   // ctx.body = responseData;

//   next();
// })
//#endregion

const responseData = {
  errno: 0,
  data: [
    {
      name: "John",
      age: 17,
      gender: "male"
    },
    {
      name: "Tom",
      age: 17,
      gender: "male"
    },
    {
      name: "Lucy",
      age: 16,
      gender: "female"
    }
  ]
};

router.get('/', (ctx) => ctx.body = responseData)

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => console.log('Server is running on http://localhost:3000'))