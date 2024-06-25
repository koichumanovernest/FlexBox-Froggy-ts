import React from "react";
import { Menu, MenuItem, Button, styled } from "@mui/material";

interface LevelIndicatorProps {
	currentLevel: number;
	totalLevels: number;
	onLevelSelect: (level: number) => void;
	completedLevels: number[];
	onResetLevels: () => void;
}

const LevelIndicator: React.FC<LevelIndicatorProps> = ({
	currentLevel,
	totalLevels,
	onLevelSelect,
	completedLevels,
	onResetLevels,
}) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLevelSelectInternal = (level: number) => {
		onLevelSelect(level);
		handleClose();
	};

	const handlePreviousLevel = () => {
		if (currentLevel > 1) {
			onLevelSelect(currentLevel - 1);
		}
	};

	const handleNextLevel = () => {
		if (currentLevel < totalLevels) {
			onLevelSelect(currentLevel + 1);
		}
	};

	return (
		<LevelIndicatorContainer>
			<ArrowButton disabled={currentLevel === 1} onClick={handlePreviousLevel}>
				◀
			</ArrowButton>
			<LevelButton onClick={handleClick}>
				Уровень {currentLevel} из {totalLevels}
			</LevelButton>
			<ArrowButton
				disabled={currentLevel === totalLevels}
				onClick={handleNextLevel}>
				▶
			</ArrowButton>
			<StyledMenu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				MenuListProps={{ "aria-labelledby": "level-button" }}>
				<LevelsContainer>
					{Array.from({ length: totalLevels }, (_, index) => (
						<MenuItem
							key={index + 1}
							onClick={() => handleLevelSelectInternal(index + 1)}>
							<LevelCircle completed={completedLevels.includes(index + 1)}>
								{index + 1}
							</LevelCircle>
						</MenuItem>
					))}
					<MenuItem onClick={onResetLevels}>Сбросить</MenuItem>
				</LevelsContainer>
			</StyledMenu>
		</LevelIndicatorContainer>
	);
};

const LevelIndicatorContainer = styled("div")`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 33rem;
	width: 20%;
	position: relative;
	bottom: 3rem;

`;

const LevelsContainer = styled("div")`
	display: flex;
	flex-wrap: wrap;
	gap: 4px;
	justify-content: center;
	padding: 10px;
	max-height: 300px;
	overflow-y: auto;
`;

const LevelButton = styled(Button)`
	background-color: #66bb6a;
	color: white;
	width: 200px;
	height: 30px;
	border-radius: 0%;
	&:hover {
		background-color: #5aad5e;
	}
`;

const LevelCircle = styled("div")<{ completed: boolean }>`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => (props.completed ? "#43a047" : "#566573")};
	color: white;
	font-weight: bold;
	cursor: pointer;
`;

const ArrowButton = styled("div")<{ disabled: boolean }>`
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => (props.disabled ? "#9e9e9e" : "#69b36c")};
	padding: 6px;
	color: #fff;
	border-radius: px 5px 5px 0px;
	width: 10px;
	height: 15px;
	border: 1px solid #fff;
`;

const StyledMenu = styled(Menu)`
	.MuiPaper-root {
		background-color: #2c3e50;
		max-width: 300px;
		max-height: 350px;
		overflow-y: auto;
		color: #fff;
	}
`;

export default LevelIndicator;
