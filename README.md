# 📊 Personal Finance Dashboard

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Framework](https://img.shields.io/badge/framework-Next.js-000000.svg)
![Language](https://img.shields.io/badge/language-TypeScript-007ACC.svg)
![CSS](https://img.shields.io/badge/css-TailwindCSS-38B2AC.svg)

## 🎯 Objectives

The **Personal Finance Dashboard** aims to provide users with an efficient tool for tracking and managing their personal finances. With its user-friendly interface and convenient sidebar navigation, this web application allows users to easily access different pages such as Home, Wallet, and Settings.

### Key Features

- 📈 **Interactive Charts**: Visualize financial data using pie charts and other graphical representations.
- 📁 **Data Management**: Simple data management using JSON files for demonstration purposes.
- ⚙️ **Customizable UI**: TailwindCSS for easy and flexible UI customization.
- 🔄 **Real-Time Data Fetching**: Implement real-time data fetching for financial data.
- 💰 **Budget Tracking**: Implement budget tracking and expense categorization.
- 📱 **Mobile Responsiveness**: Improve mobile responsiveness and accessibility.
- 🎨 **Animations and Transitions**: Add animations and transitions for a smoother user experience.
- ✅ **Testing**: Write unit and integration tests for all components. Perform end-to-end testing to ensure application stability.

## ✅ Completed Tasks

- **Project Initialization**

  - Set up a Next.js project with TypeScript support.
  - Integrated TailwindCSS for styling.

- **Component Development**

  - Created a `RootLayout` component with a sidebar.
  - Developed a `PieChart` component using Chart.js to display pie charts.
  - Added a `PieCard` component to manage and display the chart data.

- **Routing and Navigation**

  - Implemented client-side routing using `next/link` for seamless navigation.
  - Configured basic pages: Home, News, and Settings.

- **Styling**

  - Applied TailwindCSS for responsive and modern design.
  - Utilized global CSS for consistent styling across the application.

- **Data Integration**

  - Implemented real-time data fetching for financial data.
  - Integrated with an external API for dynamic data updates.

- **Authentication**

  - Added user authentication and authorization to secure personal data.

- **Advanced Features**

  - Implemented budget tracking and expense categorization.
  - Developed detailed analytics and reporting features.

- **UI Enhancements**

  - Improved mobile responsiveness and accessibility.
  - Added animations and transitions for a smoother user experience.

- **Testing**
  - Wrote unit and integration tests for all components.
  - Performed end-to-end testing to ensure application stability.

## 🛠️ Installation and Setup

1. **Clone the Repository**

   ```sh
   git clone https://github.com/yourusername/personal-finance-dashboard.git
   cd personal-finance-dashboard
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Run the Development Server**

   ```sh
   npm run dev
   ```

4. **Open in Browser**

   Open http://localhost:3000 to see the application.

## 🚀 Usage

- **Home Page**: View a summary of your financial status.
- **News Page**: Stay updated with the latest financial news.
- **Settings Page**: Customize your dashboard settings.

## 📂 Project Structure

```plaintext
.
├── .eslintrc.json
├── .gitignore
├── .next
│   ├── app-build-manifest.json
│   ├── build-manifest.json
│   ├── cache
│   │   ├── swc
│   │   └── webpack
│   ├── fallback-build-manifest.json
│   ├── react-loadable-manifest.json
│   └── server
│       ├── _error.js
│       ├── app
│       ├── app-paths-manifest.json
│       ├── interception-route-rewrite-manifest.js
│       ├── middleware-build-manifest.js
│       └── middleware-manifest.json
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── public
├── README.md
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── balanceCard.tsx
│   │   │   ├── databaseInterface.tsx
│   │   │   ├── lineGraph.tsx
│   │   │   ├── pieCard.tsx
│   │   │   ├── pieGraph.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── wideCard.tsx
│   │   ├── context
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── data
│   │   └── data.json
│   └── ...
├── tailwind.config.ts
├── tsconfig.json
└── ...
```

## 📜 License

This project is licensed under the MIT License (not actually). See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [DreoX](https://github.com/SPoretti)
