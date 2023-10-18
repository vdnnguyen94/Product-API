import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import Template from './../template.js';
import userRoutes from './routes/user.routes.js';

//New routes for products and category
import productRoutes from './routes/product.routes.js'; 
import categoryRoutes from './routes/category.routes.js'; 
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// Define the welcome message as the default response for the root URL
app.get('/', (req, res) => {
  res.status(200).json({ message: "Welcome to DressStore Application" });
});

// Other routes and middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', userRoutes);
// Add other middleware and routes as needed
app.use('/', productRoutes); 
app.use('/', categoryRoutes);
export default app;
