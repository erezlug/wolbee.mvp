const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.static("fronted"));
const cors = require("cors")
app.use(cors())
const path = require('path');
// התחברות לבסיס הנתונים
const dbURL = "mongodb+srv://benaloni230:asdf123123@cluster0.3kuoij5.mongodb.net/wolbeedb'";
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((error) => console.error("Error connecting to DB:", error));

const corsOptions = {
  origin: 'http://localhost:3000' // Replace this with your frontend URL
};

app.use(cors(corsOptions));


const xlsx = require('xlsx');
const workbook = xlsx.readFile('employees.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(worksheet);

// const mongoose = require('mongoose');

//לחבר בין הנתונים של שם פרטי, שם משפחה וקוד שיוך למנהל לאקסל
const employeeSchema = new mongoose.Schema({
  fullName: String,
  employeeOfManagerId: String,
  id: String,
  role: String,
  DataOfBirth: Date,
  PlaceOfResidence: String,
  FamilyStatus: String,
  NumOfChildren: Number,
  YearsInTheCompany: Number,
  Anniversary: String,
  LastestActivity: Array,
  InterestingFact: String,
  ClosestPersonalEvent: Array,
  singers: Array,
  FoodAndDrinks: Array,
  Restaurants: Array,
  Hobbys: Array,
});


// יצירת מודל של עובד
// const Employee = mongoose.model("Employee", {
//   firstName: String,
//   lastName: String,
//   employeeOfManagerId: String,
// })

const Employee = mongoose.model('Employee', employeeSchema);

data.forEach(async (row) => {
  const employee = new Employee({
    fullName: row.fullName,
    employeeOfManagerId: row.employeeOfManagerId,
    id: row.id,
    role: row.role,
    DataOfBirth: row.DataOfBirth,
    PlaceOfResidence: row.PlaceOfResidence,
    FamilyStatus: row.FamilyStatus,
    NumOfChildren: row.NumOfChildren,
    YearsInTheCompany: row.YearsInTheCompany,
    Anniversary: row.Anniversary,
    LastestActivity: [
      { Date: row.Date, Activity: row.Activity },
      { Date: row.Date, Activity: row.Activity },
      { Date: row.Date, Activity: row.Activity },
    ],
    InterestingFact: row.InterestingFact,
    ClosestPersonalEvent: { Date: row.Date, Event: row.Event },
    singers: [
      { Singer1: row.singers },
      { Singer2: row.singers },
    ],
    FoodAndDrinks: [
      { Food1: row.FoodAndDrinks, food2: row.FoodAndDrinks, Drink: row.FoodAndDrinks },
    ],
    Restaurants: [{ resturant1: row.Restaurants, resturant2: row.Restaurants }],
    Hobbys: [{ Hobby1: row.Hobbys, Hobby2: row.Hobbys, Hobby3: row.Hobbys }],
  });

  await employee.save();
});


// יצירת מודל של מנהל
const Manager = mongoose.model("User", {
  email: String,
  password: String,
  id: String
});

// POST route לקבלת נתוני המדשתמש מהעמוד ולשמירתם במסד הנתונים
app.post("/register", async (req, res) => {
  try {
    const { email, password, id: managerId } = req.body; // Extract managerId from req.body
    if (email && password && managerId) { // Check if managerId exists
      const manager = new Manager({ email, password, id: managerId });
      await manager.save();
      console.log("User registered successfully:", manager);
      res.status(201).send("User registered successfully");
    } else {
      res.status(400).send("Invalid data");
    }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.post("/login", async (req, res) => {
  try {
    // קבל את נתוני המשתמש מהבקשה
    const { email, password } = req.body;

    // בדוק במסד הנתונים האם קיים משתמש עם האימייל והסיסמה שהוזנו
    const manager = await Manager.findOne({ email, password });
    // console.log(manager);
    if (manager) {
      // אם המשתמש קיים, שלח תשובה חיובית
      res.status(200).json({ message: "Login successful" });
    } else {
      // אם המשתמש לא קיים, שלח תשובת שגיאה
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



app.post("/addemployee", async (req, res) => {
  console.log('hi');
  try {
    const {
      fullName, employeeOfManagerId, id, role, DataOfBirth, PlaceOfResidence, FamilyStatus,
      NumOfChildren, YearsInTheCompany, Anniversary, InterestingFact, LastestActivity,
      ClosestPersonalEvent, singers, FoodAndDrinks, Restaurants, Hobbys } = req.body;

    // Validate the required fields
    if (
      fullName && employeeOfManagerId && id && role && DataOfBirth && PlaceOfResidence
      && FamilyStatus && NumOfChildren !== undefined && YearsInTheCompany !== undefined
      && Anniversary && InterestingFact && LastestActivity && ClosestPersonalEvent
      && singers && FoodAndDrinks && Restaurants && Hobbys) {
      const employee = new Employee({
        fullName, employeeOfManagerId, id, role, DataOfBirth, PlaceOfResidence, FamilyStatus,
        NumOfChildren, YearsInTheCompany, Anniversary, InterestingFact, LastestActivity,
        ClosestPersonalEvent, singers, FoodAndDrinks, Restaurants, Hobbys});
        
      await employee.save();
      console.log("Employee registered successfully:", employee);
      res.status(201).send("Employee registered successfully");
    } else {
      res.status(400).send("Invalid data");
    }
  } catch (error) {
    console.error("Error registering employee:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post('/findemployees', async (req, res) => {
  try {
    const manager = req.body;
    // console.log(manager);
    if (manager) {
      const currentManagerData = await Manager.findOne({
        email: manager.email,
        password: manager.password
      })
      // console.log(currentManagerData);

      if (currentManagerData) {
        const employeesArr = await Employee.find({ employeeOfManagerId: currentManagerData.id });
        console.log(employeesArr);
        res.json(employeesArr);
      }
    } else {
      res.status(400).send("Manager ID is required");
    }
  } catch (error) {
    console.error("Error finding employees:", error);
    res.status(500).send("Internal Server Error");
  }
});

const port = 5000; //סוג הפורט
app.listen(port, () => {
  console.log("listening on port localhost:" + port);
});
