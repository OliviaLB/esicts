import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

// Interface for the price list item
interface PriceListItem {
	service: string;
	price: number;
	imageUrl: string;
}

// Sample price list data
const priceList: PriceListItem[] = [
	{ service: 'Assessments', price: 50, imageUrl: 'assessment.jpg' },
	{ service: 'Sports Therapy Appointment', price: 80, imageUrl: 'sports-therapy.jpg' },
	{ service: 'Oncology Massage', price: 100, imageUrl: 'oncology-massage.jpg' },
	{ service: 'Additional Costs', price: 20, imageUrl: 'additional-costs.jpg' },
];

const PriceList: React.FC = () => {
	return (
		<div>
			<Typography variant="h4">Price List</Typography>
			<Grid
				container
				spacing={2}
			>
				{priceList.map((item) => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						key={item.service}
					>
						<Card>
							<CardMedia
								image={item.imageUrl}
								title={item.service}
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant="h5"
									component="h2"
								>
									{item.service}
								</Typography>
								<Typography
									variant="body2"
									color="textSecondary"
									component="p"
								>
									Price: ${item.price.toFixed(2)}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default PriceList;
