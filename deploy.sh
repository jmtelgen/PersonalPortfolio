#!/bin/bash

# Exit on any error
set -e

echo "🚀 Starting deployment to AWS..."

# Build the React application
echo "📦 Building the application..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

echo "✅ Build completed successfully"

# Deploy to S3
echo "☁️  Deploying to S3 bucket: portfolioassetdistributionbucket"
aws s3 sync dist/ s3://portfolioassetdistributionbucket --delete

# Check if S3 sync was successful
if [ $? -eq 0 ]; then
    echo "✅ S3 deployment completed successfully"
else
    echo "❌ S3 deployment failed"
    exit 1
fi

# Invalidate CloudFront cache
echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
    --distribution-id E1UZDFBWHEJWRI \
    --paths "/*"

# Check if CloudFront invalidation was successful
if [ $? -eq 0 ]; then
    echo "✅ CloudFront invalidation completed successfully"
else
    echo "❌ CloudFront invalidation failed"
    exit 1
fi

echo "🎉 Deployment completed successfully!"
echo "🌐 Your portfolio should be live in a few minutes at your CloudFront URL"
