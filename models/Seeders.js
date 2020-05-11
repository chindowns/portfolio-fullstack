
db.on("error", error => {
    console.log("database Error:", error);
});

db.Resume.insert({
    name: "Michael Downs",
    email: "michael@chindowns.com",
    phone: "479-799-9490",
    city: "San Jose",
    state: "CA",
    linkedinResume: "michaeldownssj",
    githubResume: "chindowns"
});

db.Skills.insert({skill:"HTLM5", type:"frontend"});
db.Skills.insert({ skill: "CSS", type: "frontend" });
db.Skills.insert({ skill: "CSS Frameworks", type: "frontend" });
db.Skills.insert({ skill: "Bootstrap CSS Framework", type: "frontend" });
db.Skills.insert({ skill: "JavaScript", type: "frontend" });
db.Skills.insert({ sill: "jQuery", type: "frontend"});
db.Skills.insert({ skill: "jQuery", type: "backend"});
db.Skills.insert({ skill: "JavaScript", type: "backend" });
db.Skills.insert({ skill: "Web APIs", type: "frontend" });
db.Skills.insert({ skill: "3rd Party APIs", type: "frontend" });
db.Skills.insert({ skill: "Server Side APIs", type: "frontend" });
db.Skills.insert({ skill: "Firebase", type: "frontend" });
db.Skills.insert({ skill: "React", type: "frontend" });
db.Skills.insert({ skill: "MVC", type: "backend" });
db.Skills.insert({ skill: "ORM", type: "frontend" });
db.Skills.insert({ skill: "MySql", type: "backend" });
db.Skills.insert({ skill: "Sequelize ORM", })
db.Skills.insert({ skill: "Handlebars ORM", type: "frontend" });
db.Skills.insert({ skill: "OOP", type: "backend" });
db.Skills.insert({ skill: "ODM", type: "frontend" });
db.Skills.insert({ skill: "Node", type: "backend" });
db.Skills.insert({ skill: "HTLM5", type: "frontend" });
db.Skills.insert({ skill: "NoSQL", type: "backend" });
db.Skills.insert({ skill: "NoSQL", type: "frontend" });
db.Skills.insert({ skill: "Linux", type: "backend" });
db.Skills.insert({ skill: "Photoshop", type: "frontend" });
db.Skills.insert({ skill: "Big Data", type: "backend"});
db.Skills.insert({ skill: "Restful API", type: "backend"});
db.Skills.insert({ skill: "Stateful Development", type: "backend"});

db.Projects.insert({
    projectName: "Weather App",
    repoLink: "https://chindowns.github.io/weather/",
    imageLink: "public/assets/images/weather-app.jpg",
    deployLink: "https://github.com/chindowns/weather",
    projectRole: "Auther (Self Developed)",
    skills_id: ["Web APIs", "3rd Party APIs", "JavaScript", "CSS Frameworks", "Photoshop"],
    appDesc: "Easy and Quick Weather App utilizing weatherAPI for weather data",
    projHighlights: "Weather App is clean, polished, responsive, friendly site where user can Click, Enter or Tab to engage a search. The site maintains the last 10 visited sites.",
    projResponsibilities: "Full Design, API selection, and Developemnt.",
    projLearnings: "Rendering a pleasant polished look using dynamic dates and icons in the forecast cards along with input validation."
})

db.Projects.insert({
    projectName: "Codvid-19 Pandemic Tracker",
    imageLink: "public/assets/images/covid-19-tracker.png",
    repoLink: "https://github.com/chindowns/covid19-tracker",
    deployLink: "https://chindowns.github.io/covid19-tracker/",
    projectRole: "Covid API, Chartjs, and Refactoring",
    skills_id: ["JavaScript", "jQuery", "Web APIs", "3rd Party APIs", "HTML5", "CSS", "CSS Frameworks", "Mapbox", "Leafletjs", "Big Data", "Big Data Parsing"],
    appDesc: "Web App developed in the early stages to track new cases by State/Day",
    projHighlights: "Clean, User friendly sight to pull the latest available data regarding the Pandemic in one place.  The News pulls Health Information by country which was COVID related during the Pandemic.",
    projResponsibilities: "Identify, Design, Develop, and Deploy in 7 days. Direct responsibility for COVID API and Data Rendering",
    projLearnings: "Managing and Parsing Big Data for Website rendering.  Maintaining 3rd Party APIs to ensure the site functions optimally. Scrubbing, Parsing, Concatenating data hundred thousand objects to display visually."
});

db.Projects.insert({
    projectName: "Restaurant List",
    imageLink:"public/assets/images/Dining-Wishlist.gif",
    repoLink: "https://github.com/chindowns/restaurant-wishlist",
    deployLink: "https://afternoon-ridge-53194.herokuapp.com/",
    projectRole: "Design and FullStack Development",
    skills_id: ["HTML5", "CSS", "jQuery", "Sequelize ORM", "Handlebars"],
    appDesc: "JavaScript DOM site rendering utilizing MVC Handlebars and Sequelize ORM to track the state of each item.",
    projHighlights: "Clean, User friendly demonstration of Stateful development with Handlebars MVC and full JavaScript rendering.",
    projResponsibilities: "Self Project",
    projLearnings: "Templates and JavaScript DOM rendering simplify dynamic generation of display data."
});

db.Projects.insert({
    projectName: "JobKit",
    imageLink: "public/assets/images/applications-tracked.jpg",
    repoLink: "https://github.com/chindowns/job-kit",
    deployLink: "https://jobkit.herokuapp.com",
    projectRole: "Database design and model creation with Sequelize, Authentication and Bug testing and troubhleshooting.",
    skills_id: ["HTML5", "CSS", "jQuery", "JavaScript", "MySQL", "Sequelize ORM", "Handlebars", "UI Kit", "Firebase Authentication", "3rd Party APIs", "Server Side APIs", "OOP", "Node", "Restful API"]
});

db.JobHistory.insert({
    companyName: "Self-Employeed",
    jobTitle: "Realestate, Landlord, Handyman",
    endDate: "2020-03-10",
    startDate: "2016-04-01",
    city:"Bentonville",
    state: "AR",
    accomplishments1: "Purchase & renovate rental houses required vision, development, contractor maangement and ability to identify obstacles, adjust plans and vision to meet goals and complete on schedule.",
});

db.JobHistory.insert({
    companyName: "1Source LLC",
    jobTitle: "Business Consultant",
    endDate: "2016-04-01",
    startDate: "2012-08-01",
    city: "Hong Kong",
    state: "Hong Kong",
    accomplishments1: "Worked with Executives and Business Owners analyze and lower telecom expenses."
});

db.JobHistory.insert({
    companyName: "CD Business Solutions",
    jobTitle: "Business Consultant",
    endDate: "2012-08-01",
    startDate: "2009-08-01",
    city: "Bentonville",
    state: "AR",
    accomplishments1: "Worked with businesses to help build web and marketing practice.",
    accomplishments2: "Developed an advertising platform in the online virtual meeting space."
});

db.JobHistory.insert({
    companyName: "PRN",
    jobTitle: "Director Business Development",
    endDate: "2009-06-01",
    startDate: "1998-05-01",
    accomplishment1: "Developed and sold $3M annual advertising campaign incorporating 27 brands with Sam's Club",
    accomplishment2: "Developed and Lead the Technical Account Team to support Walmart In-Store Digital and HD advertising.",
    accomplishment3: "As Product Manager, worked closely with Engineering and QA to develop a process that released updates every 6 weeks to 12,000 servers, nationwide and PR.  This process was very similar to Agile."
});