# MemeVerse

### It's a photo/gif sharing web application. It's an assignment of a company

#### To run this project, please do the following steps

1. create a .env file in root folder with the following code

```
APP_NAME=memeverse
MONGO_URI=YOUR_MONGODB_URL
PORT=5000
JWT_SECRET=ANYTHING
CLIENT_URL=http://localhost:3000
REACT_APP_API_URL=http://localhost:5000/api
```

2. then go the client folder and create a .env file with the following code
```
REACT_APP_API_URL=http://localhost:5000/api
```

3. then please do the following step
```
cd client
npm install
cd ..
npm install
npm run dev
```

4. your project will start on http://localhost:3000
