export default function Header() {
	return (
		<header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 shadow-md">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<h1 className="text-2xl md:text-3xl font-bold">
							Nutrition Analysis
						</h1>
						<p className="text-blue-100 mt-1">
							Analyze the nutritional content of any food or recipe
						</p>
					</div>
					<div className="flex items-center space-x-4">
						<a
							href="https://developer.edamam.com/edamam-docs-nutrition-api"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-blue-200 transition-colors">
							API Docs
						</a>
						<a
							href="https://github.com/yourusername/nutrition-analysis"
							target="_blank"
							rel="noopener noreferrer"
							className="text-white hover:text-blue-200 transition-colors">
							GitHub
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}
