---
applyTo: '**'
---

# GitHub Copilot Instructions - Magic Forest

## 1. Project Overview & Tech Stack

### Project Overview

Magic Forest is a modern Angular web application for showcasing and managing party services, after-school programs, and gallery content. The application provides information about party offerings, pricing, rules, image galleries, and contact information for a children's entertainment and care facility.

### Technology Stack

- **Framework**: Angular 17.0.0
- **UI Library**: Bootstrap 5.3.2 with ng-bootstrap 16.0.0
- **Build Tool**: Angular CLI with Webpack
- **Language**: TypeScript 5.2.2
- **Styling**: SCSS with custom variables and typography
- **Icons**: Bootstrap Icons 1.11.3
- **Architecture**: Standalone components with file-based routing

## 2. Architecture & Structure

### High-Level Architecture

- Standalone component architecture (Angular 17+)
- Feature-based component organization
- Shared services for data management
- SCSS-based styling with abstracts for variables and typography

### Project Structure Pattern

```
src/app/
  app.component.ts         # Root component
  app.config.ts            # Application configuration
  app.routes.ts            # Route definitions
  header/                  # Header/navigation component
  footer/                  # Footer component
  dashboard/               # Main landing page
  gallery/                 # Image gallery component
  party-list/              # Party services listing
  price-list/              # Pricing information
  rules/                   # Rules and regulations
  contact/                 # Contact information
  after-school/            # After-school programs
  funds/                   # Funding information
  gdpr/                    # GDPR compliance
  page-not-found/          # 404 page
  shared/
    services/              # Shared services
      album.service.ts     # Gallery album management
      price.service.ts     # Pricing data management
src/assets/
  album/                   # Gallery images
  fonts/                   # Custom fonts (Brandon)
  icons/                   # Custom icons
src/scss/
  abstracts/
    _variables.scss        # SCSS variables
  base/
    _typography.scss       # Typography styles
```

## 3. Routing & Navigation

### Routing Pattern

The application uses Angular 17's standalone routing with file-based route definitions in [app.routes.ts](src/app/app.routes.ts).

**Current Routes:**
- `/` - Dashboard (landing page)
- `/dashboard` - Dashboard (landing page)
- `/gallery` - Image gallery
- `/party-list` - Party services
- `/rules` - Rules and regulations
- `/**` - 404 Page Not Found

### Navigation Structure

- Fixed header with navigation links
- Footer with additional information
- GDPR compliance component overlay
- Responsive design for mobile and desktop

## 4. Coding Standards & Best Practices

### Angular

- Use Angular Control Flow: `@if`, `@for`, `@switch` (not `*ngIf`, `*ngFor`, `*ngSwitch`)
- Use standalone components where appropriate (Angular 18+)
- Implement OnPush change detection for performance
- Use reactive forms with FormBuilder for complex forms
- Follow Angular style guide naming conventions
- Use dependency injection consistently
- Implement proper lifecycle hooks (OnInit, OnDestroy)
- Use lazy loading for feature modules
- Keep components focused and single-responsibility
- Prefer native Angular methods over NGXS when possible

#### TypeScript

- Enable strict mode in tsconfig.json
- Use explicit return types for public methods
- Implement proper interfaces for all data models
- Use enums for constants and status values
- Leverage generic types for reusable components
- Follow ESLint and Prettier configurations

#### RxJS

- Use takeUntil(destroy$) for subscription cleanup in ongoing streams
- Use take(1) for one-time subscriptions (e.g., single API calls or value retrievals)
- Implement shareReplay() for expensive operations
- Use switchMap() for dependent API calls
- Implement catchError() for error handling
- Use BehaviorSubject/ReplaySubject for state management
- Avoid nested subscribes: Use operators like switchMap, mergeMap, or concatMap
- Use filter() operator to filter out unwanted values
- Use tap() for side effects in the middle of operator chains
- Handle final results in subscribe.next: For end-of-chain side effects, use subscribe.next instead of tap
- Always use takeUntil(destroy$): Prevent memory leaks in components

**Subscription Cleanup Examples**

```typescript
// ✅ One-time subscription (auto-completes)
this.apiService
  .getData()
  .pipe(take(1))
  .subscribe((data) => {
    this.data = data;
  });

// ✅ Ongoing stream (component lifecycle)
this.apiService
  .getStream()
  .pipe(takeUntil(this.destroy$))
  .subscribe((data) => {
    this.data = data;
  });
```

**Avoid Nested Subscribes**

```typescript
// ❌ Bad - Nested subscribes
dialogRef.afterClosed().subscribe((result) => {
  if (result) {
    this.service.apiCall().subscribe((response) => {
      // Handle response
    });
  }
});

// ✅ Good - Operator chain
dialogRef
  .afterClosed()
  .pipe(
    filter((result) => !!result),
    switchMap(() => this.service.apiCall()),
    takeUntil(this.destroy$),
  )
  .subscribe((response) => {
    // Handle response
  });
```

**Use Appropriate Operators**

```typescript
dialogRef
  .afterClosed()
  .pipe(
    filter((result) => !!result),
    switchMap(() => this.service.restart()),
    switchMap((res) => {
      this.updateState(res);
      this.showSuccess();
      return this.service.reload(this.id);
    }),
    takeUntil(this.destroy$),
  )
  .subscribe({
    next: (updatedData) => {
      this.data = updatedData;
    },
    error: () => {
      this.showError();
    },
  });
```

**When to Use tap vs subscribe.next**

```typescript
// Use tap for side effects in the middle of chain
source$
  .pipe(
    tap((value) => console.log('Debug:', value)),
    map((value) => transform(value)),
    tap((value) => this.trackAnalytics(value)),
    switchMap((value) => this.service.process(value)),
  )
  .subscribe((result) => {
    // Handle final result
  });

// Use subscribe.next for final consumption
source$
  .pipe(
    switchMap((value) => this.service.process(value)),
    takeUntil(this.destroy$),
  )
  .subscribe({
    next: (result) => {
      this.updateUI(result);
      this.showNotification();
    },
  });
```

### Naming Conventions

- **Components**: PascalCase with .component suffix
- **Services**: PascalCase with .service suffix
- **Models**: PascalCase with .model suffix
- **Enums**: PascalCase with .enum suffix
- **Files**: kebab-case
- **Variables/Methods**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **CSS Classes**: kebab-case with Bootstrap utility classes

## 5. Component, Service & Model Patterns

### Component Pattern

```typescript
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.scss'],
})
export class ComponentNameComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();

  ngOnInit(): void {
    // Initialization logic
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
```

### Service Pattern

```typescript
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceNameService {
  // Service implementation
}
```

### Model Pattern

```typescript
export class ModelName {
  property: string;
  anotherProperty: number;
  optionalProperty?: boolean;
}

export interface InterfaceName {
  property: string;
  method(): void;
}
```

## 6. UI/UX Guidelines

### Bootstrap & ng-bootstrap Usage

- Use Bootstrap 5.3.2 utility classes for layout and spacing
- Apply ng-bootstrap components for interactive elements (modals, carousels, etc.)
- Use Bootstrap Icons for consistent iconography
- Implement responsive design with Bootstrap grid system
- Use Bootstrap form classes for consistent form styling

### Component Patterns

```html
<!-- Bootstrap Card Pattern -->
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Title</h3>
  </div>
  <div class="card-body">
    <p class="card-text">Content goes here</p>
  </div>
</div>

<!-- Bootstrap Button Pattern -->
<button type="button" class="btn btn-primary">
  <i class="bi bi-plus-circle"></i> Action
</button>

<!-- Bootstrap Modal Pattern (ng-bootstrap) -->
<ng-template #modalContent let-modal>
  <div class="modal-header">
    <h4 class="modal-title">Modal Title</h4>
    <button type="button" class="btn-close" (click)="modal.dismiss()"></button>
  </div>
  <div class="modal-body">
    <p>Modal content here</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" (click)="modal.close()">Close</button>
  </div>
</ng-template>
```

### Template Patterns with @if

```html
<!-- Conditional content display -->
@if (showContent) {
<div class="content">
  <p>Content visible when condition is true</p>
</div>
}

<!-- Multiple conditions -->
@if (user?.role === 'admin') {
<button class="btn btn-primary">Admin Action</button>
} @else if (user?.role === 'manager') {
<button class="btn btn-secondary">Manager Action</button>
} @else {
<button class="btn btn-secondary" disabled>No permissions</button>
}

<!-- Loading states -->
@if (isLoading) {
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
} @else {
<div class="loaded-content">
  <!-- Content when loaded -->
</div>
}

<!-- Error states -->
@if (hasError) {
<div class="alert alert-danger">
  <i class="bi bi-exclamation-triangle"></i>
  <span>{{ errorMessage }}</span>
</div>
}

<!-- Lists with conditions -->
@if (items.length > 0) {
<div class="items-list">
  @for (item of items; track item.id) {
  <div class="item">{{ item.name }}</div>
  }
</div>
} @else {
<div class="empty-state text-center">
  <i class="bi bi-inbox"></i>
  <p>No items available</p>
</div>
}
```

## 7. Development Practices

### State Management

- Use component state and services for data management
- Use Angular signals when appropriate (Angular 17+)
- Implement proper unsubscribe patterns with takeUntil or take(1)
- Keep state management simple and localized

### Memory Management

- Always implement OnDestroy for components with subscriptions
- Use takeUntil(this.destroy$) or take(1) for subscriptions
- Unsubscribe in ngOnDestroy

### Error Handling

- Implement proper form validation
- Show user-friendly error messages
- Handle API errors gracefully
- Use appropriate HTTP error handling

### Performance

- Use lazy loading for feature modules when needed
- Implement OnPush change detection when appropriate
- Optimize bundle size
- Use trackBy functions for @for loops

## 8. UI/UX Best Practices

### Responsive Design

- Use Bootstrap's responsive grid system
- Implement mobile-first approach
- Test on various screen sizes
- Use Bootstrap's responsive utility classes

### Accessibility

- Use semantic HTML elements
- Include proper ARIA labels when needed
- Ensure keyboard navigation works properly
- Test with screen readers

### Image Optimization

- Use appropriate image formats (WebP, JPEG, PNG)
- Implement lazy loading for gallery images
- Provide appropriate alt text for images
- Optimize image sizes for web

## 9. Code Generation Guidelines

### Components

When generating components, ensure you:

- Create proper folder structure
- Include proper imports and interfaces
- Implement lifecycle hooks appropriately
- Add proper TypeScript types
- Include basic error handling
- Use Bootstrap components and utilities
- Follow naming conventions
- Use standalone components (Angular 17+)

### Services

When generating services, ensure you:

- Use `providedIn: 'root'` for singleton services
- Include proper TypeScript return types
- Implement error handling
- Use dependency injection properly
- Return Observables for async operations

### Models

When generating models, ensure you:

- Use proper TypeScript types
- Include optional properties where appropriate
- Add JSDoc comments for complex properties
- Use interfaces for contracts, classes for data transfer

## 10. Testing Strategy

- Unit tests with Jasmine and Karma
- When generating code, structure it to be testable
- Keep components and services loosely coupled
- Use dependency injection for better testability
- Test critical user flows and business logic

## 11. Common Patterns & Snippets

### Service Data Pattern

```typescript
// Example from album.service.ts
export class AlbumService {
  getAlbums(): AlbumModel[] {
    return [
      // Array of data models
    ];
  }
}
```

### Component Initialization

```typescript
ngOnInit(): void {
  this.loadData();
}

private loadData(): void {
  this.data = this.dataService.getData();
}
```

### Routing Navigation

```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

navigateToGallery(): void {
  this.router.navigate(['/gallery']);
}
```

## 12. Productivity Tips

### Most Common Tasks

1. Components - Page components, feature components
2. Services - Data services, utility services
3. Models - Data models, interface definitions
4. Routing - Adding new routes to app.routes.ts
5. Styling - SCSS styling with Bootstrap utilities

### Code Consistency

- Always use the established project patterns
- Follow the folder structure conventions
- Use Bootstrap utilities before custom CSS
- Maintain consistent naming conventions
- Keep components focused and reusable

---

**Remember**: This is a showcase application for a children's entertainment facility. Focus on clean, maintainable code with excellent user experience and visual appeal.
