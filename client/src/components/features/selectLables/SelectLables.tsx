import React, { useState, FC } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { filterByLabel } from "../../../utililties/filterSearch";
import { UseAppContext } from "../../../context/context";
export const SelectLables: FC = () => {
	const { matches, setMatches, setPage } = UseAppContext();

	const setOptionToCheckbox = (option: string) => {
		const filterdMatches = filterByLabel(matches, option);
		setMatches(filterdMatches);
	};
	return (
		<div style={{ display: "flex", flex: 1, width: "100%" }}>
			<FormGroup>
				<FormControlLabel
					onClick={() => setOptionToCheckbox("Decline")}
					control={<Checkbox />}
					label="Decline"
				/>
				<FormControlLabel
					onClick={() => setOptionToCheckbox("Possible")}
					control={<Checkbox />}
					label="Possible"
				/>
				<FormControlLabel
					onClick={() => setOptionToCheckbox("Open")}
					control={<Checkbox />}
					label="Open"
				/>
				<FormControlLabel
					onClick={() => setOptionToCheckbox("Close")}
					control={<Checkbox />}
					label="Close"
				/>
			</FormGroup>
		</div>
	);
};
