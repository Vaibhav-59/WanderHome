# WanderHome
WanderHome is an Airbnb-inspired web application developed using Node.js, Express.js, EJS, and MongoDB. It is the part of a web development course I did. It allows users to search for accommodations, list properties and review the properties. there is no booking functionality implimented yet.
## Live Demo
A live demo of WanderHome can be accessed [here](https://wanderhome-qyoa.onrender.com/listings).
## Features
+ **Search Functionality**: Users can search for accommodations based on various criteria such as location, dates, and amenities.
+ **Category-Based Listing**: Accommodations are categorized for easy browsing and filtering.
+ **User Authentication**: Secure user authentication system ensures that only registered users can access certain features like listing properties and booking accommodations.
+ **CRUD Operations**: MongoDB and Mongoose are used for efficient CRUD (Create, Read, Update, Delete) operations via API endpoints.
+ **Server-Side Validation**: Joi library is integrated for server-side validation to ensure data schema.
+ **Server-Side Rendering**: EJS is used for rendering the page server-side and sending it to the user.
+ **Image Storage**: Cloudinary API is utilized for image storage, allowing users to upload images of their properties.
+ **Responsive Design**: The application is fully responsive, and well suited for mobile view too.
## Technologies Used
+ Node.js
+ Express.js
+ EJS (Embedded JavaScript)
+ MongoDB
+ Bootstrap
+ HTML
+ CSS
+ JavaScript
## Other Dependencies
+ Cloudainary
+ Connect-flash
+ dotenv
+ joi
+ method-override
+ multer
+ nodemon
+ passport
## Installation
To run WanderHome locally, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using npm install.
4. Set up your MongoDB Atlas cluster and obtain your connection string.
5. Create a .env file in the root directory and add your MongoDB Atlas connection string and Cloudinary API credentials. it should include: CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET, MAP_TOKEN, ATLASDB_URL and a SECRET (to encrypt passwords).
6. Run the application using node app.js. (make sure you are in project directory)
7. Access the application in your web browser at http://localhost:8000.
## Screenshots
![Screenshot 2025-01-30 073203](https://github.com/user-attachments/assets/66c8f3bf-666c-40bf-8143-312ca83d483c)
![Screenshot 2025-01-30 073529](https://github.com/user-attachments/assets/9b8a725b-0162-401f-be29-d93d06e837d6)
![Screenshot 2025-01-30 073545](https://github.com/user-attachments/assets/c51ee5cd-b8e8-4b88-ba38-faf06a1da66e)
![Screenshot 2025-01-30 073622](https://github.com/user-attachments/assets/57974ec3-3221-4e50-a3fd-787953f36398)
![Screenshot 2025-01-30 073637](https://github.com/user-attachments/assets/c3f890a8-93f6-4224-9b7f-fae358add2a5)
## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.



