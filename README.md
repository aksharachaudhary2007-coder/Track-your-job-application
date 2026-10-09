# Job Application Tracker 💼

A simple Job Application Tracker built using Node.js, Express.js, EJS, and CSS. This project helps users manage their job and internship applications in one place.

## 🚀 Features

* View all job applications
* Add a new job application
* View details of a particular application
* Edit existing application details
* Update application status
* Delete job applications
* Responsive and clean user interface

## 🛠️ Technologies Used

* Node.js
* Express.js
* EJS
* HTML5
* CSS3
* UUID
* Method-Override

## 📂 Project Structure

```text
job-application-tracker/
├── index.js
├── package.json
├── package-lock.json
├── public/
│   └── style.css
└── views/
    ├── index.ejs
    ├── new.ejs
    ├── show.ejs
    └── edit.ejs
```

## ⚙️ Installation and Setup

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Open the project folder:

   ```bash
   cd job-application-tracker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node index.js
   ```

5. Open your browser and visit:

   `http://localhost:3000/jobs`

## 📌 Current Limitation

Job application data is stored in an in-memory array. Data added or modified during a session will reset when the server restarts. Database integration can be added in the future.

## 📚 Learning Outcomes

Through this project, I practiced:

* Building routes with Express.js
* Rendering dynamic pages using EJS
* Handling GET and POST requests
* Implementing CRUD operations
* Using UUIDs for unique job IDs
* Handling PATCH and DELETE requests with method-override
* Serving static CSS files

## 👩‍💻 Author

**Akshara**

B.Tech CSE Student | Aspiring Software Developer

---

⭐ This project is part of my web development learning journey.
