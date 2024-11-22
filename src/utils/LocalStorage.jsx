const employees = [
    {
        "Id": 1,
        "firstName": "Ali",
        "email": "ali@employee.com",
        "password": "123",
        "taskNumbers": {
            "active": 2,
            "newTask": 2,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Design Website Layout",
                "taskDescription": "Create wireframes for the landing page.",
                "taskDate": "2024-10-13",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review the code for the login functionality.",
                "taskDate": "2024-10-14",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Prepare Presentation",
                "taskDescription": "Create slides for the team meeting.",
                "taskDate": "2024-10-15",
                "category": "Management",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "Id": 2,
        "firstName": "Ahmed",
        "email": "ahmed@employee.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Fix Bug in Checkout",
                "taskDescription": "Resolve the issue with discount calculation.",
                "taskDate": "2024-10-13",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Draft Blog Post",
                "taskDescription": "Write a post about recent tech trends.",
                "taskDate": "2024-10-16",
                "category": "Content Writing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "Id": 3,
        "firstName": "Hassan",
        "email": "hassan@employee.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Client Onboarding",
                "taskDescription": "Guide the client through the onboarding process.",
                "taskDate": "2024-10-12",
                "category": "Customer Support",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Database Migration",
                "taskDescription": "Migrate data to the new database system.",
                "taskDate": "2024-10-18",
                "category": "Database",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "Id": 4,
        "firstName": "Umar",
        "email": "umar@employee.com",
        "password": "123",
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Team Training",
                "taskDescription": "Conduct training on new project tools.",
                "taskDate": "2024-10-20",
                "category": "Training",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "Id": 5,
        "firstName": "Zain",
        "email": "zain@employee.com",
        "password": "123",
        "taskNumbers": {
            "active": 0,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Social Media Audit",
                "taskDescription": "Analyze the performance of social media campaigns.",
                "taskDate": "2024-10-10",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    }
];




const admin = [
    {
        "Id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return { employees, admin }
    
}
