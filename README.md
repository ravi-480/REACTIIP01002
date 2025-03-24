# React Account Management Application

This is a React-based account management application that allows users to register, log in, view, and update their account details. It uses localStorage to store and retrieve user data, and it also supports profile picture uploads.

## Features

- **User Registration**: Users can create an account by providing their name, email, and password.
- **User Login**: Users can log in with their registered email and password.
- **Account Information**: Logged-in users can view their account information, including their name, email, and profile picture.
- **Profile Editing**: Users can edit their profile information (name, password, and profile picture).
- **Profile Picture Upload**: Users can upload a new profile picture.
- **LocalStorage Integration**: All user data is stored in the browser's localStorage, allowing persistent account information across sessions.
- **Password Confirmation**: During registration, users must confirm their password to prevent mismatches.
- **Routing**: The application uses React Router for navigating between pages.

## Tech Stack

- **Frontend**: React (with functional components and hooks), CSS for styling, Bootstrap for UI elements.
- **State Management**: React's useState and useEffect hooks.
- **Routing**: React Router DOM.
- **Storage**: Browser's localStorage.

## Pages

- **Register Page**: Allows new users to create an account. Basic form validation ensures that all fields are filled, passwords match, and the email is unique.
- **Login Page**: Allows existing users to log in. If the email is not registered or the password is incorrect, users are alerted.
- **Account Page**: Displays account details (name, email, profile picture). Users can enter edit mode to update their information.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ravi-480/react-account-management.git
   cd react-account-management
2. Install dependencies: npm install

3. Start Project: npm start


## Demo of the project
https://github.com/user-attachments/assets/e321f3d3-7873-4894-8f1c-fa5a72895931
https://www.transfernow.net/dl/20250211kqwc7KWj/mnlIIh8F












https://www.transfernow.net/dl/20250220OL6bdiyh/48Jeznr7

https://www.transfernow.net/dl/20250220MTQci7K8/Zn3V91o8














https://www.transfernow.net/dl/20250222WYWbqUmm/ayvmSo5q
https://www.transfernow.net/dl/20250222QwRlzDxd/jPZHQYpe




https://www.transfernow.net/dl/20250226gDEHU9Cp/lqm8FGgD



------------

[https://www.transfernow.net/dl/20250227wjpI6fOb/ZnQBp6qp](https://www.transfernow.net/dl/20250227pPE822Wx/ALxQsq4D)
https://www.transfernow.net/dl/20250227FQSRmxRe/4p4sOWOS

const handleNext = () => {
    const nextPage = page + 1;
    const start = nextPage * 10 - 10;
    const end = nextPage * 10;
    setPage(nextPage);
    setLimit(data.slice(start, end));
  };

  const handlePrev = () => {
    const prevPage = page - 1;
    const start = prevPage * 10 - 10;
    const end = prevPage * 10;
    setPage(prevPage);
    setLimit(data.slice(start, end));
  };
