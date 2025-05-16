# JobTrackr

JobTrackr is a web application designed to help users efficiently manage and track their job applications. It provides a centralized dashboard to organize application details, monitor statuses, view recent activities, and gain insights into the job search process.

## Features

- **Dashboard Overview**: At-a-glance view of total applications, interview counts, response rates, and pending applications with weekly/monthly comparisons.
- **Application Management**: Add, edit, view details, and delete job applications, including company name, position, application date, status, and notes.
- **Status Tracking**: Easily update and visualize the status of each application (Applied, Interview, Offer, Rejected).
- **Recent Activity**: Quickly see upcoming interviews and recently submitted applications.
- **Search and Filtering**: Filter applications by status, date range, and search by keywords.
- **Pagination**: Efficiently navigate through a large number of applications.
- **User Authentication**: Secure sign-up and login functionality (e.g., via Google).
- **Responsive Design**: User-friendly interface accessible on various devices.

## Tech Stack

- **Core**: Next.js (App Router), React, TypeScript, TailwindCSS
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form, Zod (for validation)
- **Database**: Neon Postgres
- **Database ORM**: Drizzle ORM
- **Authentication**: `better-auth`
- **Typesafe Server Actions**: zsa

## Contributing

Contributions are welcome! If you have suggestions or find a bug, please open an issue or submit a pull request.

---

# todo

- [ ] add image/s to readme
- [ ] add metadata
- [ ] add more filters/way to order data in /dashboard/applications
