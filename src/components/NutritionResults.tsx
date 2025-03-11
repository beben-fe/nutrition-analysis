'use client';

import { NutritionAnalysisResponse, Nutrient } from '@/lib/api/nutritionApi';

interface NutritionResultsProps {
	data: NutritionAnalysisResponse | null;
}

export default function NutritionResults({ data }: NutritionResultsProps) {
	if (!data) return null;

	// Helper function to format nutrient values
	const formatNutrientValue = (nutrient: Nutrient) => {
		return `${Math.round(nutrient.quantity * 10) / 10} ${nutrient.unit}`;
	};

	// Get key nutrients for the summary section
	const calories = data.calories;
	const protein = data.totalNutrients.PROCNT;
	const fat = data.totalNutrients.FAT;
	const carbs = data.totalNutrients.CHOCDF;
	const fiber = data.totalNutrients.FIBTG;
	const sugar = data.totalNutrients.SUGAR;

	return (
		<div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mt-6">
			<h2 className="text-2xl font-bold mb-4 text-gray-800">
				Nutrition Analysis Results
			</h2>

			{/* Summary Section */}
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
				<div className="bg-blue-50 p-4 rounded-lg text-center">
					<h3 className="text-lg font-semibold text-blue-800">Calories</h3>
					<p className="text-2xl font-bold text-blue-600">{calories}</p>
				</div>

				{protein && (
					<div className="bg-green-50 p-4 rounded-lg text-center">
						<h3 className="text-lg font-semibold text-green-800">Protein</h3>
						<p className="text-2xl font-bold text-green-600">
							{formatNutrientValue(protein)}
						</p>
					</div>
				)}

				{fat && (
					<div className="bg-yellow-50 p-4 rounded-lg text-center">
						<h3 className="text-lg font-semibold text-yellow-800">Fat</h3>
						<p className="text-2xl font-bold text-yellow-600">
							{formatNutrientValue(fat)}
						</p>
					</div>
				)}

				{carbs && (
					<div className="bg-purple-50 p-4 rounded-lg text-center">
						<h3 className="text-lg font-semibold text-purple-800">Carbs</h3>
						<p className="text-2xl font-bold text-purple-600">
							{formatNutrientValue(carbs)}
						</p>
					</div>
				)}

				{fiber && (
					<div className="bg-indigo-50 p-4 rounded-lg text-center">
						<h3 className="text-lg font-semibold text-indigo-800">Fiber</h3>
						<p className="text-2xl font-bold text-indigo-600">
							{formatNutrientValue(fiber)}
						</p>
					</div>
				)}

				{sugar && (
					<div className="bg-red-50 p-4 rounded-lg text-center">
						<h3 className="text-lg font-semibold text-red-800">Sugar</h3>
						<p className="text-2xl font-bold text-red-600">
							{formatNutrientValue(sugar)}
						</p>
					</div>
				)}
			</div>

			{/* Diet Labels */}
			{data.dietLabels.length > 0 && (
				<div className="mb-6">
					<h3 className="text-lg font-semibold mb-2 text-gray-800">
						Diet Labels
					</h3>
					<div className="flex flex-wrap gap-2">
						{data.dietLabels.map((label) => (
							<span
								key={label}
								className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
								{label}
							</span>
						))}
					</div>
				</div>
			)}

			{/* Health Labels */}
			{data.healthLabels.length > 0 && (
				<div className="mb-6">
					<h3 className="text-lg font-semibold mb-2 text-gray-800">
						Health Labels
					</h3>
					<div className="flex flex-wrap gap-2">
						{data.healthLabels.map((label) => (
							<span
								key={label}
								className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
								{label}
							</span>
						))}
					</div>
				</div>
			)}

			{/* Cautions */}
			{data.cautions.length > 0 && (
				<div className="mb-6">
					<h3 className="text-lg font-semibold mb-2 text-gray-800">Cautions</h3>
					<div className="flex flex-wrap gap-2">
						{data.cautions.map((caution) => (
							<span
								key={caution}
								className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
								{caution}
							</span>
						))}
					</div>
				</div>
			)}

			{/* Detailed Nutrients */}
			<div>
				<h3 className="text-lg font-semibold mb-2 text-gray-800">
					Detailed Nutrients
				</h3>
				<div className="overflow-x-auto">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Nutrient
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Amount
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									% Daily Value
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{Object.entries(data.totalNutrients).map(([key, nutrient]) => {
								const dailyValue = data.totalDaily[key];

								return (
									<tr key={key}>
										<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
											{nutrient.label}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											{formatNutrientValue(nutrient)}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											{dailyValue
												? `${Math.round(dailyValue.quantity)}%`
												: 'N/A'}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
