import React, { useState, useEffect, FC } from "react";
import "./creditScore.css";
import { ApproveButton } from "../approveButton/ApproveButton";
import { DeclineButton } from "../declineButton/DeclineButton";

interface Props {
	score: Number;
}

export const CreditScore: FC<Props> = ({ score }) => {
	const [creditScoreRate, setCreditScoreRate] = useState<string | Number>(
		score
	);

	const [theme, setTheme] = useState("");
	const checkCreditScore = () => {
		if (score < 579) {
			setCreditScoreRate("C");
			setTheme("red-score");
			return;
		} else if (score <= 679) {
			setCreditScoreRate("B");
			setTheme("yellow-score");
			return;
		} else {
			setCreditScoreRate("A");
			setTheme("green-score");
			return;
		}
	};

	useEffect(() => {
		checkCreditScore();
	});

	return (
		<div className="creditScore-container">
			<div className={`${theme} score`}>
				<h3 className="rate">{creditScoreRate}</h3>
			</div>
			<div className="btn-container">
				<ApproveButton />
				<DeclineButton />
			</div>
		</div>
	);
};
