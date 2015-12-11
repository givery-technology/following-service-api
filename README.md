# Following Service API

## Configurations
### Host
- protocol
  - http
- hostname
  - localhost
- port
  - 3000

### Database
- driver
  - sqlite3
- schema
  - specifications/database/create.sql
- database file
  - specifications/service.sqlite

## Endpoints
### Account
- Sign up
  - POST   /api/join
- Sign in
  - POST   /api/sessions
- Sign out
  - DELETE /api/sessions 

### Profile
- Read Profile
  - GET     /api/users/:id
- Update Profile
- PUT    /api/users/:id
- Delete Profile
  - DELETE /api/users/:id

### Following
- Follow
  - PUT    /api/user/following/:id
- Unfollow
  - DELETE /api/user/following/:id

### Pager
- Users List
  - GET    /api/users
- Followers List
  - GET    /api/users/:id/followers

## Additional Endpoints (if possible)

### Organization
- Create
  - POST   /api/organizations
- Read
  - GET    /api/organizations/:id
- Update
  - PUT    /api/organizations/:id
- Delete
  - DELETE /api/organizations/:id
