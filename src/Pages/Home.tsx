import ServiceImages from '../Components/ServiceImages/ServiceImages';
import ServiceBlock from '../Components/ServiceBlock/ServiceBlock';
import Testimonial from '../Components/Testimonial/Testimonial';

const Home = () => {
	return (
		<>
			<div className="block">
				<ServiceImages />
			</div>

			<div className="block block--shade">
				<ServiceBlock />
			</div>

			<div className="block">
				<Testimonial />
			</div>
		</>
	);
};

export default Home;
