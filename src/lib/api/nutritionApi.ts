import axios from 'axios';

// You need to sign up at Edamam and get your own APP_ID and APP_KEY
// https://developer.edamam.com/edamam-docs-nutrition-api
const APP_ID = process.env.NEXT_PUBLIC_EDAMAM_APP_ID;
const APP_KEY = process.env.NEXT_PUBLIC_EDAMAM_APP_KEY;

const BASE_URL = 'https://api.edamam.com/api/nutrition-data';

export interface NutritionAnalysisRequest {
	ingr: string;
}

export interface Nutrient {
	label: string;
	quantity: number;
	unit: string;
}

export interface NutritionAnalysisResponse {
	calories: number;
	totalWeight: number;
	dietLabels: string[];
	healthLabels: string[];
	cautions: string[];
	totalNutrients: {
		[key: string]: Nutrient;
	};
	totalDaily: {
		[key: string]: Nutrient;
	};
}

export const fetchNutritionData = async (
	ingredients: string
): Promise<NutritionAnalysisResponse> => {
	try {
		const response = await axios.get<NutritionAnalysisResponse>(BASE_URL, {
			params: {
				app_id: APP_ID,
				app_key: APP_KEY,
				ingr: ingredients,
			},
		});

		return response.data;
	} catch (error) {
		console.error('Error fetching nutrition data:', error);
		throw error;
	}
};

export const analyzeFoodItem = async (
	ingredient: string
): Promise<NutritionAnalysisResponse> => {
	return fetchNutritionData(ingredient);
};
