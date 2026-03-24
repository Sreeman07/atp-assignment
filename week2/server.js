import exp from 'express'
const app=exp()
import { userApp } from "./APIs/userAPI.js"
import {productApp} from "./APIs/productAPI.js"
app.use(exp.json());
const port =4000;
app.listen(port, () => console.log(`server listening port ${port}...`))
function midldeware1(req, res, next) {
  console.log("middleware working");
  
}
app.use(midldeware1);
app.use('/user-API',userApp)
app.use('/product-API',productApp)


