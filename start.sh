#!/bin/bash
echo "🚀 Starting QuantumTube - Quantum Mechanics Learning Platform..."
echo "📍 Current directory: $(pwd)"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

echo "🎓 Starting QuantumTube development server..."
echo "🌐 The app will open at http://localhost:3000"
echo "⚡ Press Ctrl+C to stop the server"
echo ""

# Start the React app
npm start
