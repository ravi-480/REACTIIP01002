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
[
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
](https://codesandbox.io/p/sandbox/react-test-forked-y8cpll?file=%2Fsrc%2Fpages%2Fpost.jsx)



📝 Project Title:
EventWise – Event Planning with Budget Management

📌 Project Definition
EventWise is a full-stack web application for creating and managing events with built-in budget tracking and vendor suggestions. Users should be able to create events with details such as name, date, budget, and guest list. The system should allow expense tracking against the defined budget, cost splitting (equal or custom), and progress visualization. Integration with the Yelp Fusion API should enable vendor search based on category, location, and budget range. RSVP tracking and email notifications must be supported.

🎉 Use Case Example
User creates a wedding event with a $5000 budget.
Adds guests and planned expenses like venue, catering, and decoration.
Splits costs with contributors (equal/custom).
Searches for vendors like caterers or decorators through Yelp API, filtered by budget and rating.
Sends RSVP emails to guests and tracks responses.
Views real-time expense vs. budget updates.
🧩 Core Features
1. 📅 Event Management
Create and manage events (name, date, description, location)
Add/edit/delete guest list
Track RSVP responses
Send email reminders to guests
2. 💸 Budget & Expense Tracking
Define total event budget
Add planned and actual expenses
Auto-split costs (equally or custom per user)
Track total spent and remaining budget
Show progress with budget vs. expenses (progress bar/chart)
3. 🏷 Vendor Search (Yelp API)
Search vendors by category (e.g., catering, decoration, venue)
Filter by location, price range, and rating
Display vendor data (name, reviews, contact, map link)
4. 📬 RSVP System
Send RSVP email invites
Track who has accepted or declined
Allow guests to leave notes or preferences (e.g., meal type)
📈 Optional Features (Post-Demo)
Cost settlement with payment integration (Stripe/PayPal)
Export event data to PDF or Excel
Group chat per event
Recurring events support
