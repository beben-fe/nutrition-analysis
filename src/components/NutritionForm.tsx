'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
	analyzeFoodItem,
	NutritionAnalysisResponse,
} from '@/lib/api/nutritionApi';

interface NutritionFormProps {
	onAnalysisComplete: (data: NutritionAnalysisResponse) => void;
	onAnalysisStart: () => void;
}

export default function NutritionForm({
	onAnalysisComplete,
	onAnalysisStart,
}: NutritionFormProps) {
	const [ingredient, setIngredient] = useState('');

	const { mutate, isPending, isError, error } = useMutation({
		mutationFn: analyzeFoodItem,
		onSuccess: (data) => {
			onAnalysisComplete(data);
		},
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!ingredient.trim()) return;

		onAnalysisStart();
		mutate(ingredient);
	};

	return (
		<div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
			<h2 className="text-xl font-bold mb-4 text-gray-800">
				Nutrition Analysis
			</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label
						htmlFor="ingredient"
						className="block text-sm font-medium text-gray-700 mb-1">
						Enter Food Item or Recipe
					</label>
					<textarea
						id="ingredient"
						rows={4}
						className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						placeholder="Example: 1 cup rice, 10 oz chickpeas"
						value={ingredient}
						onChange={(e) => setIngredient(e.target.value)}
						required
					/>
					<p className="mt-1 text-xs text-gray-500">
						Enter one ingredient per line. You can include quantities and
						measurements.
					</p>
				</div>

				<button
					type="submit"
					disabled={isPending}
					className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
					{isPending ? 'Analyzing...' : 'Analyze Nutrition'}
				</button>

				{isError && (
					<div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
						Error:{' '}
						{(error as Error).message || 'Failed to analyze nutrition data'}
					</div>
				)}
			</form>
		</div>
	);
}
