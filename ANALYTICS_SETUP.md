# Google Analytics Setup Guide

This guide will help you set up Google Analytics 4 (GA4) to track visits and view geographic data on your portfolio website.

## Features

- ✅ Track total visits and page views
- ✅ View geographic data (map of visitor locations)
- ✅ Page-level analytics
- ✅ No major code reworks required
- ✅ Works with static Next.js exports

## Setup Steps

### 1. Create a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" or "Admin" → "Create Account"

### 2. Create a Property

1. In Google Analytics, go to **Admin** (gear icon in bottom left)
2. Under **Property**, click **Create Property**
3. Enter your property name (e.g., "Portfolio Website")
4. Configure your timezone and currency
5. Click **Next**

### 3. Set Up a Data Stream

1. Select **Web** as the platform
2. Enter your website URL (e.g., `https://yourwebsite.com`)
3. Enter a stream name (e.g., "Portfolio Website")
4. Click **Create stream**

### 4. Get Your Measurement ID

1. After creating the stream, you'll see a **Measurement ID** (starts with `G-`)
2. Copy this ID (e.g., `G-XXXXXXXXXX`)

### 5. Configure Your Website

1. Create a file named `.env.local` in the root of your project
2. Add your Measurement ID:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

3. Save the file and restart your development server if running

### 6. Build and Deploy

After adding your Measurement ID, rebuild your site:

```bash
npm run build
```

The analytics will automatically start tracking when you deploy the updated site.

## Viewing Your Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. View reports in the left sidebar:
   - **Realtime**: See current visitors
   - **Reports** → **Acquisition** → **User acquisition**: See total visits
   - **Reports** → **User** → **Tech details** → **Geo**: See geographic data and map

## Geographic Data / Map View

To see the map of where visitors are from:

1. In Google Analytics, go to **Reports** (left sidebar)
2. Click **Reports** → **User** → **Tech details**
3. Click on **Geo** tab
4. You'll see:
   - Countries, cities, and regions
   - A map visualization
   - Number of users per location

## Custom Event Tracking (Optional)

If you want to track custom events (e.g., CV downloads, project clicks), you can use the utility functions in `lib/gtag.ts`:

```typescript
import { event } from '../lib/gtag';

// Example: Track a CV download
event({
  action: 'download',
  category: 'CV',
  label: 'PDF Download',
});
```

## Troubleshooting

- **Analytics not showing data**: Wait 24-48 hours for initial data, or check the Realtime report for immediate verification
- **Measurement ID not working**: Make sure it starts with `G-` and you've restarted your dev server after adding it to `.env.local`
- **No geographic data**: Geographic data may take some time to populate and requires a minimum number of visitors

## Privacy Note

Google Analytics automatically respects user privacy settings like Do Not Track. The implementation uses the standard GA4 configuration which complies with privacy regulations.
