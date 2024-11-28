import classNames from "classnames";
import styles from "../styles/Keyboard.module.css";

interface IKeyProps {
	label?: string;
	icon?: JSX.Element;
	className?: string;
	onClick: (value: string) => void;
	type: "normal" | "clear" | "enter" | "remainder" | "icon";
}

export default function Key(props: IKeyProps) {
	const { className, label, icon, type } = props;

	const handleClick = (event: React.MouseEvent) => {
		event.preventDefault();
		props.onClick(label);
	};

	const text = type === "icon" ? icon : label;

	return (
		<div className={classNames(styles.column)}>
			<button
			  type="button"
				onClick={handleClick}
				className={classNames(styles.button, styles[type], className)}
			>
				{text}
			</button>
		</div>
	);
}
