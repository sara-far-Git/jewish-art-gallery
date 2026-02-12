# Jewish Art Gallery 🎨

A full-stack web application for showcasing Jewish art paintings.

Built with:

- **Backend:** Django + Django REST Framework
- **Frontend:** Next.js (App Router)
- **Database:** SQLite (development)
- **Architecture:** Admin-managed content with public gallery display

---

## ✨ Project Overview

This platform allows an administrator to upload and manage paintings via Django Admin.

The public-facing frontend displays:

- A gallery of paintings
- Individual painting detail pages (coming next)
- Structured artwork data (title, description, image, story, verse, created date)

The system follows a clean separation:

- **Admin Panel → Content Management**
- **Frontend → Public Display Only**

No public uploads allowed.

---

## 🏗 Architecture

