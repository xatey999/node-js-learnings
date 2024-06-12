const http = require('http');

const loginForm = `
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            padding: 40px;
            max-width: 400px;
            width: 100%;
            text-align: center;
        }
        h1 {
            color: #fff;
            margin-bottom: 20px;
            font-size: 24px;
        }
        .form-group {
            margin-bottom: 20px;
            text-align: left;
        }
        label {
            display: block;
            margin-bottom: 5px;
            color: #fff;
        }
        input {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            box-sizing: border-box;
            background: rgba(255, 255, 255, 0.2);
            color: #fff;
        }
        input::placeholder {
            color: #ddd;
        }
        button {
            width: 100%;
            padding: 10px;
            background: rgba(0, 123, 255, 0.8);
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        button:hover {
            background: rgba(0, 123, 255, 1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Login Form</h1>
        <form action="/login" method="post">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required>
            </div>
            <div class="form-group">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</body>
</html>
`;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(loginForm);
    res.end();
}).listen(4500, () => {
    console.log('Server is running at http://localhost:4500');
});
