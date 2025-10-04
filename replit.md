# Apna Hisaab - WhatsApp Finance Tracker

## Overview

Apna Hisaab is a personal finance tracking application designed around WhatsApp messaging. The project is a landing page showcasing the product concept with a waitlist signup mechanism. The application features a minimalist, high-fashion editorial design inspired by luxury brands, using monochromatic colors and dramatic typography to create an expensive, simple aesthetic.

The landing page emphasizes the core value proposition: tracking personal expenses through WhatsApp without requiring a separate app, spreadsheets, or complex interfaces.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight routing library)
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: Radix UI primitives with shadcn/ui component system
- **Build Tool**: Vite

**Design System:**
- Custom monochromatic color palette (blacks, grays, off-whites)
- Typography hierarchy using Playfair Display, Libre Baskerville, Inter, and Space Mono
- Editorial grid layout with asymmetric balance
- Component-based architecture with reusable UI elements

**Component Structure:**
- Single-page application with modular sections (Hero, Value Proposition, Stats Showcase, Waitlist, Footer)
- Component library in `client/src/components/ui/` providing consistent UI patterns
- Custom styling using CSS variables for theme consistency across light/dark modes

### Backend Architecture

**Technology Stack:**
- **Runtime**: Node.js with Express
- **Language**: TypeScript
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (via Neon serverless)
- **Session Management**: connect-pg-simple

**Server Structure:**
- Express-based HTTP server with middleware for JSON parsing and URL encoding
- Route registration system with API prefix convention (`/api`)
- In-memory storage abstraction (`MemStorage`) with interface for future database implementation
- Development-only Vite middleware for hot module replacement
- Custom logging middleware tracking API request duration and responses

**Architecture Decisions:**
- **Storage Interface Pattern**: Defines `IStorage` interface allowing easy swapping between in-memory and database implementations
- **Separation of Concerns**: Routes, storage, and server setup are modularized into separate files
- **Development/Production Split**: Vite integration only in development; production serves static files

### Data Storage Solutions

**Current Implementation:**
- In-memory storage using JavaScript Map for user data
- UUID-based user identification

**Schema Design:**
- PostgreSQL schema defined using Drizzle ORM
- Users table with id (UUID), username (unique), and password fields
- Drizzle Kit configuration for migrations and schema management
- Ready for database integration (currently uses memory storage as placeholder)

**Migration Strategy:**
- Drizzle Kit migrations stored in `./migrations` directory
- Schema defined in `shared/schema.ts` for sharing between client and server
- Zod validation schemas generated from Drizzle schemas for runtime type checking

### External Dependencies

**Third-Party Services:**
- **Google Forms**: Waitlist collection via embedded form URL
- **Neon Database**: Serverless PostgreSQL provider (configured but not actively used)

**Key Libraries:**
- **UI Framework**: Radix UI for accessible, unstyled primitives
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod resolvers for validation
- **Styling**: Tailwind CSS with custom configuration, PostCSS
- **Date Utilities**: date-fns for date manipulation
- **Icons**: Lucide React for iconography

**Development Tools:**
- **Replit Plugins**: Runtime error modal, cartographer, dev banner (development only)
- **Build Tools**: esbuild for server bundling, Vite for client bundling
- **Type Checking**: TypeScript with strict mode enabled

**Authentication & Security:**
- No authentication currently implemented (landing page only)
- Session infrastructure configured via connect-pg-simple (prepared for future use)
- Password field in schema suggests future authentication implementation

### Deployment Considerations

**Build Process:**
- Client: Vite builds to `dist/public`
- Server: esbuild bundles to `dist/index.js` with ESM format
- Static file serving in production mode

**Environment Configuration:**
- Database URL expected via `DATABASE_URL` environment variable
- Node environment detection for development/production modes
- Replit-specific integrations conditionally loaded based on `REPL_ID` environment variable