import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDivide,
	faMinus,
	faPlus,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Page() {
	return (
		<div className={styles.container}>
			<main className={styles.menu}>
				<Link href="/calc/add">
					<button type="button" className={styles.button}>
						<FontAwesomeIcon icon={faPlus} />
					</button>
				</Link>
				<Link href="/calc/sub">
					<button type="button" className={styles.button}>
						<FontAwesomeIcon icon={faMinus} />
					</button>
				</Link>
				<Link href="/calc/mul">
					<button type="button" className={styles.button}>
						<FontAwesomeIcon icon={faTimes} />
					</button>
				</Link>
				<Link href="/calc/div">
					<button type="button" className={styles.button}>
						<FontAwesomeIcon icon={faDivide} />
					</button>
				</Link>
			</main>
		</div>
	);
}
