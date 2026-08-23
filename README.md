# Maira Kalan Welfare Society

Official frontend website for **Maira Kalan Welfare Society (Namli Maira)**, created to present the society's welfare activities, community initiatives, education support, projects, financial information, gallery, and ways to support the community.

## 🌐 Live Website

https://maira-kalan-welfare-society.netlify.app/

## 📖 About

Maira Kalan Welfare Society is a community-focused welfare organization serving the **Whole Namli Maira Community** through collective effort and welfare activities.

The website provides information about the society, its programs, projects, leadership, general body, founder members, former members, financial transparency, community activities, gallery, and support opportunities.

## ✨ Features

- Responsive design for mobile, tablet, and desktop
- Modern React-based single-page website
- Smooth section navigation
- Responsive mobile navigation menu
- Team dropdown navigation
- Active navigation states while scrolling
- Animated sections and counters
- Community programs and projects
- Leadership section
- General Body section
- Founder Members section
- Former Members section
- Yearly financial records from 2022 through 2026
- Financial transparency section
- Expenditure photo gallery
- Image lightbox with previous/next navigation
- Keyboard navigation for image lightboxes
- Community gallery
- Support / contribution section
- Contact information
- SEO-friendly metadata
- Open Graph metadata for social sharing
- X (Twitter) metadata
- Organization structured data using Schema.org
- Organization logo in structured data
- Favicon
- `sitemap.xml`
- `robots.txt`
- Optimized production build
- GitHub Pages deployment workflow

## 📑 Website Sections

- Home
- Introduction
- Programs
- Funds
- Leadership
- General Body
- Founder Members
- Former Members
- Projects
- Gallery
- Support
- Contact

## 🛠️ Tech Stack

- React.js
- Vite
- Tailwind CSS
- Lucide React
- Framer Motion
- JavaScript (ES Modules)

## 📁 Project Structure

    maira-kalan-welfare-society/
    ├── .github/
    │   └── workflows/
    │       └── deploy.yml
    │
    ├── public/
    │   ├── expenditures/
    │   ├── former-members/
    │   ├── founder-members/
    │   ├── gallery/
    │   ├── general-body/
    │   ├── team/
    │   ├── favicon.svg
    │   ├── google0af4702028cb7909.html
    │   ├── logo.jpeg
    │   ├── og-image.jpeg
    │   ├── robots.txt
    │   └── sitemap.xml
    │
    ├── src/
    │   ├── components/
    │   │   ├── Contact.jsx
    │   │   ├── Counter.jsx
    │   │   ├── FormerMembers.jsx
    │   │   ├── Funds.jsx
    │   │   ├── Gallery.jsx
    │   │   ├── GeneralBody.jsx
    │   │   ├── Hero.jsx
    │   │   ├── ImageLightbox.jsx
    │   │   ├── Introduction.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── Programs.jsx
    │   │   ├── Projects.jsx
    │   │   ├── Reveal.jsx
    │   │   ├── Support.jsx
    │   │   └── Team.jsx
    │   │
    │   ├── data/
    │   │   └── data.js
    │   │
    │   ├── assets/
    │   │   └── images/
    │   │
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    │
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    └── README.md

## 🚀 Getting Started

### 1. Clone the repository

    git clone https://github.com/Qasim-asb/maira-kalan-welfare-society.git

### 2. Navigate into the project

    cd maira-kalan-welfare-society

### 3. Install dependencies

    npm install

### 4. Start the development server

    npm run dev

The development server will provide a local URL, usually:

    http://localhost:5173/

## 📦 Available Scripts

### Development

    npm run dev

Starts the Vite development server.

### Lint

    npm run lint

Runs ESLint to check the source code.

### Production Build

    npm run build

Creates an optimized production build in:

    dist/

### Preview

    npm run preview

Previews the production build locally.

## 🚀 Deployment

The project includes a GitHub Actions workflow for GitHub Pages deployment:

    .github/workflows/deploy.yml

The workflow is triggered automatically when changes are pushed to the `main` branch.

It:

1. Checks out the repository
2. Sets up Node.js
3. Installs dependencies using `npm ci`
4. Builds the project using `npm run build`
5. Configures GitHub Pages
6. Uploads the production build
7. Deploys the build to GitHub Pages

The workflow can also be triggered manually through GitHub Actions.

## 💰 Financial Transparency

The Funds section presents the society's recorded financial activity from **2022 through 2026**.

It includes:

- Total funds collected
- Total expenditures
- Closing balance
- Yearly financial records
- Expenditure photographs

The yearly financial record presents the recorded funds collected for each year from **2022 through 2026**.

The financial information is presented for transparency regarding the society's recorded activities.

## 👥 Members

The Team navigation contains four sections:

### Leadership

The current leadership and office bearers of the society.

### General Body

Members of the society's General Body.

### Founder Members

Members who contributed to the foundation of the society.

### Former Members

Former members and previous committee members of the society.

## 🖼️ Gallery & Images

Community photographs are stored in:

    public/gallery/

Expenditure photographs are stored in:

    public/expenditures/

Member photographs are organized into:

    public/team/
    public/general-body/
    public/founder-members/
    public/former-members/

Gallery and financial image data is managed through:

    src/data/data.js

The website uses `ImageLightbox.jsx` to provide interactive image viewing with previous/next navigation and keyboard controls.

## 🖼️ Logo & Branding

The society logo is stored in:

    public/logo.jpeg

The logo is used in the website header and footer and is also included in the organization's structured data.

## 🔍 SEO

The website includes:

- Descriptive page title
- Meta description
- Author metadata
- Robots metadata
- Open Graph metadata
- X metadata
- Organization structured data using Schema.org
- Organization logo
- Favicon
- `sitemap.xml`
- `robots.txt`
- Google Search Console verification

The website has been submitted to Google Search Console, and the homepage is indexed by Google.

## 🎨 Design & Responsiveness

The website uses a modern, community-focused design with a responsive layout for:

- Mobile phones
- Tablets
- Laptops
- Desktop screens

The interface includes:

- Smooth scrolling
- Responsive navigation
- Team dropdown navigation
- Animated sections
- Interactive counters
- Responsive member sections
- Responsive yearly financial records
- Image lightboxes
- Previous/next image navigation
- Keyboard navigation

## 🤝 Community

This website is created for **Maira Kalan Welfare Society (Namli Maira)** to present its welfare activities, community initiatives, education support, humanitarian work, financial information, and collective efforts for the **Whole Namli Maira Community**.

---

© 2026 Maira Kalan Welfare Society ® Namli Maira. All rights reserved.