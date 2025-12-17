# Magic Forest 🌲✨

A modern Angular web application for managing and showcasing party services, after-school programs, and gallery content.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Testing](#testing)
- [Building](#building)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Technology Stack](#technology-stack)

## 🔧 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.x or later) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Angular CLI** (version 17.x) - Install globally: `npm install -g @angular/cli`
- **Git** - [Download here](https://git-scm.com/)

Verify your installation:

```bash
node --version
npm --version
ng version
```

## 🚀 Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd magic-forest
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Verify installation:**
   ```bash
   ng version
   ```

## 💻 Development

### Starting the Development Server

Run the development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you change source files.

### Development Workflow

1. **Create a new feature branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Generate new components:**

   ```bash
   ng generate component components/your-component-name
   ```

3. **Generate services:**

   ```bash
   ng generate service shared/services/your-service-name
   ```

4. **Code and test your changes**

5. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

## 🧪 Testing

### Running Unit Tests

```bash
npm test
# or
ng test
```

Tests will run in watch mode using [Karma](https://karma-runner.github.io) and Jasmine.

### Running Tests in CI Mode

```bash
ng test --watch=false --browsers=ChromeHeadless
```

### Code Coverage

```bash
ng test --code-coverage
```

View coverage report in `coverage/` directory.

## 🏗️ Building

### Development Build

```bash
ng build
```

### Production Build

```bash
ng build --configuration production
```

Build artifacts will be stored in the `dist/magic-forest/` directory.

## 🚀 Deployment

### Static Hosting (Recommended)

The application can be deployed to any static hosting service:

- **Netlify:** Drag and drop the `dist/magic-forest` folder
- **Vercel:** Connect your repository and deploy automatically
- **GitHub Pages:** Use `ng deploy` with `angular-cli-ghpages`

### Manual Deployment

1. Build for production:

   ```bash
   ng build --configuration production
   ```

2. Upload the contents of `dist/magic-forest/` to your web server

## 📁 Project Structure

```
src/
├── app/
│   ├── components/           # Feature components
│   │   ├── dashboard/        # Dashboard component
│   │   ├── gallery/          # Photo gallery
│   │   ├── contact/          # Contact form
│   │   ├── party-list/       # Party services
│   │   ├── after-school/     # After-school programs
│   │   ├── price-list/       # Pricing information
│   │   ├── funds/            # Funding information
│   │   ├── rules/            # Rules and regulations
│   │   ├── gdpr/             # GDPR compliance
│   │   ├── header/           # Navigation header
│   │   ├── footer/           # Site footer
│   │   └── page-not-found/   # 404 error page
│   ├── shared/
│   │   └── services/         # Shared services
│   │       ├── album.service.ts
│   │       └── price.service.ts
│   ├── app.component.*       # Root component
│   ├── app.config.ts         # App configuration
│   └── app.routes.ts         # Routing configuration
├── assets/                   # Static assets
│   ├── album/                # Gallery images
│   ├── fonts/                # Custom fonts
│   └── icons/                # PWA icons
├── scss/                     # Global styles
│   ├── abstracts/
│   │   └── _variables.scss   # SCSS variables
│   └── base/
│       └── _typography.scss  # Typography styles
└── styles.scss               # Global stylesheet
```

## 🛠️ Technology Stack

- **Framework:** Angular 17
- **Language:** TypeScript 5.2
- **Styling:** SCSS + Bootstrap 5.3
- **Icons:** Bootstrap Icons
- **Testing:** Jasmine + Karma
- **Build Tool:** Angular CLI
- **Package Manager:** npm

## 🎨 UI/UX Guidelines

- **Responsive Design:** Mobile-first approach
- **Bootstrap Components:** Use ng-bootstrap components
- **Color Scheme:** Defined in `src/scss/abstracts/_variables.scss`
- **Typography:** Custom fonts in `src/assets/fonts/brandon/`
- **Icons:** Bootstrap Icons for consistency

## 📱 Progressive Web App (PWA)

The app includes PWA features:

- Service worker for offline functionality
- App manifest for installation
- Optimized icons for different platforms

## 🔒 Security & Privacy

- GDPR compliance page included
- No sensitive data stored in localStorage
- Secure routing practices

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**

   ```bash
   ng serve --port 4201
   ```

2. **Node modules issues:**

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Angular CLI version mismatch:**
   ```bash
   npm uninstall -g @angular/cli
   npm install -g @angular/cli@17
   ```

### Getting Help

- Check the [Angular Documentation](https://angular.io/docs)
- Review [Angular Style Guide](https://angular.io/guide/styleguide)
- Join [Angular Discord](https://discord.gg/angular)

## 📄 Additional Documentation

- [Contributing Guidelines](./CONTRIBUTING.md)
- [Angular CLI Documentation](https://angular.io/cli)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)

## 📞 Support

For project-specific questions or issues, please create an issue in the repository or contact the development team.

---

**Made with ❤️ using Angular**

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
