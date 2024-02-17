/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shashank's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shashank Shekhar Portfolio",
    type: "website",
    url: "#",
  },
};

//Home Page
const greeting = {
  title: "Shashank Shekar",
  logo_name: "ShashankShekhar",
  nickname: "Hands-on AI Leader",
  subTitle:
    "Experienced and accomplished executive with 16+ years’ experience in Digitech and a focus on leveraging advanced and  emerging technologies like Artificial Intelligence (AI), Machine Learning (ML), Data Engineering, Deep Learning, and Computer Vision for use in B2C and B2B.",
  resumeLink:
    "https://drive.google.com/file/d/102TUowPUkb-0CaYqGNPMQSdKPdlyWrLh/view?usp=sharing",
  portfolio_repository: "#",
  githubProfile: "#",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "#",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shashank-shekhar-au",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "#",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:quintshekhar@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "#",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "#",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "#",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Invited Panellist - Shaastra, IIT Madras",
      subtitle: "Ethical Tech Summit (Integration of Ethical Ideas in Emerging Tech)– 2024",
      logo_path: "p1.jpg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ The event will be aimed at involving and educating our audience in areas such as responsible AI, cybersecurity, bio-engineering, and dataprivacy, with the goal of fostering collaboration and understanding between industry and passionate delegates ranging from researchers, professionals, law officials, and other stakeholders on the responsible use of technology from January 4 to 6, 2024, as a part of Shaastra.",
        
      ],
      website_link: "https://www.linkedin.com/posts/reachiitm_ethicaltechnology-emergingtechnologies-cybersecurity-activity-7145402080936013825-_GUg/?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Invited Presenter - PyData Global",
      subtitle: "(LLMs: Beyond the Hype - A Practical Journey to Scale) - 2023",
      logo_path: "p2.jpeg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://global2023.pydata.org/cfp/talk/73ZC3W/",
    },
    {
      title: "Invited Speaker - Shaastra, IIT Madras",
      subtitle: "(Navigating the Shift: Comparing and Contrasting Applied Machine Learning in Academia and Industry) – 2023",
      logo_path: "p3.png",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During the event, Shashank delivered a thought-provoking lecture entitled 'Navigating the Shift: Comparing and Contrasting Applied Machine Learning in Academia and Industry.'",
        
      ],
      website_link: "https://www.linkedin.com/posts/subex-ai-labs_generative-ai-in-the-spotlight-shaastra-activity-7027143011532771328-_Xk5/?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Invited Panellist – GTX and Nasscom AI",
      subtitle: "(Generative AI: The Next Wave of Disruptive Innovation) - 2023",
      logo_path: "p4.jpeg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ Global Talent Exchange recently organized a virtual roundtable discussion as part of our Technology Game Changers Series on “Generative AI: The Next Wave Of Disruptive Innovation”. The panel consisted of 9 distinguished industry leaders who brought their passion, energy, and expertise to the discussion, actively engaging in thought-provoking discourse and sharing invaluable perspectives.",
        
      ],
      website_link: "https://globaltalex.com/post_details/Generative%20AI:%20The%20Next%20Wave%20Of%20Disruptive%20Innovation",
    },
    {
      title: "Invited Speaker - At the 'Transforming Business through Operations Technology 2023' conclave hosted by SBUP Pune",
      subtitle: "(LLMs: Beyond the Hype - A Practical Journey to Scale) - 2023",
      logo_path: "p5.jpg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://www.youtube.com/watch?v=eb2nTJxUoIU",
    },
    {
      title: "Invited Panellist - Shaastra, IIT Madras",
      subtitle: "(Generative AI: The Future of Content Creation) – 2023",
      logo_path: "p6.jpg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://www.linkedin.com/posts/shaastra-iit-madras_are-you-curious-about-the-future-of-artificial-activity-7024482171348279296-WRJW/?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Panellist (with fellow panellist Indrajit Kar, Head of AI at Siemens)",
      subtitle: "HyperSense Webinar (Laying MLOPs foundation Operationalizing AI at scale) - 2023",
      logo_path: "p7.png",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://vimeo.com/801518492",
    },
    {
      title: "Invited Panellist - Cisco & Proactive Leadership Knowledge Turf",
      subtitle: "(Improving Cyber Security for Businesses) – 2022",
      logo_path: "p8.jpg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://www.youtube.com/watch?v=DANWKVggc2E",
    },
    {
      title: "Invited Presenter - PyData Global",
      subtitle: "(Generate Actionable Counterfactuals using Multi-objective Particle Swarm Optimization) - 2022",
      logo_path: "p2.jpeg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://global2022.pydata.org/cfp/talk/7BCESD/",
    },
    {
      title: "Invited Presenter - PyData Global",
      subtitle: "(Measurement of Trust in AI) - 2022",
      logo_path: "p10.jpg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://www.youtube.com/watch?v=nGeDPvneDs0",
    },
    {
      title: "Fireside Chat with Zabi Ulla, Product Head AI Lab (Subex) on Democratising AI",
      subtitle: "The challenges and roles of AI in the ecosystem and how democratising AI will help overcome them - 2022",
      logo_path: "p11.png",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://info.subex.com/democratizing-ai?utm_source=linkedin&utm_medium=social&utm_campaign=Democratize-ai",
    },
    {
      title: "Fireside Chat with Zabi Ulla, Product Head AI Lab and Arundeep Sivaraj, Director, Business Consulting (Subex) on Demystifying the Black Box AI",
      subtitle: "The effects of Black Box AI and ways to transform it into more explainable AI - 2022",
      logo_path: "p2.jpeg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://info.subex.com/demystifying-the-black-box-ai?utm_source=linkedin&utm_medium=social&utm_campaign=blackbox-ai",
    },
    {
      title: "Invited Presenter/Panellist - Lintas Teknologi Solutions Day",
      subtitle: "(Democratising AI Using HyperSense AI Studio) - 2021",
      logo_path: "p13.jpg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://www.youtube.com/watch?v=YjF0cjSWD9g",
    },
    {
      title: "Invited Presenter - Shaastra, IIT Madras",
      subtitle: "(From Student to Data Scientist: How Applied Machine Learning changes from Academia to Industry) - 2021",
      logo_path: "p2.jpeg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://www.linkedin.com/posts/shaastra-iit-madras_industry-student-datascience-activity-6770555109521932288-KYLH/?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Invited Presenter - PyData Global",
      subtitle: "(Counter Factual Analysis for Explainable AI) - 2021",
      logo_path: "p2.jpeg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://www.youtube.com/watch?v=DgzyKrLxIaU",
    },
    {
      title: "Invited Presenter - PyData Global",
      subtitle: "(Using Dominance Analysis for accurate and intuitive feature importance) - 2020",
      logo_path: "p2.jpeg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://www.youtube.com/watch?v=IuX5godOggs",
    },
    {
      title: "Invited Presenter - Plugin (virtual)",
      subtitle: "(Leveraging Game Theory for Explainable AI (XAI)) - 2020",
      logo_path: "p17.jpg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://www.youtube.com/watch?v=96tHN54VO2U&feature=youtu.be",
    },
    {
      title: "Invited Presenter - RAG Americas Online",
      subtitle: "(Active Risk Intelligence for Telcos) - 2020",
      logo_path: "p18.avif",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://vimeo.com/462319856",
    },
    {
      title: "Speaker (with fellow speaker Sam Pritchett, Head of Channel Strategy and Analytics at Atlassian)",
      subtitle: "CrunchMetrics & Atlassian Webinar (How to transform B2B partner experience and customer experience with analytics) - 2020",
      logo_path: "p2.jpeg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://www.subex.com/",
    },
    {
      title: "Invited Panel Speaker (with fellow speaker Krishnendu Majumdar, Vice President of Catalog at Flipkart)",
      subtitle: "CrunchMetrics & Flipkart Webinar (Driving rich customer experience through intelligent catalog management) - 2020",
      logo_path: "p2.jpeg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://www.subex.com/",
    },
    {
      title: "Invited Speaker - APAC Data Innovation Summit",
      subtitle: "Summit (Leveraging AI for next generation revolution in Telecom Industry) - 2020",
      logo_path: "p2.jpeg",
      alt_name: "",
      duration: "",
      descriptions: [
        "⚡ During this presentation, I will delve into practical strategies aimed at achieving a delicate balance: reducing inference costs while simultaneously elevating model performance, enhancing quality, and optimizing latency.",
        
      ],
      website_link: "https://apac.datainnovationsummit.com/home/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "LLMs: Beyond the Hype - A Practical Journey to Scale",
      subtitle: "Shashank Shekhar, Founder of AIOrdinate speaking at PyData Global 2023",
      logo_path: "v1.jpg",
      certificate_link:
        "https://youtu.be/ooTelEWDUzA",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Measurement of Trust in AI | PyData Global 2022",
      subtitle: "Shashank Shekhar talking about key constructs of AI Trust and a framework of AI Trust Calculation",
      logo_path: "v2.jpg",
      certificate_link:
        "https://youtu.be/nGeDPvneDs0",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Counter Factual Analysis for Explainable AI (XAI)",
      subtitle: "Shashank Shekhar speaking at PyData Global 2021 about Counter Factual Analysis and its application in Explainable AI",
      logo_path: "v3.jpg",
      certificate_link:
        "https://youtu.be/DgzyKrLxIaU",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Using Dominance Analysis for accurate feature importance",
      subtitle: "Shashank Shekhar speaking at PyData Global 2020 about Dominance Analysis Python library and its application in Explainable AI",
      logo_path: "v4.jpg",
      certificate_link:
        "https://youtu.be/IuX5godOggs",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Leveraging Game Theory for Explainable AI (XAI)",
      subtitle: "Shashank Shekhar speaking at Plugin 2020 about a game theory based approach for Explainable AI",
      logo_path: "v5.jpg",
      certificate_link:
        "https://youtu.be/RJx9zyqc61I",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Career Summary",
  subtitle: "",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Career Details",
      work: true,
      experiences: [
        {
          title: "Head – Global AI Practice",
          company: "Subex Limited, ",
          
          logo_path: "l1.png",
          duration: "AUG 2019 to PRESENT",
          location: "Bangalore, India",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Head - Data Sciences, Transformative Projects, Data-Sciences CoE",
          company: "VMware Inc",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "l3.jpg",
          duration: "OCT 2014 to AUG 2019",
          location: "Bangalore, India",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Analytics Lead - Marketing and CS",
          company: "Flipkart.com",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "l4.jpg",
          duration: "MAY 2014 to OCT 2014",
          location: "Bangalore, India",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
        {
          title: "Business Analyst II (Business Analytics Manager) - International Expansion",
          company: "Amazon.com",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "l2.png",
          duration: "APR 2013 to APR 2014",
          location: "Bangalore, India",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Business Analyst II (Business Analytics Manager) - Inventory Management",
          company: "Amazon.com",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "l2.png",
          duration: "NOV 2012 to APR 2013",
          location: "Hyderabad, India",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Analytics Lead - Research & Development, Pricing, Marketing & Merchandising",
          company: "Target Corporation India Ltd",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "l5.webp",
          duration: "JAN 2011 to OCT 2012",
          location: "Bangalore, India",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Lead Analyst - Guest Insights",
          company: "Target Corporation India Ltd",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "l5.webp",
          duration: "MAR 2009 to JAN 2011",
          location: "Bangalore, India",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Business Analyst - Marketing Analytics",
          company: "Marketics Technologies Private Limited",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "MAY 2007 to MAR 2009",
          location: "Bangalore, India",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Patents",
  description:
    "Transforming Ideas into Patented Innovations: Spearheading cutting-edge solutions for real-world challenges.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Python library exploripy for automated and comprehensive exploratory data analysis",
      description: "Shashank Shekhar, Kunjithapatham Sivakumar, Sajan Bhagat",
      url:
        "https://github.com/exploripy/exploripy",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Python library Dominance-Analysis for Accurate and Intuitive Relative Importance of Predictors",
      
      description: "Shashank Shekhar, Kunjithapatham Sivakumar, Sajan Bhagat",
      url:
        "https://dominance-analysis.readthedocs.io/en/latest/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "A PSO Based Method to Generate Actionable Counterfactuals for High Dimensional Data. arXiv e-prints, arXiv-2311 (presented at IEEE CSDE 2023, Fiji)",
      description: "Shekhar S., Salim A.,Bansode A.,Jinturkar V. & Nayak A.",
      url:
        "https://arxiv.org/abs/2311.12825",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Datum: A System for TFRecord Dataset Management.(2021)",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Haloi, Mrinal, and Shashank Shekhar ",
      url:
        "https://www.researchgate.net/profile/Mrinal-Haloi/publication/353760472_Datum_A_System_for_TFRecord_Dataset_Management/links/610f88f51ca20f6f860b6256/Datum-A-System-for-TFRecord-Dataset-Management.pdf",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "A Comparative study of Hyper-Parameter Optimization Tools, 2021 IEEE Asia-Pacific Conference on Computer Science and Data Engineering (CSDE), 2021, pp. 1-6, doi:10.1109/CSDE53843.2021.9718485 (presented at IEEE CSDE 2021, Brisbane, Australia)",
      createdAt: "2020-03-06T16:26:54Z",
      description: "S. Shekhar, A. Bansode and A. Salim",
      url:
        "https://ieeexplore.ieee.org/abstract/document/9718485",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Table Detection in the Wild: A Novel Diverse Table Detection Dataset and Method.arXiv preprint arXiv:2209.09207 (2022)",
      description: "Shashank Shekhar, Haloi, Mrinal, Nikhil Fande, and Siddhant Swaroop Dash",
      url:
        "https://arxiv.org/abs/2209.09207",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "List Price Optimisation Using Customised Decision Trees (presented at ICDM 2016, New York, USA) Springer ICDM 2016: 438-444",
      description: "Shashank Shekhar, R. Kiran, John Kiran, K. Raghava Rau, Sam Pritchett, Anit Bhandari, Parag Chitalia",
      url:
        "https://www.springerprofessional.de/en/list-price-optimization-using-customized-decision-trees/10290568",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "List Price Optimisation Using Customised Decision Trees (presented at MLDM 2016, New York, USA) Springer MLDM 2016: 88-97",
      description: "Shashank Shekhar, R. Kiran, John Kiran, K. Raghava Rau, Sam Pritchett, Anit Bhandari, Parag Chitalia",
      url:
        "https://link.springer.com/chapter/10.1007/978-3-319-41920-6_7",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Simulation based Approach for Special Discounting Threshold. Transactions on Machine Learning and Data Mining 10(2), 57-65 (2017)",
      description: "Shashank Shekhar, Kaushik Shankar, Sushanta Kumar Mishra, Sam Pritchett , Chitalia P.",
      url:
        "http://www.ibai-publishing.org/journal/issue_mldm/2017_October/mldm_10_2_57_65.php",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Simulation Based Approach for Special Discounting Threshold(presented at ICDM 2017, New York, USA) ICDM 2017: 63-92",
      description: "Shashank Shekhar, Kaushik Shankar, Bishwarup Bhattacharjee, Sushanta Kumar Mishra, Sam Pritchett, Parag Chitalia",
      url:
        "https://www.data-mining-forum.de/books/icdmposter2017.pdf",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "An Ensemble Model for Face Liveness Detection.arXiv e-prints (2022): arXiv-2201 (presented at MLDS 2022). Published in Lattice journal",
      description: "Shekhar S.",
      url:
        "https://adasci.org/journals/62fb76edab43b210129ef4ff",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "“Business Survey OMR Sheet Scanning and Reading Using Webcam as OMR Reader” (presented at MDA 2017, New York, USA) MDA 2017: 55-63",
      description: "Shashank Shekhar, Kushal Lokhande, Sushanta Mishra, Sam Pritchett, Parag Chitalia, Akash",
      url:
        "http://www.mda-signals.de/books/mda2017.pdf",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "“A Quantitative Framework for Enhancing the Testing Capacity of COVID-19 in India” (published in Analytics India Magazine on April 14th)",
      description: "Shekhar S.",
      url:
        "https://analyticsindiamag.com/a-quantitative-framework-for-enhancing-the-testing-capacity-of-covid-19-in-india/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "“A Quantitative Framework for Expanding Testing Capacity of COVID-19 in India”. DOI:10.31124/advance.12117786",
      description: "Shekhar S.",
      url:
        "https://advance.sagepub.com/articles/preprint/A_Quantitative_Framework_for_Expanding_Testing_Capacity_of_COVID-19_in_India/12117786",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "“Beyond Explainable AI—How to infuse trust in AI systems” (published in Analytics India Magazine)",
      description: "Shekhar S.",
      url:
        "https://analyticsindiamag.com/council-post-beyond-explainable-ai-how-to-infuse-trust-in-ai-systems/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "“Global guidelines for building trustworthy AI” (published in Analytics India Magazine)",
      description: "Shekhar S.",
      url:
        "https://analyticsindiamag.com/global-guidelines-for-building-trustworthy-ai/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "“How AI is shaping the future of telecoms operators” (published in Telemedia Online)",
      description: "Shekhar S.",
      url:
        "https://www.telemediaonline.co.uk/how-ai-is-shaping-the-future-of-telecoms-operators/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "“Why AI is the Catalyst in Transforming the Telecom Industry” (published in RTInsights.com)",
      description: "Shekhar S.",
      url:
        "https://www.rtinsights.com/why-ai-is-the-catalyst-in-transforming-the-telecom-industry/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};


const awards = {
  awards: [
    {
      title: "Top Corporate Leader",
      subtitle: "Prestigious award given by Home Minister of Govt. of Karnataka",
      logo_path: "a.webp",
      certificate_link:
        "#",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Top 50 Corporate Leader",
      subtitle: "Prestigious award given by CEO Global Forum at Top CEOs’ Summit",
      logo_path: "a1.jpg",
      certificate_link:
        "https://www.linkedin.com/feed/update/urn:li:activity:7076823459107926016/?utm_source=share&utm_medium=member_desktop",
      alt_name: "",
      color_code: "#8C151599",
    },
    {
      title: "Runner-Up - Aegis Graham Bell Awards ",
      subtitle: "Represented Subex - 2022",
      logo_path: "a2.jpg",
      certificate_link:
        "https://www.linkedin.com/posts/aegis-graham-bell-award_india-innovation-technology-activity-6902829421473202176-oXQw/?utm_source=share&utm_medium=member_desktop",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "40 Under 40 Data Scientist",
      subtitle: "Prestigious award recognising analytics industry innovators and achievers – 2022",
      logo_path: "a3.jpg",
      certificate_link:
        "https://analyticsindiamag.com/40-under-40-data-scientists-2022-who-are-they/",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Honorary Mention - Global Opex2020 Awards",
      subtitle: "judged second-best digital transformation project) - 2020",
      logo_path: "a4.jpg",
      certificate_link:
        "https://www.processexcellencenetwork.com/events-opexweek/opex-awards",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Leader of the Year Award - Subex",
      subtitle: "For creating a significant impact externally and internally - 2019 - 2020",
      logo_path: "a.webp",
      certificate_link:
        "https://youtu.be/RJx9zyqc61I",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Selected Committee Member",
      subtitle: "International Conference on Machine Learning and Data Mining (MLDM) - 2017",
      logo_path: "a.webp",
      certificate_link:
        "https://link.springer.com/content/pdf/bfm:978-3-319-62416-7/1.pdf",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Company awards from VMWare ",
      subtitle: "CTO Award for developing unique IP solution on list price optimisation",
      logo_path: "a.webp",
      certificate_link:
        "#",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Target India ",
      subtitle: "Leadership Excellence Award and Best Team Leadership Award, both for design of campus induction training",
      logo_path: "a.webp",
      certificate_link:
        "#",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  awards,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
