export interface JobApplication {
  id: string; // Added
  companyName: string;
  position: string; // Renamed from positionTitle
  date: Date; // Renamed from applicationDate and changed type
  status: "applied" | "rejected" | "offer" | "interview";
  notes: string; // Renamed from description
  userId: string; // Added
}

// Placeholder user ID for temporary data
const TEMP_USER_ID = "temp-user-123";

const TEMP_JOB_APPLICATIONS: JobApplication[] = [
  {
    id: "job-1", // Added
    companyName: "TechCorp",
    position: "Frontend Developer", // Renamed
    date: new Date("2024-05-15"), // Renamed and converted
    status: "applied",
    notes:
      "Applied via LinkedIn. Role requires React, Redux, and TypeScript. Submitted resume and completed a short online form.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-2", // Added
    companyName: "Innovate Solutions",
    position: "Software Engineer", // Renamed
    date: new Date("2024-05-14"), // Renamed and converted
    status: "interview",
    notes:
      "Applied through their careers page. Focus on Node.js and AWS. Had an initial HR screening call, technical interview scheduled.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-3", // Added
    companyName: "Global Enterprises",
    position: "Full Stack Developer", // Renamed
    date: new Date("2024-05-12"), // Renamed and converted
    status: "rejected",
    notes:
      "Found on Indeed. Required Java, Spring Boot, and Angular. Received an automated rejection email after a week.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-4", // Added
    companyName: "Data Systems",
    position: "Data Analyst", // Renamed
    date: new Date("2024-05-10"), // Renamed and converted
    status: "applied",
    notes:
      "Applied directly on the company website. Job posting mentioned SQL, Python (Pandas, NumPy), and Tableau. Submitted resume and cover letter.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-5", // Added
    companyName: "CloudNet",
    position: "DevOps Engineer", // Renamed
    date: new Date("2024-05-09"), // Renamed and converted
    status: "interview",
    notes:
      "Referred by a former colleague. Role involves Kubernetes, Docker, and CI/CD pipelines (Jenkins). Passed the technical assessment, awaiting final interview.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-6", // Added
    companyName: "WebWorks",
    position: "UI/UX Designer", // Renamed
    date: new Date("2024-05-08"), // Renamed and converted
    status: "rejected",
    notes:
      "Applied via design portfolio site. Required Figma, Sketch, and user research experience. Received feedback that they went with a candidate with more mobile experience.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-7", // Added
    companyName: "Appify",
    position: "Mobile Developer (iOS)", // Renamed
    date: new Date("2024-05-05"), // Renamed and converted
    status: "applied",
    notes:
      "Found on AngelList. Startup environment, looking for Swift and SwiftUI expertise. Submitted resume and link to GitHub profile.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-8", // Added
    companyName: "CodeCrafters",
    position: "Backend Developer", // Renamed
    date: new Date("2024-05-02"), // Renamed and converted
    status: "offer",
    notes:
      "Applied through company portal. Tech stack: Python (Django), PostgreSQL, Docker. Completed coding challenge and multiple interview rounds. Received offer.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-9", // Added
    companyName: "NextGen Software",
    position: "QA Engineer", // Renamed
    date: new Date("2024-04-30"), // Renamed and converted
    status: "interview",
    notes:
      "Applied via LinkedIn Easy Apply. Focus on automated testing (Selenium, Cypress) and manual testing. Had a positive first interview.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-10", // Added
    companyName: "Quantum Computing Inc.",
    position: "Research Scientist", // Renamed
    date: new Date("2024-04-28"), // Renamed and converted
    status: "rejected",
    notes:
      "Highly specialized role found on academic job board. Required PhD and quantum algorithms knowledge. Application acknowledged but position filled internally.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-11", // Added
    companyName: "AI Dynamics",
    position: "Machine Learning Engineer", // Renamed
    date: new Date("2024-04-25"), // Renamed and converted
    status: "applied",
    notes:
      "Applied on their website. Need experience with TensorFlow/PyTorch, NLP, and cloud platforms. Submitted resume, cover letter, and project portfolio.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-12", // Added
    companyName: "SecureSoft",
    position: "Cybersecurity Analyst", // Renamed
    date: new Date("2024-04-22"), // Renamed and converted
    status: "interview",
    notes:
      "Found through a recruiter. Role involves threat detection, incident response, and SIEM tools. Passed initial screening and technical interview.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-13", // Added
    companyName: "FinTech Innovations",
    position: "Software Engineer (Trading Systems)", // Renamed
    date: new Date("2024-04-20"), // Renamed and converted
    status: "rejected",
    notes:
      "Applied via company website. High-frequency trading focus, C++ required. Received rejection email stating high volume of applicants.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-14", // Added
    companyName: "HealthTech Solutions",
    position: "Full Stack Developer", // Renamed
    date: new Date("2024-04-18"), // Renamed and converted
    status: "applied",
    notes:
      "Found on Wellfound (formerly AngelList). Stack: Ruby on Rails, React, PostgreSQL. HIPAA compliance knowledge is a plus. Submitted application.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-15", // Added
    companyName: "Green Energy Co.",
    position: "Data Scientist", // Renamed
    date: new Date("2024-04-15"), // Renamed and converted
    status: "interview",
    notes:
      "Applied through careers page. Focus on renewable energy forecasting using time series analysis (Python). Had HR call, technical round next.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-16", // Added
    companyName: "AutoDrive Systems",
    position: "Embedded Software Engineer", // Renamed
    date: new Date("2024-04-12"), // Renamed and converted
    status: "applied",
    notes:
      "Found on LinkedIn. Requires C/C++, RTOS experience, and familiarity with automotive standards (e.g., AUTOSAR). Submitted detailed application.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-17", // Added
    companyName: "Space Exploration Ltd.",
    position: "Aerospace Engineer", // Renamed
    date: new Date("2024-04-10"), // Renamed and converted
    status: "rejected",
    notes:
      "Applied directly. Highly competitive role requiring specific simulation software experience. Acknowledged application, later received rejection.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-18", // Added
    companyName: "Media Moguls",
    position: "Video Streaming Engineer", // Renamed
    date: new Date("2024-04-08"), // Renamed and converted
    status: "interview",
    notes:
      "Recruiter reached out on LinkedIn. Role involves CDN integration, video encoding (FFmpeg), and backend services (Go/Node.js). First technical interview completed.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-19", // Added
    companyName: "E-Commerce Hub",
    position: "Backend Engineer (PHP)", // Renamed
    date: new Date("2024-04-05"), // Renamed and converted
    status: "applied",
    notes:
      "Found on Stack Overflow Jobs. Requires PHP (Laravel/Symfony), MySQL, and experience with high-traffic sites. Submitted resume.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-20", // Added
    companyName: "GameDev Studios",
    position: "Unity Developer", // Renamed
    date: new Date("2024-04-02"), // Renamed and converted
    status: "rejected",
    notes:
      "Applied via company website with portfolio. Required C# and Unity engine expertise. Received feedback they needed more experience with mobile game optimization.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-21", // Added
    companyName: "Virtual Reality Labs",
    position: "Software Engineer (VR/AR)", // Renamed
    date: new Date("2024-03-30"), // Renamed and converted
    status: "applied",
    notes:
      "Found on specialized VR/AR job board. Requires C++, Unreal Engine/Unity, and 3D graphics programming. Submitted resume and project links.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-22", // Added
    companyName: "BioPharma Group",
    position: "Bioinformatics Scientist", // Renamed
    date: new Date("2024-03-28"), // Renamed and converted
    status: "interview",
    notes:
      "Applied through academic network. Requires Python, R, NGS data analysis tools. Completed initial screening and technical assessment.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-23", // Added
    companyName: "EduTech Platforms",
    position: "Instructional Designer", // Renamed
    date: new Date("2024-03-25"), // Renamed and converted
    status: "rejected",
    notes:
      "Applied via LinkedIn. Required experience with e-learning authoring tools (Articulate 360) and LMS platforms. Position put on hold.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-24", // Added
    companyName: "TravelWise Agency",
    position: "Frontend Developer", // Renamed
    date: new Date("2024-03-22"), // Renamed and converted
    status: "applied",
    notes:
      "Found on Indeed. Needs Vue.js, Nuxt.js, and experience with travel APIs. Submitted resume and cover letter.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-25", // Added
    companyName: "Foodie Network",
    position: "Content Manager", // Renamed
    date: new Date("2024-03-20"), // Renamed and converted
    status: "rejected",
    notes:
      "Applied through company website. Required strong writing skills, SEO knowledge, and food industry interest. Received standard rejection email.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-26", // Added
    companyName: "BuildRight Construction",
    position: "Project Manager", // Renamed
    date: new Date("2024-03-18"), // Renamed and converted
    status: "interview",
    notes:
      "Referred by contact. Requires PMP certification and experience with construction management software. Had initial interview, site visit scheduled.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-27", // Added
    companyName: "Design Masters",
    position: "Graphic Designer", // Renamed
    date: new Date("2024-03-15"), // Renamed and converted
    status: "applied",
    notes:
      "Applied via Behance. Requires Adobe Creative Suite (Illustrator, Photoshop, InDesign) and strong portfolio. Submitted portfolio link and resume.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-28", // Added
    companyName: "Marketing Gurus",
    position: "Digital Marketing Specialist", // Renamed
    date: new Date("2024-03-12"), // Renamed and converted
    status: "rejected",
    notes:
      "Applied on LinkedIn. Focus on SEM, SEO, and social media campaigns. They were looking for someone with more direct B2B experience.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-29", // Added
    companyName: "Legal Eagles",
    position: "Paralegal", // Renamed
    date: new Date("2024-03-10"), // Renamed and converted
    status: "interview",
    notes:
      "Applied through legal job board. Requires experience with case management software and legal research. Completed skills test and panel interview.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
  {
    id: "job-30", // Added
    companyName: "Finance Wizards",
    position: "Financial Analyst", // Renamed
    date: new Date("2024-03-05"), // Renamed and converted
    status: "offer",
    notes:
      "Found via university career center. Requires Excel mastery, financial modeling, and strong analytical skills. Multiple rounds of interviews, received offer.", // Renamed
    userId: TEMP_USER_ID, // Added
  },
];

export default TEMP_JOB_APPLICATIONS;
