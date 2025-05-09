const { createApp, ref, reactive } = Vue;

createApp({
    setup() {
        const activeSection = ref('about'); // Default section to show

        const showSection = (sectionName) => {
            activeSection.value = sectionName;
        };

        // Data for the 'About Me' section
        const aboutMe = reactive({
            greeting: "Hello! I'm Parker Knapp, a passionate and aspiring software engineer.",
            introduction: "With a keen interest in AI, crypto and backend development, I enjoy creating problem solving algorithms and working with new languages and frameworks.",
            passions: "I strive to build applications that are not only functional but also aesthetically pleasing.",
            hobbies: "When I'm not coding or designing, you can find me playing disc golf, or playing games. I'm always eager to learn new things and take on challenging projects."
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
            contact
        };
    }
}).mount('#app');
