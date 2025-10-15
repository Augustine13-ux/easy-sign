# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Local Development
```bash
npm run dev          # Start development server on port 3000
npm run build        # Build production bundle 
npm run preview      # Preview production build locally
```

### Installation
```bash
npm install          # Install dependencies
```

## Architecture Overview

### Core Structure
Easy Sign is a React + Vite application for file upload, processing, and results display. The application follows a render prop pattern with centralized state management.

**Key Architecture Patterns:**
- **Render Props**: `FileUploadManager` uses render props to share upload state across components
- **Custom Hooks**: `useFileUpload` encapsulates all upload logic and state management
- **Component Composition**: App.jsx orchestrates the main flow through component composition

### Main Application Flow
1. **FileUploadManager** (render prop provider) → manages upload state via `useFileUpload` hook
2. **Upload** component → handles file selection and upload initiation
3. **Progress** component → displays upload progress and status
4. **Results** component → shows processed file results

### Key Components

**FileUploadManager** (`src/components/FileUploadManager.jsx`)
- Render prop component that provides upload state and handlers
- Uses `useFileUpload` hook internally
- Central state management for the entire upload flow

**useFileUpload Hook** (`src/hooks/useFileUpload.js`)
- Manages upload state: `isUploading`, `status`, `progress`, `results`, `selectedFiles`
- Provides handlers: `handleFileSelect`, `handleUpload`, `resetUpload`
- Simulates upload progress and file processing
- Includes file size formatting utility

**Upload Component** (`src/components/Upload.jsx`)
- File input handling with multiple file support
- Selected file display with size information
- Upload button state management
- Uses constants from `src/constants/upload.js`

### Configuration & Constants
- **Upload constants** (`src/constants/upload.js`): Messages, status values, and timing configurations
- **Vite config**: Development server runs on port 3000 with auto-open browser

### Project Structure
```
src/
├── components/     # React components (Upload, Progress, Results, etc.)
├── hooks/         # Custom React hooks (useFileUpload)
├── constants/     # Application constants and configuration
├── App.jsx        # Main application component
└── main.jsx       # Application entry point
```