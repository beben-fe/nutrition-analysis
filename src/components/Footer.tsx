export default function Footer() {
	return (
		<footer className="bg-gray-100 py-6 mt-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p className="text-gray-600 text-sm">
							&copy; {new Date().getFullYear()} Nutrition Analysis App
						</p>
						<p className="text-gray-500 text-xs mt-1">
							Powered by{' '}
							<a
								href="https://www.edamam.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:underline">
								Edamam Nutrition API
							</a>
						</p>
					</div>
					<div className="flex items-center space-x-4">
						<a
							href="/privacy"
							className="text-gray-600 hover:text-gray-900 text-sm">
							Privacy Policy
						</a>
						<a
							href="/terms"
							className="text-gray-600 hover:text-gray-900 text-sm">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
