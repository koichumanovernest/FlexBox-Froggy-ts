import React from "react";
import { styled } from "@mui/material";
import { LEVELS } from "../utils";
import FlexItem from "./FlexItem";
// import flex from "../assets/img/play.png";
import FlexResult from "./FlexResult";
import { useDispatch } from "react-redux";
import { setInputValue } from "../store/levelSlice/froggySlice";
import LevelIndicator from "./LevelIndicator";

const FlexForm: React.FC = () => {
	const dispatch = useDispatch();
	const [currentLevel, setCurrentLevel] = React.useState(0);
	const [completedLevels, setCompletedLevels] = React.useState<number[]>([]);

	const handleNextLevel = () => {
		setCurrentLevel((prevLevel) => (prevLevel + 1) % LEVELS.length);
		dispatch(setInputValue(""));
	};

	const handleLevelSelect = (level: number) => {
		setCurrentLevel(level - 1);
	};

	const handleResetLevels = () => {
		setCompletedLevels([]);
		setCurrentLevel(0);
	};

	return (
		<div>
			<StyledTextContainer>
				<StyledText>FLEXBOX FROGGY</StyledText>
			</StyledTextContainer>
			<LevelIndicator
				currentLevel={currentLevel + 1}
				totalLevels={LEVELS.length}
				onLevelSelect={handleLevelSelect}
				completedLevels={completedLevels}
				onResetLevels={handleResetLevels}
			/>
			{LEVELS.map((item, index) => (
				<div
					key={index}
					style={{ display: index === currentLevel ? "block" : "none" }}>
					<FlexItem
						ForexampleText={item.ForexampleText}
						spaceAroundText={item.spaceAroundText}
						spaceBetweenText={item.spaceBetweenText}
						centerText={item.centerText}
						flexEndText={item.flexEndText}
						newText={item.newText}
						text={{ ...item.text, andText: item.text.endText ?? "" }}
						Pond={item.Pond}
						Title={item.Title}
						solution={item.solution}
						handleNextLevel={handleNextLevel}
						currentLevel={currentLevel}
						inputValue={""}
						styles={undefined}
						AndText={{
							andText: "",
						}}
					/>
					<FlexResult
						currentLevel={currentLevel}
						inputValue={""}
						solution={""}
						ForexampleText={{
							text: "",
							spanText: "",
							endText: "",
						}}
						spaceAroundText={{
							BeautifulText_5: "",
							NearText_5: "",
						}}
						spaceBetweenText={{
							BeautifulText_4: "",
							NearText_4: "",
						}}
						centerText={{
							BeautifulText_3: "",
							NearText_3: "",
						}}
						flexEndText={{
							BeautifulText_2: "",
							NearText_2: "",
						}}
						newText={{
							BeautifulText_1: "",
							NearText_1: "",
						}}
						text={{
							Greetings: "",
							spanText: "",
							endText: "",
							andText: "",
						}}
						AndText={{
							andText: "",
						}}
						Pond={{
							name: "",
							text: "",
							endText: "",
						}}
						Title={{
							title1: "",
						}}
						styles={undefined}
						handleNextLevel={undefined}
					/>
				</div>
			))}
		</div>
	);
};

export default FlexForm;

const StyledText = styled("h1")`
	margin: 0.5rem 0 0;
	text-transform: uppercase;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 2rem;
	font-weight: 900;
	color: #ffffff;
	letter-spacing: 4px;
	display: flex;
	gap: 3rem;
`;

const StyledTextContainer = styled("div")`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	max-width: 52%;
`;
