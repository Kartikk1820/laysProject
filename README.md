
# Scheme Sellers

Welcome to the Scheme Sellers! This application is built using Flask and requires Python 3.10 or higher. Follow the instructions below to set up and run the project on your system.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
  - [macOS](#macos)
  - [Windows](#windows)
  - [Linux](#linux)
- [Running the Project](#running-the-project)
- [Operating the Project](#operating-the-project)
- [Admin Only Section](#Admin-Only-Section)

## Requirements

- Python 3.10+
- Flask
- Additional packages listed in `requirements.txt`

## Installation

### macOS

1. **Install Homebrew** (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Python 3.10**:
   ```bash
   brew install python@3.10
   ```

3. **Download the Project Flies**:
   Request the Files from the Admin

4. **Create a virtual environment**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

5. **Install the required packages**:
   ```bash
   pip install -r requirements.txt
   ```

### Windows

1. **Install Python 3.10** (download from [python.org](https://www.python.org/downloads/)).

2. **Download the Project Flies**:
   Request the Files from the Admin
3. **Create a virtual environment**:
   ```powershell
   python -m venv venv
   .\venv\Scripts\activate
   ```

4. **Install the required packages**:
   ```powershell
   pip install -r requirements.txt
   ```

### Linux

1. **Install Python 3.10** (using your package manager, e.g., for Ubuntu):
   ```bash
   sudo apt update
   sudo apt install python3.10 python3.10-venv python3.10-distutils
   ```

2. **Download the Project Flies**:
   Request the Files from the Admin

3. **Create a virtual environment**:
   ```bash
   python3.10 -m venv venv
   source venv/bin/activate
   ```

4. **Install the required packages**:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Project

1. Ensure your virtual environment is activated.
2. Run the Flask application:
   ```bash
   export FLASK_APP=app.py  # macOS/Linux
   set FLASK_APP=app.py     # Windows
   flask run
   ```
3. Open your web browser and go to `http://127.0.0.1:5000`.

## Operating the Project

- **Main Files**:
  - `app.py`: This is the main server file that houses all the routes for the web application.
  - `database.py`: This file contains functions for manipulating data within the project.
  - `database.db`: The SQLite database used to store data. You will see this file in your project directory.

- **Project Structure**:
  - **Static Folder**: Contains all static files (e.g., CSS, JavaScript, images).
  - **Templates Folder**: Contains all HTML files used for rendering the web pages.
  - **Pending Folder**: This folder holds screenshots of payments made to the UPI ID.

- **Configuration Files**:
  - `scheme.json`: Populate this file with the schemes you want to post on the webpage.
  - `data.json`: Contains the UPI ID used for receiving payments and houses admin credentials, which are created only once when the server boots up.

- **Wallet Updater**: 
  - The `wallet_updator` runs daily and updates the wallet amount. This is the code responsible for generating income for the users in the web application.

## Admin Only Section

### Managing User Payments

1. **User Recharge Process**:
   - When a user recharges, they fill out a form and make a payment to the UPI ID specified in `data.json`.
   - After making the payment, the user uploads a screenshot of the payment.

2. **Approving Payments**:
   - The admin can check pending payments by navigating to `/admin/pending_payments`.
   - Here, the admin will verify the payment against the uploaded screenshot.
   - Once verified, the admin can approve the payment. The amount will then be added to the user’s wallet, allowing them to use it for purchasing schemes.

### Managing User Withdrawals

1. **Withdrawal Request**:
   - When a user wants to withdraw money, they must fill out a withdrawal form.
   - This creates a request that appears in the `/admin/pending_payments` section.

2. **Approving Withdrawals**:
   - Admins will review withdrawal requests and must approve them to deduct the amount from the user’s wallet.
   - Next to the approve button, there is a “View Details” section that displays the user’s banking details, which are mandatory for withdrawals. No user is allowed to withdraw without entering their bank details.

### User Management

1. **Dashboard Access**:
   - Admins can access `/admin/dashboard`, where a list of all users is displayed.
   - Each user entry has an “Edit” button that allows the admin to modify user information as necessary. This functionality helps resolve any issues that may arise.

### Important Notes

- Ensure that all payment verifications and user data edits are handled securely and transparently.
- Regularly check for any pending payments and withdrawal requests to maintain user satisfaction and trust.

For any issues or concerns regarding admin functionalities, please refer to the documentation or contact support.
