#!/bin/bash

echo "🔍 QuantumTube Debug and Fix Script"
echo "=================================="

# Check current directory
echo "📍 Current directory: $(pwd)"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the quantum-mechanics-tube directory"
    echo "💡 Run: cd quantum-mechanics-tube"
    exit 1
fi

echo "✅ Found package.json"

# Check Node.js and npm
echo "🔧 Checking dependencies..."
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Check what's running on port 3000
echo "🔍 Checking what's running on port 3000..."
lsof -ti:3000 && echo "⚠️  Something is already running on port 3000" || echo "✅ Port 3000 is free"

# Kill any process on port 3000
echo "🚫 Killing any process on port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || echo "✅ No process to kill"

# Clean install
echo "🧹 Cleaning and reinstalling dependencies..."
rm -rf node_modules package-lock.json
npm install

# Start the app
echo "🚀 Starting React development server..."
echo "📝 This should open http://localhost:3000 with the QuantumTube app"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

npm start
