# 🧠 Riddle Game - משחק חידות לפי רמת קושי

ברוך הבא ל־**Riddle Game** – משחק חידות שבו תבחר רמת קושי, תענה על שאלות רגילות ואמריקאיות, תעמוד בזמנים ותקבל משוב מדויק על הביצועים שלך!

---

## 🎮 איך המשחק עובד

- בתחילת המשחק, השחקן בוחר רמת קושי.
- מוצגות חידות בהתאם לרמה שנבחרה.
- ישנם שני סוגי חידות:
  - 📝 **שאלות רגילות** (`Riddle`)
  - ✅ **שאלות אמריקאיות** (`MultipleChoiceRiddle`)
- לכל שאלה יש מגבלת זמן (בשניות).
- אם השחקן עונה לאט מדי – מתווסף לו **עונש של 5 שניות**.
- בתום המשחק מוצג דו"ח סטטיסטיקה עם:
  - זמן כולל למשחק
  - זמן ממוצע לשאלה
  - סך עונשי הזמן שנצברו

---

## 🧠 מחלקות עיקריות (תיקיית `classes/`)

- `Riddle.js` – מייצגת שאלה רגילה עם טקסט ותשובה.
- `MultipleChoiceRiddle.js` – מייצגת שאלה אמריקאית (רב ברירה).
- `Player.js` – מנהל את הנתונים של השחקן, כולל זמני תגובה וסטטיסטיקות.

---

## 📁 מבנה תיקיות

riddle-game/
├── classes/ # קבצי מחלקות (שאלות ושחקן)
│ ├── Riddle.js
│ ├── MultipleChoiceRiddle.js
│ └── Player.js
│
├── riddles/ # מאגר החידות לפי קבצים שונים
│ ├── allRiddles.js # מאחד את כל החידות במקום אחד
│ ├── r1.js - r8.js # קבצי שאלות (ניתנים לחלוקה לפי רמות קושי)
│
├── node_modules/ # ספריות צד שלישי
├── app.js # קובץ ראשי שמריץ את המשחק
├── package.json # הגדרות הפרויקט ותלויות
├── .gitignore # קבצים שלא ייכנסו ל־Git
└── README.md # (קובץ זה)

---

## 🚀 איך מריצים את המשחק

1. התקנת התלויות:
   ```bash
   npm install
הרצת המשחק:

bash
node app.js
🧪 דוגמה לזרימת משחק
markdown
בחר רמת קושי: קל

שאלה 1:
מה בירת ישראל?
> ירושלים
⏱️ זמן תגובה: 7 שניות

שאלה 2:
מהי תוצאת 3 + 5?
א. 6  ב. 7  ג. 8  ד. 9
> ג
⏱️ זמן תגובה: 12 שניות
⚠️ Too slow! 5 seconds penalty applied.


🎉 סטטוס משחק:
- זמן כולל: 1:25 דק'
- זמן ממוצע: 8.5 שניות
- עונשי זמן: 10 שניות
💡 רעיונות לפיתוח עתידי
הוספת רמות קושי נוספות.

יצירת ממשק גרפי (GUI) או גרסת אינטרנט.

תמיכה במצב מרובה משתתפים.

שמירת היסטוריית משחקים.

הצגת דירוגים בין שחקנים.

📝 רישיון
פרויקט זה נוצר על ידי Haim Assraf © 2025
כל הזכויות שמורות.