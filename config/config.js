/*const config = {
env: process.env.NODE_ENV || 'development', 
port: process.env.PORT || 3000,
jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
mongoUri: process.env.MONGODB_URI ||
process.env.MONGO_HOST ||
'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
'/mernproject' 
}
export default config*/
//Testing Database "mongodb+srv://vdnnguyen94:SD8C4AGbbF2nrd3o@comp229-assignment2.v2haftn.mongodb.net/?retryWrites=true&w=majority"
//4HRfO37nIz76mB8g
//mongodb+srv://vdnnguyen94:<password>@marketplace.yzond4n.mongodb.net/?retryWrites=true&w=majority


const config = {
env: process.env.NODE_ENV || 'development', 
port: process.env.PORT || 3000,
jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
mongoUri: process.env.MONGODB_URI || "mongodb+srv://vdnnguyen94:4HRfO37nIz76mB8g@marketplace.yzond4n.mongodb.net/?retryWrites=true&w=majority"||
process.env.MONGO_HOST ||
'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
'/marketplace'
}
export default config
