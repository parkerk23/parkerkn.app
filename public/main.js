const { createApp, ref, reactive } = Vue; // Import reactive

createApp({
    setup() {
        const activeSection = ref('about'); // Default section to show

        const showSection = (sectionName) => {
            activeSection.value = sectionName;
        };

        // Data for the 'About Me' section
        const aboutMe = reactive({
            greeting: "Hello! I'm [Your Name], a passionate and dedicated [Your Profession/Aspiration].",
            introduction: "With a keen interest in [Your Interests related to your field], I enjoy creating intuitive and dynamic user experiences.",
            passions: "With a background in [Mention key skills or technologies e.g., front-end development, UI/UX design], I strive to build applications that are not only functional but also aesthetically pleasing.",
            hobbies: "When I'm not coding or designing, you can find me [Your Hobbies/Interests]. I'm always eager to learn new things and take on challenging projects."
        });

        // Data for the 'Experience' section
        const experience = reactive([
            {
                title: "Job Title 1",
                company: "Company Name 1",
                dates: "Month Year - Month Year",
                responsibilities: [
                    "Responsibility 1 for Job 1",
                    "Responsibility 2 for Job 1",
                    "Responsibility 3 for Job 1",
                ]
            },
            {
                title: "Job Title 2",
                company: "Company Name 2",
                dates: "Month Year - Month Year",
                responsibilities: [
                    "Responsibility 1 for Job 2",
                    "Responsibility 2 for Job 2",
                ]
            }
            // Add more job experiences here
        ]);

        // Data for the 'Projects' section
        const projects = reactive([
            {
                name: "Project Alpha",
                description: "A brief description of Project Alpha, its purpose, and what you achieved.",
                technologies: ["Vue.js", "Node.js", "CSS"],
                link: "https://example.com/project-alpha" // Optional
            },
            {
                name: "Project Beta",
                description: "Details about Project Beta, highlighting key features and challenges.",
                technologies: ["JavaScript", "HTML5", "API Integration"],
                link: "" // Optional
            }
            // Add more projects here
        ]);

        // Data for the 'Skills' section (as requested: Skill 1, Skill 2, Skill 3, etc.)
        // You can categorize them if you like.
        const skills = reactive([
            {
                name: "Programming Languages",
                items: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3"]
            },
            {
                name: "Frameworks & Libraries",
                items: ["Vue.js", "React", "Node.js", "Express.js"]
            },
            {
                name: "Tools & Platforms",
                items: ["Git & GitHub", "Docker", "Webpack", "Firebase"]
            },
            {
                name: "Other Skills",
                items: ["Agile Methodologies", "UI/UX Design Principles", "Responsive Web Design"]
            }
            // Add more skill categories or individual skills
        ]);

        // Data for the 'Contact' section
        const contact = reactive({
            email: "[your.email@example.com]",
            linkedin: "https://linkedin.com/in/[yourprofile]", // Full URL
            github: "https://github.com/[yourusername]",   // Full URL
            phone: "[Your Phone Number (Optional)]"
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
