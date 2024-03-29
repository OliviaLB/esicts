import classes from './Card.module.css';

type Props = {
	children?: JSX.Element | JSX.Element[];
};

const Card = (props: Props) => {
	return <div className={classes.card}>{props.children}</div>;
};

export default Card;
