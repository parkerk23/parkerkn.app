const { createApp, ref, reactive } = Vue;

createApp({
    setup() {
        const activeSection = ref('about'); // Default section to show

        const showSection = (sectionName) => {
            activeSection.value = sectionName;
        };
        const quotes = [
            { text: "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win", author: "Sun Tzu" },
            { text: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth", author: "Marcus Aurelius" },
            { text: "In a closed society where everybody's guilty, the only crime is getting caught. In a world of thieves, the only final sin is stupidity", author: "Hunter S. Thompson" },
            { text: "It's the basic condition of life to be required to violate our own identity", author: "Philip K. Dick" },
            { text: "Any decent politician is masochistic enough to dream now and then of going down in flames while the angels sing", author: "Isaac Asimov" },
            { text: "We get into the habit of living before acquiring the habit of thinking", author: "Albert Camus" },
            { text: "It strikes me profoundly that the world is more often than not a bad and cruel place.", author: "Bret Easton Ellis" },
        ];

        const currentQuote = ref(quotes[Math.floor(Math.random() * quotes.length)]);

        // rotate quotes every 10 seconds
        setInterval(() => {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * quotes.length);
            } while (quotes[newIndex].text === currentQuote.value.text);
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

        // Data for the 'Projects' section
        const projects = reactive([
            {
                name: "parkerkn.app",
                description: "A resume webapp using Vue.js with responsive design",
                technologies: ["Vue.js", "Node.js", "CSS", "HTML5"],
                link: "https://github.com/parkerk23/parkerkn.app"
            },
            {
                name: "MovieStat",
                description: "A mobile app that allows users to rate movies aswell as actors and get recommendations based on their ratings for the actors.",
                technologies: ["Java", "SQLite", "ROOM"],
                link: "https://github.com/parkerk23/Moviestat"
            }
        ]);

        // Data for the 'Skills' section
        const skills = reactive([
            {
                name: "Programming Languages",
                showBars: false,
                items: ["Java", "JavaScript", "Python", "HTML5", "CSS3", "C++"]
            },
            {
                name: "Frameworks & Libraries",
                showBars: false,
                items: ["Vue.js", "React", "Node.js", "Express.js"]
            },
            {
                name: "Tools & Platforms",
                showBars: false, // Use tag style for these
                items: ["Git & GitHub", "Docker", "AWS", "Linux"]
            },
            {
                name: "Other Skills",
                showBars: false, // Use tag style for these
                items: ["Agile Methodologies", "UI/UX Design Principles", "Responsive Web Design"]
            }
        ]);

        const timeline = reactive([
            {
                date: '2016',
                title: 'First started programming',
                description: 'Started with visual basic, moved to c++ and java shortly after'
            },
            {
                date: '2019',
                title: 'Guest service leader',
                description: 'Worked at Lowes Foods managing staff until 2023'
            },
            {
                date: '2021',
                title: 'Started Learning Web Dev',
                description: 'Self-taught JavaScript and Node.js'
            },
            {
                date: '2023',
                title: 'Served at Daniels Restaurant',
                description: 'Started working in the food service industry'
            },
            {
                date: '2024',
                title: 'Built this resume website',
                description: 'Created this site to showcase my work and experience'
            },
            {
                date: '2026',
                title: 'Graduated from Western Governors University',
                description: 'Completed my Bachelor\'s degree in Software Engineering'
            }
        ]);
        const getArrowDirection = (index) => {
            if (index === 2) return 'fa-arrow-down'; // End of top row
            if (index >= 3) return 'fa-arrow-left';  // Bottom row flows left
            return 'fa-arrow-right';                // Top row flows right
        };

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
            projects,
            skills,
            contact,
            currentQuote,
            timeline,
            getArrowDirection
        };
    }
}).mount('#app');
