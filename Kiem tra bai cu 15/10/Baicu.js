const firebaseConfig = {
    apiKey: "AIzaSyCvjCcg_t6VHOTyGS2FC5-jezeGgtxyMhg",
    authDomain: "study-ath.firebaseapp.com",
    projectId: "study-ath",
    storageBucket: "study-ath.appspot.com",
    messagingSenderId: "572582134751",
    appId: "1:572582134751:web:40f7231d83420038c83a6a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Firebase Realtime Database reference
const database = firebase.database();

// Handle form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = todoInput.value;
    if (todoText.trim() !== '') {
        // Add todo to the database
        database.ref('todos').push({
            text: todoText,
            completed: false
        });
        todoInput.value = '';
    }
});

// Listen for changes in the database
database.ref('todos').on('value', function(snapshot) {
    todoList.innerHTML = ''; // Clear the list
    snapshot.forEach(function(childSnapshot) {
        const todo = childSnapshot.val();
        const todoKey = childSnapshot.key;
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <span>${todo.text}</span>
            <button onclick="toggleTodo('${todoKey}', ${todo.completed})">
                ${todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onclick="deleteTodo('${todoKey}')">Delete</button>
        `;
        todoList.appendChild(todoItem);
    });
});

// Toggle todo completion status
function toggleTodo(todoKey, completed) {
    database.ref(`todos/${todoKey}`).update({
        completed: !completed
    });
}

// Delete todo
function deleteTodo(todoKey) {
    database.ref(`todos/${todoKey}`).remove();
}