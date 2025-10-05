# apna hisaab - WhatsApp Finance Tracker

## Overview

apna hisaab is a personal finance management application that enables users to track their spending through WhatsApp. The application features a luxury editorial-style landing page inspired by high-fashion design principles (Zara, Vogue) with minimalist aesthetics and dramatic typography. The project is built as a full-stack TypeScript application with React frontend and Express backend, designed to collect waitlist signups before launch.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server with HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing instead of React Router
- **React Query** (@tanstack/react-query) for server state management and data fetching

**UI Component System**
- **shadcn/ui** component library with Radix UI primitives for accessible, unstyled components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **class-variance-authority** and **clsx** for dynamic className composition
- Component architecture follows the "New York" shadcn style variant

**Design System**
- Monochromatic luxury color palette (charcoal blacks, off-whites, muted greys)
- Editorial typography hierarchy using Playfair Display, Libre Baskerville, Inter, and Space Mono
- Design guidelines documented in `design_guidelines.md` emphasizing minimalist, high-fashion aesthetics
- Custom CSS variables for theme consistency (backgrounds, borders, elevation states)

**State Management Approach**
- Local component state with React hooks
- Server state managed through React Query with configured stale times and refetch policies
- No global state management library (Redux/Zustand) - intentionally lightweight

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for API endpoints
- Custom logging middleware for request/response tracking
- Development and production build separation using esbuild

**Database Layer**
- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** via Neon serverless driver (@neondatabase/serverless)
- Schema-first approach with Zod validation integration (drizzle-zod)
- Database schema defined in `shared/schema.ts` for code sharing between client/server

**Storage Interface Pattern**
- Abstract `IStorage` interface defined in `server/storage.ts`
- `MemStorage` in-memory implementation for development/testing
- Design allows easy swapping to database-backed implementation without changing route handlers
- CRUD operations abstracted: `getUser`, `getUserByUsername`, `createUser`

**Data Schema**
- **Users table**: UUID primary keys, unique usernames, password storage
- Schema uses `drizzle-zod` for automatic validation schema generation
- Type exports (`User`, `InsertUser`) shared across frontend/backend boundary

### Project Structure

**Monorepo Organization**
- `client/` - Frontend React application
- `server/` - Backend Express application  
- `shared/` - Shared TypeScript types and schemas
- Path aliases configured: `@/` for client code, `@shared/` for shared code

**Build & Development**
- Development: Single command runs Vite dev server + Express with tsx
- Production: Vite builds static assets, esbuild bundles server code
- TypeScript strict mode enabled across entire codebase

### External Dependencies

**Third-Party Services**
- **Google Forms** for waitlist collection (temporary solution before backend implementation)
- Form URL: `https://docs.google.com/forms/d/e/1FAIpQLSdhiT6cSqhZ7nBSALNQNUrJ3eQ7HWFuupEC8mRAXywhAH0d3w/viewform`

**Database**
- **Neon Serverless PostgreSQL** (indicated by `@neondatabase/serverless` dependency)
- Connection string expected via `DATABASE_URL` environment variable
- Drizzle Kit configured for migrations in `./migrations` directory

**UI Component Libraries**
- **Radix UI** primitives (20+ component packages) for accessible headless components
- All Radix components wrapped in custom shadcn/ui implementations
- Icons via **Lucide React**

**Development Tools**
- **Replit-specific plugins**: Runtime error overlay, cartographer (code navigation), dev banner
- **date-fns** for date manipulation
- **nanoid** for unique ID generation

**Font Loading**
- Google Fonts preconnect for performance
- Custom fonts: Architects Daughter, DM Sans, Fira Code, Geist Mono (referenced in HTML but URLs truncated)

### Key Architectural Decisions

**Why Wouter over React Router?**
- Lightweight (1.5KB) routing solution
- Sufficient for simple landing page navigation
- Reduces bundle size significantly

**Why In-Memory Storage?**
- Application currently only needs waitlist functionality (handled by Google Forms)
- MemStorage provides clean interface for future database migration
- Allows backend development without database dependency during early stages

**Why Monochromatic Design System?**
- Brand positioning as luxury/premium finance tool
- Differentiates from typical colorful fintech apps
- Aligns with target aesthetic of editorial simplicity

**Why React Query?**
- Built-in caching, refetching, and loading states
- Reduces boilerplate for API calls
- Configurable stale time strategy (currently set to `Infinity` for static content)

**Why Drizzle over Prisma?**
- Lighter weight ORM with better TypeScript inference
- Schema-first approach with direct SQL access when needed
- Zod integration for unified validation strategy