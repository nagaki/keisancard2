import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Calc.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import {
	faGrinBeamSweat as farGrinBeamSweat,
	faGrinSquint as farGrinSquint,
} from "@fortawesome/free-regular-svg-icons";
import Key from "../../components/Key";
import { MathProblem } from "../../services/MathProblem";
import classNames from "classnames";

enum CalcStateType {
	WAITING = 0,
	INCORRECT = 1,
	CORRECT = 2,
}

const Calc = () => {
	const router = useRouter();
	const { type } = router.query;
	const [calcState, setCalcState] = useState<CalcStateType>(
		CalcStateType.WAITING,
	);
	const [answer, setAnswer] = useState<string>("");
	const [remainder, setRemainder] = useState<string>("");
	const [count, setCount] = useState<number>(1);
	const [isRemainder, setIsRemainder] = useState<boolean>(false);
	const [mp, setMp] = useState<MathProblem>(() => {
		const initialState = new MathProblem(type);
		return initialState;
	});

	useEffect(() => {
		setMp(new MathProblem(type));
	}, [type]);

	/**
	 * 1から9を押したとき
	 * @param key
	 */
	const handleClickNumber = (key: string) => {
		if (isRemainder) {
			if (remainder === "0") {
				return;
			}
			setRemainder(remainder + key);
		} else {
			if (answer === "0") {
				return;
			}
			setAnswer(answer + key);
		}
	};

	/**
	 * 0を押したとき
	 * ほかの数が入っているときだけうごく
	 * @param key
	 */
	const handleClickZero = (key: string) => {
		if (isRemainder) {
			if (remainder === "0") {
				return;
			}
			setRemainder(remainder + key);
		} else {
			if (answer === "0") {
				return;
			}
			setAnswer(answer + key);
		}
	};

	/**
	 * ACを押したとき
	 * ぜんぶ消す
	 * @param key
	 */
	const handleClickClear = (key: string) => {
		setAnswer("");
		setRemainder("");
		setIsRemainder(false);
	};

	/**
	 * あまり（...）を押したとき
	 * ほかの数が入っているときだけうごく
	 * あまりが入っているときに押すとあまりを消す
	 * @param key
	 */
	const handleClickRemainder = (key: string) => {
		if (answer !== "") {
			setIsRemainder(!isRemainder);
		}

		if (remainder !== "") {
			setRemainder("");
		}
	};

	/**
	 * イコール（=）を押したとき
	 * こたえあわせをする
	 * 入っている数をけす
	 * 新しい問題にかえる
	 * @param key
	 */
	const handleClickEnter = (key: string) => {
		if (mp.isResultCorrect(answer, remainder)) {
			setCalcState(CalcStateType.CORRECT);
		} else {
			setCalcState(CalcStateType.INCORRECT);
		}
		setTimeout(() => {
			setAnswer("");
			setRemainder("");
			setIsRemainder(false);
			setMp(new MathProblem(type));
			setCalcState(CalcStateType.WAITING);
			setCount(count + 1);
		}, 1000);
	};

	/**
	 * もどる(←)を押したとき
	 * 計算せんたくにもどる
	 * @param key
	 */
	const handleReturn = (key: string) => {
		router.push("/");
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Keisancard2</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<main className={styles.box}>
				<div className={styles.expr}>
					{mp.expr}
					{answer}
					{isRemainder ? "..." : ""}
					{remainder}
				</div>
				<div className={styles.keyboard}>
					<Key label="7" onClick={handleClickNumber} type="normal" />
					<Key label="8" onClick={handleClickNumber} type="normal" />
					<Key label="9" onClick={handleClickNumber} type="normal" />
					<Key label="4" onClick={handleClickNumber} type="normal" />
					<Key label="5" onClick={handleClickNumber} type="normal" />
					<Key label="6" onClick={handleClickNumber} type="normal" />
					<Key label="1" onClick={handleClickNumber} type="normal" />
					<Key label="2" onClick={handleClickNumber} type="normal" />
					<Key label="3" onClick={handleClickNumber} type="normal" />
					<Key label="AC" onClick={handleClickClear} type="clear" />
					<Key label="0" onClick={handleClickZero} type="normal" />
					<Key label="=" onClick={handleClickEnter} type="enter" />
					<Key
						icon={<FontAwesomeIcon icon={faArrowAltCircleLeft} />}
						onClick={handleReturn}
						type="icon"
					/>
					<div className={styles.count}>
						<span className={styles.inner}>#{count}</span>
					</div>
					{type === "div" ? (
						<Key
							label="..."
							onClick={handleClickRemainder}
							type="remainder"
							className={classNames({ [styles.active]: isRemainder })}
						/>
					) : (
						false
					)}
				</div>
				{calcState !== CalcStateType.WAITING ? (
					<div className={styles.overlay}>
						<div className={styles.result}>
							{calcState === CalcStateType.CORRECT ? (
								<FontAwesomeIcon
									icon={farGrinSquint}
									className={styles.correct}
								/>
							) : (
								<FontAwesomeIcon
									icon={farGrinBeamSweat}
									className={styles.incorrect}
								/>
							)}
						</div>
					</div>
				) : (
					false
				)}
			</main>
		</div>
	);
};

export default Calc;
