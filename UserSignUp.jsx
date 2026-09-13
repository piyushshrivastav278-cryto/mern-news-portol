import React from 'react'

function UserSignUp() {
  return (
   <>
   <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>User Sign Up</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    body {\n      font-family: Arial, sans-serif;\n      background: #f4f6f9;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 100vh;\n    }\n    .signup-container {\n      background: #fff;\n      padding: 30px;\n      border-radius: 12px;\n      box-shadow: 0 4px 10px rgba(0,0,0,0.1);\n      width: 350px;\n    }\n    .signup-container h2 {\n      text-align: center;\n      margin-bottom: 20px;\n      color: #333;\n    }\n    .signup-container input {\n      width: 100%;\n      padding: 12px;\n      margin: 10px 0;\n      border: 1px solid #ccc;\n      border-radius: 8px;\n      font-size: 16px;\n    }\n    .signup-container button {\n      width: 100%;\n      padding: 12px;\n      background: #007bff;\n      border: none;\n      color: white;\n      font-size: 16px;\n      border-radius: 8px;\n      cursor: pointer;\n      margin-top: 10px;\n    }\n    .signup-container button:hover {\n      background: #0056b3;\n    }\n    .signup-container p {\n      text-align: center;\n      margin-top: 15px;\n    }\n    .signup-container a {\n      color: #007bff;\n      text-decoration: none;\n    }\n    .signup-container a:hover {\n      text-decoration: underline;\n    }\n  "
    }}
  />
  <div className="signup-container">
    <h2>User Sign Up</h2>
    <form action="/signup" method="POST">
      <input type="text" name="fullname" placeholder="Full Name" required="" />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required=""
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required=""
      />
      <input
        type="password"
        name="confirm_password"
        placeholder="Confirm Password"
        required=""
      />
      <button type="submit">Sign Up</button>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </form>
  </div>
</>

   </>
  )
}

export default UserSignUp
