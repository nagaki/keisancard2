import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDivide,
	faMinus,
	faPlus,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Keisancard2</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.menu}>
				<Link href="/calc/add">
					<a className={styles.button}>
						<FontAwesomeIcon icon={faPlus} />
					</a>
				</Link>
				<Link href="/calc/sub">
					<a className={styles.button}>
						<FontAwesomeIcon icon={faMinus} />
					</a>
				</Link>
				<Link href="/calc/mul">
					<a className={styles.button}>
						<FontAwesomeIcon icon={faTimes} />
					</a>
				</Link>
				<Link href="/calc/div">
					<a className={styles.button}>
						<FontAwesomeIcon icon={faDivide} />
					</a>
				</Link>
			</main>
		</div>
	);
}
