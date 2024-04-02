import Testimonial from '../Components/Testimonial/Testimonial';
import ServiceImages from '../Components/ServiceImages/ServiceImages';
import Services from '../Components/Services/Services';

const Home = () => {
	return (
		<>
			<div className="block">
				<ServiceImages />
			</div>

			<div className="block block--shade">
				<Services />
			</div>

			<div className="block">
				<Testimonial />
			</div>
		</>
	);
};

export default Home;
