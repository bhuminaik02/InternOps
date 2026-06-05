# InternOps

Enterprise Workforce Management and Intern Operations Platform for structured intern operations, performance management, attendance tracking, task verification, reporting, and hierarchical workforce administration.

---

## Overview

InternOps is a centralized workforce management system designed for organizations operating with layered reporting structures.

The platform manages the complete lifecycle of intern operations including:

- User Management
- Department Management
- Hierarchy Management
- Attendance Tracking
- Performance Ratings
- Social Task Assignment
- Proof Submission & Verification
- Team Meetings
- Notifications
- Analytics & Reporting
- Session Management
- Audit Logging

The system enforces strict organizational hierarchy:

Admin → Senior TL → TL → Captain → Intern

Every request is validated through Authentication, Role-Based Access Control (RBAC), and Ownership Validation.

---

## Core Features

| Module | Description |
|----------|-------------|
| Authentication | Login, JWT, Refresh Tokens, Password Reset |
| Users | User Lifecycle Management |
| Departments | Organizational Departments |
| Hierarchy | Team Structure & Reporting Chains |
| Attendance | Daily Attendance & Statistics |
| Ratings | Performance Evaluation |
| Social Tasks | Assignment & Completion Tracking |
| Proof Verification | Screenshot Validation Workflow |
| Meetings | Scheduling & Attendance |
| Notifications | Event-Based User Alerts |
| Reports | Operational Reporting |
| Analytics | Organizational Insights |
| Sessions | Active Session Management |
| Audit Logs | Compliance & Traceability |
| Uptoskills Integration | Future Synchronization Layer |

---

## Technology Stack

| Layer | Technology |
|---------|-----------|
| Backend | Node.js |
| Framework | Fastify |
| Frontend | React 18 |
| Build Tool | Vite |
| Styling | TailwindCSS |
| Database | PostgreSQL |
| Cache | Redis (Optional) |
| Authentication | JWT + Argon2 |
| Validation | Zod |
| Documentation | Swagger/OpenAPI |
| Logging | Pino |
| Version Control | Git & GitHub |

---

## Architecture

### High Level Architecture

`	ext
┌──────────────────────────────────────────┐
│                 CLIENTS                  │
├──────────────────────────────────────────┤
│ React SPA │ Browser │ API Consumers      │
└────────────────────┬─────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────┐
│              FASTIFY SERVER              │
└────────────────────┬─────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────┐
│           SECURITY PIPELINE              │
├──────────────────────────────────────────┤
│ JWT Authentication                       │
│ RBAC Authorization                       │
│ Ownership Validation                     │
│ CSRF Protection                          │
│ Rate Limiting                            │
│ Input Sanitization                       │
└────────────────────┬─────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────┐
│             BUSINESS MODULES             │
├──────────────────────────────────────────┤
│ Users          Attendance                │
│ Ratings        Meetings                  │
│ Tasks          Notifications             │
│ Reports        Analytics                 │
│ Sessions       Audit                     │
└────────────────────┬─────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────┐
│           REPOSITORY LAYER               │
└────────────────────┬─────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────┐
│ PostgreSQL │ Redis(Optional) │ FileStore │
└──────────────────────────────────────────┘
`

---

## Request Lifecycle

`	ext
Client Request
      │
      ▼
Fastify Route
      │
      ▼
Authentication
      │
      ▼
RBAC Validation
      │
      ▼
Ownership Validation
      │
      ▼
Business Logic
      │
      ▼
Repository Layer
      │
      ▼
PostgreSQL
      │
      ▼
Response
`

---

## Security Model

InternOps follows a defense-in-depth approach.

### Authentication

- JWT Access Tokens
- Refresh Token Rotation
- Session Revocation
- Password Reset Flow
- Argon2 Password Hashing

### Authorization

- Role-Based Access Control
- Ownership Validation
- Hierarchical Permission Checks

### Security Controls

- Helmet Security Headers
- CSRF Protection
- Rate Limiting
- Input Sanitization
- SQL Injection Prevention
- Brute Force Protection
- Audit Logging
- Soft Deletes

---

## Hierarchy Model

| Role | Responsibility |
|--------|---------------|
| Admin | Full System Control |
| Senior TL | Department Oversight |
| TL | Team Management |
| Captain | Direct Intern Supervision |
| Intern | Individual Operations |

Ownership validation ensures users can access only resources inside their reporting chain.

---

## Major Modules

### Authentication

- Login
- Logout
- Refresh Tokens
- Password Reset
- Session Revocation

### User Management

- Registration
- Profile Updates
- Suspension
- Activation
- Soft Delete

### Attendance

- Single Attendance
- Bulk Attendance
- Monthly Statistics
- Attendance History

### Ratings

- Historical Ratings
- Score Tracking
- Remarks
- Performance Analytics

### Social Tasks

- Task Creation
- Deadlines
- Assignment Tracking
- Completion Monitoring

### Proof Verification

- Screenshot Upload
- Verification Workflow
- Status Tracking

### Meetings

- Meeting Scheduling
- Attendee Management
- Visibility Controls

### Notifications

- Real-Time Events
- Read/Unread Tracking
- Bulk Read Operations

### Reports

- Attendance Summary
- Ratings Summary
- Task Completion
- CSV Export

### Audit Logs

- User Actions
- Resource Changes
- IP Tracking
- User Agent Tracking

---

## Database Overview

### Core Tables

| Table | Purpose |
|---------|---------|
| users | Platform Users |
| departments | Departments |
| attendance | Attendance Records |
| ratings | Performance Ratings |
| social_tasks | Task Management |
| proof_submissions | Verification Workflow |
| notifications | User Notifications |
| meetings | Scheduled Meetings |
| meeting_attendees | Meeting Participants |
| refresh_tokens | Session Storage |
| login_attempts | Brute Force Protection |
| audit_logs | Security Audit Trail |

### Database Design Principles

- UUID Primary Keys
- Foreign Key Constraints
- Soft Deletes
- Indexed Relationships
- Parameterized Queries
- Transaction Support

---

## API Modules

| Module | Endpoint |
|----------|----------|
| Auth | /api/auth |
| Users | /api/users |
| Departments | /api/departments |
| Hierarchy | /api/hierarchy |
| Attendance | /api/attendance |
| Ratings | /api/ratings |
| Tasks | /api/tasks |
| Proofs | /api/proofs |
| Meetings | /api/meetings |
| Notifications | /api/notifications |
| Analytics | /api/analytics |
| Reports | /api/reports |
| Sessions | /api/sessions |
| Audit | /api/audit |
| Uptoskills | /api/uptoskills |

Swagger Documentation:

http://localhost:5000/docs

---

## Project Structure

`	ext
InternOps
│
├── backend
│   ├── migrations
│   ├── seeds
│   ├── src
│   │   ├── config
│   │   ├── middleware
│   │   ├── modules
│   │   ├── services
│   │   ├── utils
│   │   └── app.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── store
│   │   └── lib
│   └── package.json
│
├── docs
├── scripts
└── README.md
`

---

## Environment Variables

| Variable | Required |
|-----------|-----------|
| DATABASE_URL | Yes |
| JWT_SECRET | Yes |
| PORT | No |
| NODE_ENV | No |
| CORS_ORIGIN | No |
| UPSTASH_REDIS_REST_URL | No |
| UPSTASH_REDIS_REST_TOKEN | No |
| UPTOSKILLS_API_KEY | No |
| UPTOSKILLS_BASE_URL | No |

---

## Quick Start

### Install Dependencies

`ash
git clone https://github.com/rajat-wyrm/InternOps.git

cd InternOps/backend
npm install

cd ../frontend
npm install
`

### Configure Environment

`ash
cp backend/.env.example backend/.env
`

### Run Migrations

`ash
cd backend

npm run migrate
npm run seed
`

### Start Backend

`ash
npm run dev
`

### Start Frontend

`ash
cd frontend

npm run dev
`

---

## Deployment

### Recommended Stack

- Ubuntu Server
- Node.js 18+
- PostgreSQL
- Redis
- Nginx
- PM2

### PM2

`ash
pm2 start backend/src/app.js --name internops
pm2 save
pm2 startup
`

---

## Performance

- PostgreSQL Connection Pooling
- Indexed Foreign Keys
- Transaction-Based Bulk Operations
- JWT Stateless Authentication
- Redis Session Caching
- Optimized Repository Pattern

---

## Scalability

InternOps is designed to scale through:

- Horizontal Backend Scaling
- Database Read Replicas
- Redis Caching Layer
- CDN Frontend Delivery
- External Object Storage
- Load Balancer Integration

---

## Future Roadmap

- Uptoskills Synchronization
- Email Notifications
- Mobile Application
- Real-Time WebSockets
- Advanced Analytics
- Department Dashboards
- AI-Based Performance Insights

---

## License

Proprietary Software.

All Rights Reserved.

---

## Maintainer

Rajat Wyrm

GitHub:
https://github.com/rajat-wyrm/InternOps