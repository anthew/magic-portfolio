import { SmartLink } from "@/once-ui/components";

const person = {
    firstName: 'Anthony',
    lastName:  'Hewitt',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'B.S. Software Engineering',
    avatar:    '/images/avatar.jpg',
    location:  'San Diego',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/anthew',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/anthony-m-hewitt/',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work, education, and projects`,
    headline: <>Designer, Developer, Problem Solver</>,
    subline: <>I'm Anthony, a recent graduate from 
        <SmartLink
        href="https://www.csusm.edu"
        target="_blank"
        >
        CSUSM
        </SmartLink>
        with a Bachelor's degree in <strong>Software Engineering</strong>.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Anthony is a software engineer from San Diego with a passion for full-stack web development and object-oriented programming.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Sales Associate',
                timeframe: 'November 2024 - Present',
                role: 'Vans',
                achievements: [
                    <>Provide personalized customer service through proactive engagement and product recommendations</>,
                    <>Implement detailed store procedures and inventory protocols to maximize efficiency</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    ]
            },
            {
                company: 'Software Engineer Intern',
                timeframe: 'June - September 2024',
                role: 'Transportation Management & Design, Inc.',
                achievements: [
                    <>Engineered a no-code system for designing and deploying transit surveys concurrently as Next.js websites</>,
                    <>Created automation tool that converts text inputs into customized JavaScript code</>,
                    <>Integrated MongoDB Atlas for scalable survey data storage and retrieval</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    ]
            },
            {
                company: 'Student Assistant at CSUSM Library Circulation Desk',
                timeframe: 'August 2021 - May 2024',
                role: 'California State University San Marcos',
                achievements: [
                    <>Provided detailed guidance to patrons on the features and functionalities of library software</>,
                    <>Managed library records and facilitated efficient item circulation for accurate tracking and availability</>
                ],
                images: [ ]
            },
            {
                company: 'Learning Assistant for Calculus I',
                timeframe: 'January - May 2021',
                role: 'California State University San Marcos',
                achievements: [
                    <>Enhanced college students' understanding of calculus by employing probing questions and active listening during tutoring sessions</>,
                    <>Led interactive group discussions on Zoom to address questions and foster collaborative learning</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'California State University San Marcos',
                description: <>Bachelor of Science in Software Engineering
                <br />
                Magna Cum Laude (3.72 GPA)
                </>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical Skills',
        skills: [
            {
                title: 'Web Development',
                description: <>HTML, CSS, JavaScript, Document Object Model, Node.js, Next.js, Once UI</>,
                images: []
            },
            {
                title: 'Object-Oriented Programming',
                description: <>Java, C++, design patterns, UML diagramming</>,
                images: []
            },
            {
                title: 'Data Science',
                description: <>Python, SQL, data cleaning, data wrangling, statistical analysis, data visualization</>,
                images: []
            },
            {
                title: 'Cloud Computing',
                description: <>AWS (IoT, EC2), Google Cloud (Compute Engine, App Engine, Cloud SQL)</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Projects',
    title: 'My projects',
    description: `Projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };