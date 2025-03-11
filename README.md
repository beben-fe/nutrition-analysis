# Nutrition Analysis App

A responsive web application for analyzing the nutritional content of food items and recipes. Built with Next.js, Tailwind CSS, and TanStack React Query.

## Features

- Analyze the nutritional content of any food item or recipe
- View detailed nutrition information including calories, macronutrients, vitamins, and minerals
- Responsive design for mobile, tablet, and desktop
- Real-time analysis using the Edamam Nutrition Analysis API

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TanStack React Query](https://tanstack.com/query/latest) - Data fetching and state management
- [Edamam Nutrition Analysis API](https://developer.edamam.com/edamam-docs-nutrition-api) - Nutrition data provider

## Getting Started

### Prerequisites

- Node.js 18.x or later
- yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nutrition-analysis.git
   cd nutrition-analysis
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your Edamam API credentials:
   ```
   NEXT_PUBLIC_EDAMAM_APP_ID=your_app_id_here
   NEXT_PUBLIC_EDAMAM_APP_KEY=your_app_key_here
   ```
   
   You can obtain these credentials by signing up at [Edamam Developer Portal](https://developer.edamam.com/).

4. Start the development server:
   ```bash
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Enter a food item, ingredient, or recipe in the input field.
2. Click the "Analyze Nutrition" button.
3. View the detailed nutrition information in the results section.

## Deployment

This application can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fnutrition-analysis)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Edamam](https://www.edamam.com/) for providing the Nutrition Analysis API
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
