const userProfile = {
  name: "Lowkey",
  email: "lokeshmanikantha@gmail.com",
  getInfo: function () {
    return `Hi I am ${this.name}, and my reactout to me at ${this.email}`;
  },
  updateEmail: function (newEmail) {
    this.email = newEmail;
  },
};

const cart = {
  items: ["iphone", "charger"],
  addItem: function (item) {
    this.items.push(item);
  },
  removeItem: function (item) {
    this.items = this.items.filter((cartItem) => cartItem !== item);
  },
  printItems: function () {
    console.log(this.items.toString());
  },
};

cart.printItems = cart.printItems.bind(cart);
cart.addItem("iphone2");

// setTimeout(cart.printItems, 3000);

const greetUser = function () {
  console.log(`Hey, my name is ${this.name} and i am ${this.age} years old.`);
};

const user1 = { name: "Alice", age: 30 };
const user2 = { name: "Bob", age: 25 };

greetUser.call(user1);
greetUser.apply(user2);

const btnHandler = {
  label: "Submit",
  onClick() {
    console.log(this.label);
  },
};
btnHandler.onClick = btnHandler.onClick.bind(btnHandler);

const counter = {
  count: 0,
  increment() {
    this.count++;
    return this;
  },
  decrement() {
    this.count--;
    return this;
  },
  print() {
    console.log(this.count);
    return this;
  },
};

counter.increment().decrement().increment().print();

const notificationManager = {
  notifications: [],
  nextId: 1,
  show(type = "info", message, delay = 5000) {
    const id = this.nextId++;
    const notification = {
      id,
      message,
      type,
      timer: setTimeout(() => {
        this.dismiss(id);
      }, delay),
    };
    this.notifications.push(notification);
    console.log(`Notification shown: id ${id} ${type} ${message}`);
    return id;
  },

  dismiss(id) {
    const idx = this.notifications.findIndex(
      (notification) => notification.id === id
    );

    if (idx !== -1) {
      clearTimeout(this.notifications[idx].timer);
      console.log(`Notification dismissed: id ${id}`);
      this.notifications.splice(idx, 1);
    }
  },

  update(id, newMessage) {
    const notification = this.notifications.find(
      (notification) => notification.id === id
    );
    if (notification) {
      notification.message = newMessage;
      console.log(`Notification updated: id ${id}, new message: ${newMessage}`);
    }
  },

  list() {
    console.log(
      "Current notifications:",
      this.notifications.map(({ id, type, message }) => ({ id, type, message }))
    );
  },
};

const id1 = notificationManager.show("Welcome!", "success", 3000);
const id2 = notificationManager.show("Error occurred.", "error", 7000);

setTimeout(() => {
  notificationManager.update(id1, "Welcome back!");
  notificationManager.list();
}, 1500);

setTimeout(() => {
  notificationManager.dismiss(id2);
  notificationManager.list();
}, 4000);


