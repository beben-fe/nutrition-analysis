'use client';

import { useState } from 'react';
import NutritionForm from '@/components/NutritionForm';
import NutritionResults from '@/components/NutritionResults';
import { NutritionAnalysisResponse } from '@/lib/api/nutritionApi';

export default function Home() {
	const [nutritionData, setNutritionData] =
		useState<NutritionAnalysisResponse | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleAnalysisComplete = (data: NutritionAnalysisResponse) => {
		setNutritionData(data);
		setIsLoading(false);
	};

	const handleAnalysisStart = () => {
		setIsLoading(true);
		// Reset previous results when starting a new analysis
		setNutritionData(null);
	};

	return (
		<div className="space-y-8">
			<section className="text-center mb-8">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
					Nutrition Analysis Tool
				</h1>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
					Enter any food item, ingredient, or recipe to get detailed nutrition
					information. Powered by the Edamam Nutrition Analysis API.
				</p>
			</section>

			<NutritionForm
				onAnalysisComplete={handleAnalysisComplete}
				onAnalysisStart={handleAnalysisStart}
			/>

			{isLoading && (
				<div className="flex justify-center my-12">
					<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
				</div>
			)}

			{nutritionData && <NutritionResults data={nutritionData} />}

			<section className="bg-white rounded-lg shadow-md p-6 mt-8">
				<h2 className="text-xl font-bold mb-4 text-gray-800">How It Works</h2>
				<div className="grid md:grid-cols-3 gap-6">
					<div className="bg-blue-50 p-4 rounded-lg">
						<div className="text-blue-600 font-bold text-xl mb-2">
							1. Enter Food
						</div>
						<p className="text-gray-700">
							Type in any food item, ingredient list, or complete recipe. You
							can include quantities and measurements.
						</p>
					</div>
					<div className="bg-blue-50 p-4 rounded-lg">
						<div className="text-blue-600 font-bold text-xl mb-2">
							2. Analyze
						</div>
						<p className="text-gray-700">
							Our system processes your input using natural language processing
							to identify food entities.
						</p>
					</div>
					<div className="bg-blue-50 p-4 rounded-lg">
						<div className="text-blue-600 font-bold text-xl mb-2">
							3. Get Results
						</div>
						<p className="text-gray-700">
							View detailed nutrition information, including calories,
							macronutrients, vitamins, and minerals.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
