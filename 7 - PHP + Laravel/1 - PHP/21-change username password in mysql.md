

# Changing MySQL Username & Password (via phpMyAdmin)

### Prerequisites
- MySQL server is running
- You have access to phpMyAdmin

---

### Steps

**1. Open the User Accounts panel**
In phpMyAdmin, click on **127.0.0.1** in the left server panel, then navigate to **User accounts** in the top menu.

**2. Select the user you want to edit**
You'll see a list of all existing MySQL users. For local development, look for:
- **Username:** root
- **Hostname:** localhost

Click **Edit privileges** next to that user.

**3. Update login credentials**
In the menu that opens, click the **Login Information** tab. Here you can update:
- **Username**
- **Password** (it's recommended to use the *SHA2* hashing method)

Click **Go** to save your changes.

---

> ⚠️ **Important:** After changing the root password, you'll need to update it anywhere it's referenced — such as in your app's database config file (e.g. `.env` or `config.php`) — otherwise your app will lose its database connection.
