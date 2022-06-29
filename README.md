# Auth Site

This is a project that demonstrates how to do JWT authentication using Django and React served by an Express server.

The json web token credentials in this project are stored with cookies that have the httpOnly flag set to true to prevent JavaScript on the browser from accessing the values.

To test the project, simply:

- clone the repository
- in the backend folder, create a virtual environment with: python3 -m venv venv
- activate the virtual environment: source venv/bin/activate (MacOS), .\venv\Scripts\activate.bat (Windows)
- then install the python packages: pip install -r requirements.txt
- migrate to the Sqlite3 database: python manage.py migrate
- run the server: python manage.py runserver
- in the frontend/client folder, run: npm install
- in the frontend/client folder, run: npm build
- in the frontend folder, run: npm install
- in the frontend folder, run: npm start
- in the browser navigate to (Production): http://localhost:5000
- optionally you can also navigate into fronend/client, then run: npm start
  - then from there in the browser navigate to (Development): http://localhost:3000
