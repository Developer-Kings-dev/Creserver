# Owner and Car Management API
This project is a backend API for managing car owners and their vehicles. It is built using Node.js, Express, and MongoDB and follows a RESTful API design pattern. The API supports essential CRUD operations for owners and cars, along with secure authentication using JWT.

# Features
Owner Management: Create, update, view, and delete owner records. <br>
Car Management: Add new cars, view car details, update car information, and remove cars. <br>
Authentication: Login functionality using JWT for secure access. <br>
Error Handling: Handles errors gracefully with custom error messages. <br>
RESTful API: Clean and structured endpoint design. <br>

# Technology Stack
Node.js: Backend runtime environment. <br>
Express: Web framework for building API endpoints. <br>
MongoDB: NoSQL database for persisting owner and car data. <br>
JWT (jsonwebtoken): Authentication and secure access. <br>
Mongoose: MongoDB object modeling for Node.js. <br> 
Bcrypt: For securely hashing passwords. <br>

# API Endpoints
Owner Endpoints <br>
POST /owners - Create a new owner. <br>
POST /owners/login - Login an owner and generate a JWT token. <br>
GET /owners - Retrieve all owners. <br>
GET /owners/detail - Retrieve detailed information about a specific owner. <br>
PUT /owners/{ownerId} - Fully update an owner's details. <br>
PATCH /owners/{ownerId} - Partially update an owner's details. <br>
DELETE /owners/{ownerId} - Delete an owner. <br>

Car Endpoints <br>
POST /cars - Create a new car. <br>
GET /cars - Retrieve all cars. <br>
GET /cars/{carId} - Retrieve a specific car's details. <br>
PUT /cars/{carId} - Update car information. <br>
DELETE /cars/{carId} - Delete a car. <br>

# Setup and Usage
Clone the repository:

bash or terminal <br>
Copy code <br>
git clone https://github.com/yourusername/yourprojectname.git <br>

Install dependencies: <br>
bash or terminal <br>
Copy code; <br>
npm install <br>

Create a .env file in the root directory and configure the following environment variables: <br>
Add the variables below to .env file; <br>
DB_URI=mongodb://localhost:27017/techyjauntcars <br>
PORT=4500 <br>
JWT_SECRET=your_jwt_secret_here <br>

# Run the server:
bash or teminal <br>
Copy code <br>
npm start <br> 
The API will now be available at http://localhost:4500. <br>

# Dependencies
express: Web framework for Node.js. <br> 
jsonwebtoken: For generating and verifying JWTs. <br> 
mongoose: MongoDB object modeling. <br>
bcrypt: For password hashing and salting. <br> 
dotenv: Loads environment variables from a .env file. <br> 
body-parser: Middleware for parsing request bodies. <br> 
express-async-handler: Simplifies error handling for async functions. <br>

# API Testing with Insomnia
To test the API, you can import the provided Insomnia workspace and test the endpoints directly. <br>
Download the insomnia/api-requests.json file from this repository. <br>
Open Insomnia and go to Application Menu > Import/Export > Import Data. <br> 
Select the downloaded api-requests.json file to load the API requests for this project. <br>

# License
This project is licensed under the MIT License.

