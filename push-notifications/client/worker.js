console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
    const data = e.data.json();
    self.registration.showNotification(
        data.title, // title of the notification
        {
        body: "This is a Push notification from section.io. When we receive a push notification with a payload, the data is available directly on the event object. This data can be of any type, and you can access the data as a JSON result, a BLOB, a typed array, or raw text.", //the body of the push notification
        image: "https://pixabay.com/vectors/bell-notification-communication-1096280/",
        icon: "https://pixabay.com/vectors/bell-notification-communication-1096280/" // icon
        }
    );
});