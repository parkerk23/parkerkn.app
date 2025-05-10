const { createApp, ref, reactive } = Vue;

createApp({
    setup() {
        const activeSection = ref('about'); // Default section to show

        const showSection = (sectionName) => {
            activeSection.value = sectionName;
        };
const quotes = [
    { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
    { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" }
];

const currentQuote = ref(quotes[Math.floor(Math.random() * quotes.length)]);

// Optional: rotate quotes every 10 seconds
setInterval(() => {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[newIndex].text === currentQuote.value.text); // Ensure different quote
    
    currentQuote.value = quotes[newIndex];
}, 10000);

        // Data for the 'About Me' section
        const aboutMe = reactive({
            greeting: "Hello! I'm Parker Knapp, a passionate and aspiring software engineer.",
            introduction: "With a keen interest in AI, crypto and backend development, I enjoy creating problem solving algorithms and working with new languages and frameworks.",
            passions: "I strive to build applications that are not only functional but also aesthetically pleasing.",
            hobbies: "When I'm not coding or designing, you can find me playing disc golf, or playing games. I'm always eager to learn new things and take on challenging projects.",
            resumeURL: "assets/ParkerResume.pdf"
        });

        // Data for the 'Experience' section
        const experience = reactive([
            {
                title: "Service Leader",
                company: "Lowes Foods",
                dates: "Aug, 2019 - Oct, 2023",
                responsibilities: [
                    "Work with customers to resolve issues",
                    "Ensure expected cash count matches actual cash count",
                ]
            },
            {
                title: "Server",
                company: "Daniels Restaurant and Catering",
                dates: "Dec, 2023 - Current",
                responsibilities: [
                    "Serve customers and ensure they enjoy the dining experience",
                ]
            }
            // Add more job experiences here
        ]);

        // Data for the 'Projects' section
        const projects = reactive([
            {
                name: "parkerkn.app",
                description: "A resume webapp using Vue.js with responsive design",
                technologies: ["Vue.js", "Node.js", "CSS", "HTML5"],
            },
            {
                name: "Job to House range finder",
                description: "A query which searchs for houses for sale within some distance of locations of a company",
                technologies: ["JavaScript", "HTML5", "API Integration"],
                link: ""
            }
            // Add more projects here
        ]);

        // Data for the 'Skills' section
      const skills = reactive([
    {
        name: "Programming Languages",
        showBars: true,
        items: [
            { name: "C#", level: 80},
            { name: "Java", level: 95},
            { name: "Rust", level: 60 },
            { name: "JavaScript (ES6+)", level: 90 },
            { name: "Python", level: 85 },
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 85 }
        ]
    },
    {
        name: "Frameworks & Libraries",
        showBars: true,
        items: [
            { name: "Vue.js", level: 85 },
            { name: "React", level: 80 },
            { name: "Node.js", level: 75 },
            { name: "Express.js", level: 70 }
        ]
    },
    {
        name: "Tools & Platforms",
        showBars: false, // Use tag style for these
        items: ["Git & GitHub", "Docker", "Webpack", "Firebase"]
    },
    {
        name: "Other Skills",
        showBars: false, // Use tag style for these
        items: ["Agile Methodologies", "UI/UX Design Principles", "Responsive Web Design"]
    }
]);
  /*      const skills = reactive([
            {
                name: "Programming Languages",
                items: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3", "C++", "Rust", "Java", "SQL"]
            },
            {
                name: "Frameworks & Libraries",
                items: ["Vue.js", "React", "Node.js", "Express.js"]
            },
            {
                name: "Tools & Platforms",
                items: ["Git & GitHub", "Docker", "Linux"]
            },
            {
                name: "Other Skills",
                items: ["Archlinux", "UI/UX Design Principles", "Responsive Web Design"]
            }
            // Add more skill categories or individual skills
        ]); */
const timeline = reactive([
    {
        date: '2019',
        title: 'Started at Lowes Foods',
        description: 'Began my journey as a Service Leader'
    },
    {
        date: '2021',
        title: 'Started Learning Web Dev',
        description: 'Self-taught JavaScript and Vue.js'
    },
    {
        date: '2023',
        title: 'Joined Daniels Restaurant',
        description: 'Expanded my experience in the service industry'
    },
    {
        date: '2024',
        title: 'Built My First Portfolio',
        description: 'Created this site to showcase my work'
    }
]);

        // Data for the 'Contact' section
        const contact = reactive({
            email: "parkerknappprof@gmail.com",
            linkedin: "https://www.linkedin.com/in/parker-knapp-349b84172/", // Full URL
            linkedinName: "LinkedIn Profile", // Display text for LinkedIn
            github: "https://www.github.com/parkerk23",   // Full URL
            githubName: "GitHub Profile", // Display text for GitHub
            phone: "(919)-633-4191"
        });

        return {
            activeSection,
            showSection,
            aboutMe,
            experience,
            projects,
            skills,
            contact,
          currentQuote,
          timeline
        };
    }
}).mount('#app');
