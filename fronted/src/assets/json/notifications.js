import { Avatar_02, Avatar_03, Avatar_06, Avatar_13, Avatar_17 } from "../../Routes/ImagePath";

// Create an object and assign it to a variable
const notificationsData = {
  notifications: [
    {
      id: 1,
      image: Avatar_02,
      // name: "Nicole's birthday",
      // contents: "added new task",
      link: '/departments',
      contents_2: "Nicole's birthday is comming soon. Send her a gift!",
      time: "4 mins ago",
    },
    {
      id: 2,
      image: Avatar_03,
      // name: "Tarah Shropshire",
      // contents: "changed the task name",
      link: "/task-board",
      contents_2: "Tomorrow is the international pizza day. View your options of spoling your team!",
      time: "6 mins ago",
    },
    {
      id: 3,
      image: Avatar_06,
      // name: " Misty Tison",
      // contents: "added",
      link: "/low-importance-notification",
      contents_2:
        "Ben's wife is about to give birth to a new baby! You can help him prepare for the event",
      time: "8 mins ago",
    },
    {
      id: 4,
      image: Avatar_06,
      // name: " Misty Tison",
      // contents: "added",
      link: "/departments",
      contents_2:
        "Note! A meeting was arranged with Nicole when she is at home",
      time: "8 mins ago",

    }
  ],
};

// Export the variable as the default export
export default notificationsData;