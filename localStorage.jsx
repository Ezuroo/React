const employees = [
    {
      "id": 1,
      "firstName": "Ram",
      "lastName": "Thapa",
      "email": "ram@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "newTask": 2,
        "failed": 1,
        "completed": 0
      },
      "tasks": [
        {
          "title": "Hapte Report Tayar Garnuhos",
          "description": "Hapte report puri garnuhos.",
          "date": "2024-11-24",
          "category": "Reporting",
          "active": true,
          "newTask": true,
          "failed": false,
          "completed": false
        },
        {
          "title": "Grahak Database Adhyavik Gurnuhos",
          "description": "Grahak database update garnuhos.",
          "date": "2024-11-25",
          "category": "Data Management",
          "active": false,
          "newTask": false,
          "failed": true,
          "completed": false
        },
        {
          "title": "Prastutikaran Slide Tayar Garnuhos",
          "description": "Prastutikaran ko lagi slide banau.",
          "date": "2024-11-26",
          "category": "Presentation",
          "active": true,
          "newTask": false,
          "failed": false,
          "completed": false
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Sita",
      "lastName": "Sharma",
      "email": "sita@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "newTask": 2,
        "failed": 1,
        "completed": 1
      },
      "tasks": [
        {
          "title": "Bibhagiya Baithak Ayojana Garnuhos",
          "description": "Aagami baithak ko lagi tayari garnuhos.",
          "date": "2024-11-23",
          "category": "Meeting",
          "active": false,
          "newTask": true,
          "failed": false,
          "completed": false
        },
        {
          "title": "Artha Mantralay Sanga Ko Baithak Ko Tayari Garnuhos",
          "description": "Artha Mantralay ko baithak ma bhag lin tayari garnuhos.",
          "date": "2024-11-24",
          "category": "Meeting",
          "active": false,
          "newTask": false,
          "failed": true,
          "completed": false
        },
        {
          "title": "Warshik Report Lekhnuhos",
          "description": "Bibhagiya warshik report lekhnuhos.",
          "date": "2024-11-25",
          "category": "Reporting",
          "active": true,
          "newTask": false,
          "failed": false,
          "completed": true
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Gopal",
      "lastName": "Yadav",
      "email": "gopal@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "newTask": 2,
        "failed": 0,
        "completed": 1
      },
      "tasks": [
        {
          "title": "Client Ko Site Avlokan Garnuhos",
          "description": "Client ko karyalay avlokan garnuhos ra pratibedan tayar garnuhos.",
          "date": "2024-11-24",
          "category": "Critique",
          "active": false,
          "newTask": true,
          "failed": false,
          "completed": false
        },
        {
          "title": "Vittiya Data Adhyavik Gurnuhos",
          "description": "Vittiya data lai naya jankari sanga adhyavik garnuhos.",
          "date": "2024-11-25",
          "category": "Data Management",
          "active": true,
          "newTask": false,
          "failed": false,
          "completed": false
        },
        {
          "title": "Grahak Ko Report Tayar Garnuhos",
          "description": "Grahak ko lagi data report tayar garnuhos.",
          "date": "2024-11-26",
          "category": "Reporting",
          "active": false,
          "newTask": false,
          "failed": false,
          "completed": true
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Neha",
      "lastName": "Rai",
      "email": "neha@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "newTask": 1,
        "failed": 1,
        "completed": 1
      },
      "tasks": [
        {
          "title": "Naya Karmachari Prashikshan Garnuhos",
          "description": "Naya karmachari lai company prakriya sikhaunuhos.",
          "date": "2024-11-23",
          "category": "Training",
          "active": true,
          "newTask": false,
          "failed": false,
          "completed": false
        },
        {
          "title": "Saptahik Baithakma Report Garnuhos",
          "description": "Saptahik baithak ko report tayar garnuhos.",
          "date": "2024-11-24",
          "category": "Meeting",
          "active": false,
          "newTask": false,
          "failed": true,
          "completed": false
        },
        {
          "title": "System Suraksha Parikshan Garnuhos",
          "description": "System ko suraksha parikshan garnuhos ra report tayar garnuhos.",
          "date": "2024-11-25",
          "category": "Security",
          "active": false,
          "newTask": true,
          "failed": false,
          "completed": true
        }
      ]
    },
    {
      "id": 5,
      "firstName": "Pawan",
      "lastName": "Kumar",
      "email": "pawan@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "newTask": 2,
        "failed": 1,
        "completed": 0
      },
      "tasks": [
        {
          "title": "System Adhyavik Garnuhos",
          "description": "System ko naya sanskaranma adhyavik garnuhos.",
          "date": "2024-11-24",
          "category": "Technical",
          "active": true,
          "newTask": true,
          "failed": false,
          "completed": false
        },
        {
          "title": "Backup Prakriya Parikshan Garnuhos",
          "description": "Backup prakriya ra setup parikshan garnuhos.",
          "date": "2024-11-25",
          "category": "Technical",
          "active": false,
          "newTask": false,
          "failed": true,
          "completed": false
        },
        {
          "title": "Network Connectivity Jach Garnuhos",
          "description": "Network connectivity jach garnuhos ra samasya haru samadhan garnuhos.",
          "date": "2024-11-26",
          "category": "Network",
          "active": true,
          "newTask": true,
          "failed": false,
          "completed": false
        }
      ]
    }
  ];
  
      


const admin = [
        {
          "firstName":"Dipesh",
          "lastName":"Malla",
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }
      
      
]

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

   return {employees, admin}
   
}


