# 📝 Google Docs Clone

A **Google Docs Clone** built with **React**, **Quill.js**, and **Socket.IO**, enabling real-time collaborative text editing with multiple users.

![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![Quill.js](https://img.shields.io/badge/Quill.js-333333?style=flat&logo=quill&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-Black?style=flat&logo=socket.io)
![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248.svg?&style=flat&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%2343853D.svg?style=flat&logo=node.js&logoColor=white)

## ℹ️ About

This **Google Docs Clone** allows multiple users to collaboratively edit documents in real time. It’s built using **React** for the frontend, **Quill.js** for the rich text editor, and **Socket.IO** for real-time communication. Documents are saved in a **MongoDB** database, allowing users to access their work anytime.

## 🚀 Features

- 📝 **Real-time collaboration**: Multiple users can edit the same document simultaneously.
- 📄 **Rich Text Editor**: Leverages **Quill.js** for full text editing capabilities.
- 🔄 **Auto-save functionality**: Documents are automatically saved every few seconds.
- 🌐 **WebSocket integration**: Instant updates using **Socket.IO**.
- 🗃️ **Persistent storage**: Documents are stored in **MongoDB** for future access.

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/DikshitaDas/Google-Doc-Clone.git
cd Google-Doc-Clone
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set up MongoDB and Environment Variables
Create a `.env` file in the root directory with the following content:
```bash
MONGO_URI=mongodb://localhost:27017/googleDocCloneDB
PORT=5000
```

### 4. Run the Application
To start the application, run:
```bash
npm start
```
The app will be available at `http://localhost:3000`.

## 🛠 Technologies Used

| Technology   | Version |
|--------------|------|
| **React**    | ![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) |
| **Quill.js** | ![Quill.js](https://img.shields.io/badge/Quill.js-333333?style=flat&logo=quill&logoColor=white) |
| **Socket.IO**| ![Socket.IO](https://img.shields.io/badge/Socket.IO-Black?style=flat&logo=socket.io) |
| **Node.js**  | ![Node.js](https://img.shields.io/badge/Node.js-%2343853D.svg?style=flat&logo=node.js&logoColor=white) |
| **MongoDB**  | ![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248.svg?&style=flat&logo=mongodb&logoColor=white) |

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository 🍴
2. Create a new branch (`git checkout -b feature/amazing-feature`) 🚧
3. Commit your changes (`git commit -m 'Add a new feature'`) 📝
4. Push to the branch (`git push origin feature/amazing-feature`) 📤
5. Open a pull request 📬

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details. 📃
