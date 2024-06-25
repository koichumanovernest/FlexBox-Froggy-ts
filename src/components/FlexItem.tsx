import { styled, Box, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { setInputValue } from "../store/levelSlice/froggySlice";
import { Props } from "./../utils/index.d";
import audio from "../assets/audio/myinstants.mp3";
const FlexItem: React.FC<Props> = ({
	ForexampleText,
	spaceAroundText,
	spaceBetweenText,
	centerText,
	flexEndText,
	newText,
	text,
	solution,
	Pond,

	Title,
	handleNextLevel,
	currentLevel,
}) => {
	const dispatch = useDispatch<AppDispatch>();
	const inputValue = useSelector((state: RootState) => state.froggy.inputValue);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setInputValue(e.target.value));
	};

	const song = new Audio(audio);
	const playAudio = () => {
		song.play();
		if (handleNextLevel) {
			handleNextLevel();
		}
	};

	return (
		<StyledContainer>
			<StyledUlContainer currentLevel={currentLevel}>
				<StyledTextSpan>
					{text.Greetings} <StyledSpan>{text.spanText}</StyledSpan>{" "}
					{text.endText}
				</StyledTextSpan>
				<StyledListContainer className={`level_uch_${currentLevel}`}>
					<StyledList>
						<StyledSpan>{newText.BeautifulText_1}</StyledSpan>{" "}
						{newText.NearText_1}
					</StyledList>
					<StyledList>
						<StyledSpan>{flexEndText.BeautifulText_2}</StyledSpan>{" "}
						{flexEndText.NearText_2}
					</StyledList>
					<StyledList>
						<StyledSpan>{centerText.BeautifulText_3}</StyledSpan>{" "}
						{centerText.NearText_3}
					</StyledList>
					<StyledList>
						<StyledSpan>{spaceBetweenText.BeautifulText_4}</StyledSpan>{" "}
						{spaceBetweenText.NearText_4}
					</StyledList>
					<StyledList>
						<StyledSpan>{spaceAroundText.BeautifulText_5}</StyledSpan>{" "}
						{spaceAroundText.NearText_5}
					</StyledList>
				</StyledListContainer>
				<StyledTextContent>
					{ForexampleText.text}{" "}
					<StyledSpan>{ForexampleText.spanText}</StyledSpan>{" "}
					{ForexampleText.endText}
				</StyledTextContent>
			</StyledUlContainer>
			{currentLevel === 13 ? (
				<StyledMapContainer>
					<StyledTitleContent>
						<StyledTitle>{Title.title1}</StyledTitle>
					</StyledTitleContent>
					<StyledMapPond>
						<p>{Pond.name}rgtr</p>
						<StyledPondText>{Pond.text}</StyledPondText>
						<StyledEndParagraf>{Pond.endText}</StyledEndParagraf>
						<StyledYellowParagraf>.yellow {"{"}</StyledYellowParagraf>
						<StyledInput value={inputValue} onChange={handleChange} />
						<StyledParagrafTrhee>{"}"}</StyledParagrafTrhee>
						<StyledButtonThee
							disabled={inputValue !== solution}
							onClick={playAudio}
							color="error"
							variant="contained">
							Слеующий
						</StyledButtonThee>
					</StyledMapPond>
				</StyledMapContainer>
			) : currentLevel === 14 ? (
				<StyledMapContainer>
					<StyledTitleContent>
						<StyledTitle>{Title.title1}</StyledTitle>
					</StyledTitleContent>
					<StyledMapPond>
						<p>{Pond.name}</p>
						<StyledPondText>{Pond.text}</StyledPondText>
						<StyledEndParagraf>{Pond.endText}</StyledEndParagraf>
						<StyledYellowParagraf>.red {"{"}</StyledYellowParagraf>
						<StyledInput1 value={inputValue} onChange={handleChange} />
						<StyledParagrafTrhee>{"}"}</StyledParagrafTrhee>
						<StyledButtonThee
							disabled={inputValue !== solution}
							onClick={playAudio}
							color="error"
							variant="contained">
							Слеующий
						</StyledButtonThee>
					</StyledMapPond>
				</StyledMapContainer>
			) : currentLevel === 15 ? (
				<StyledMapContainer>
					<StyledTitleContent>
						<StyledTitle>{Title.title1}</StyledTitle>
					</StyledTitleContent>
					<StyledMapPond>
						<p>{Pond.name}</p>
						<StyledPondText>{Pond.text}</StyledPondText>
						<StyledParagrafi>align-items: flex-start;</StyledParagrafi>
						<StyledPns>{Pond.endText}</StyledPns>
						<StyledParagraftst>.yellow{"{"}</StyledParagraftst>
						<StyledInput11 value={inputValue} onChange={handleChange} />
						<StyledParagrafts1>{"}"}</StyledParagrafts1>
						<StyledButtonThee
							disabled={inputValue !== solution}
							onClick={playAudio}
							color="error"
							variant="contained">
							Слеующий
						</StyledButtonThee>
					</StyledMapPond>
				</StyledMapContainer>
			) : (
				<StyledMapContainer>
					<StyledTitleContent>
						<StyledTitle>{Title.title1}</StyledTitle>
					</StyledTitleContent>
					<StyledMapPond>
						<p>{Pond.name}</p>
						<StyledPondText>{Pond.text}</StyledPondText>
						<StyledPondInput value={inputValue} onChange={handleChange} />
						<StyledEndParagraf>{Pond.endText}</StyledEndParagraf>
						<StyledPondButton
							disabled={inputValue !== solution}
							onClick={playAudio}
							color="error"
							variant="contained">
							Слеующий
						</StyledPondButton>
					</StyledMapPond>
				</StyledMapContainer>
			)}
			<div></div>
		</StyledContainer>
	);
};

export default FlexItem;

const StyledContainer = styled("div")`
	width: 52%;
`;

const StyledUlContainer = styled(Box)<{ currentLevel: number }>`
	${({ currentLevel }) =>
		(currentLevel === 2 ||
			currentLevel === 3 ||
			currentLevel === 5 ||
			currentLevel === 6 ||
			currentLevel === 9 ||
			currentLevel === 10 ||
			currentLevel === 11 ||
			currentLevel === 12 ||
			currentLevel === 13 ||
			currentLevel === 14 ||
			currentLevel === 15) &&
		`
         .level_uch_${currentLevel} li {
            display: none;
         }
      `}
`;

const StyledInput = styled("input")`
	width: 43rem;
	border: none;
	height: 20px;
	position: relative;
	bottom: 5rem;
	left: 2rem;
	outline: none;
	font-size: 18px;
	font-family: Source Code Pro, monospace;
`;

const StyledPondInput = styled("input")`
	width: 43rem;
	border: none;
	height: 20px;
	position: relative;
	bottom: 2.5rem;
	left: 20px;
	outline: none;
	font-size: 18px;
	font-family: Source Code Pro, monospace;
`;

const StyledInput1 = styled("input")`
	width: 43rem;
	border: none;
	height: 20px;
	position: relative;
	bottom: 4.5rem;
	left: 20px;
	outline: none;
	font-size: 18px;
	font-family: Source Code Pro, monospace;
`;

const StyledInput11 = styled("input")`
	width: 43rem;
	border: none;
	height: 20px;
	position: relative;
	bottom: 6.900rem;
	left: 20px;
	outline: none;
	font-size: 18px;
	font-family: Source Code Pro, monospace;
`;

const StyledPondText = styled("p")`
	position: relative;
	bottom: 35px;
	left: 20px;
`;

const StyledPns = styled("p")`
	position: relative;
	bottom: 6rem;
	left: 2px;
`;

const StyledYellowParagraf = styled("p")`
	position: relative;
	bottom: 4.5rem;
	left: 20px;
`;
// const StyledParagrafts = styled("p")`
// 	position: relative;
// 	bottom: 5.500rem;
// 	left: 20px;
// `;
const StyledParagrafts1 = styled("p")`
	position: relative;
	bottom: 7.5rem;
	left: 20px;
`;
const StyledParagraftst = styled("p")`
	position: relative;
	bottom: 6.5rem;
	left: 20px;
`;

const StyledParagrafTrhee = styled("p")`
	position: relative;
	bottom: 5rem;
	left: 20px;
`;

const StyledParagrafi = styled("p")`
	position: relative;
	bottom: 4rem;
	left: 20px;
`;

const StyledEndParagraf = styled("p")`
	position: relative;
	bottom: 49px;
	left: 5px;
`;

const StyledTextSpan = styled(Typography)`
	color: #ffffff;
	font-size: 15px;
	line-height: 1.5;
	margin-left: 2rem;
	margin-bottom: 10px;
`;

const StyledTextContent = styled(Typography)`
	color: white;
	font-size: 15px;
	line-height: 1.5;
	margin-left: 2rem;
`;

const StyledSpan = styled("span")`
	text-decoration: underline;
	font-weight: bold;
	font-size: 16px;
	font-family: sans-serif;
	background: rgba(255, 255, 255, 0.2);
	padding: 2px 4px;
	margin-right: 5px;
`;

const StyledListContainer = styled("ul")`
	padding: 0;
	margin: 0;
	color: white;
	margin-left: 4rem;
`;

const StyledList = styled("li")`
	margin-bottom: 5px;
	margin-top: 10px;
`;

const StyledMapContainer = styled("div")`
	background: #e0e0e0;
	font-family: cursive;
	color: #7e7e7e;
	display: flex;
	border-radius: 10px;
	margin-top: 30px;
`;

const StyledTitleContent = styled("div")`
	background: #999999;
	font-family: cursive;
	color: #080808;
	display: flex;
	flex-direction: column;
	width: 30px;
	height: 270px;
`;

const StyledMapPond = styled("div")`
	background: #e0e0e0;
	font-family: 'Source Code Pro', monospace;
	height: 270px;
	color: #7e7e7e;
	display: flex;
	flex-direction: column;
	margin-left: 10px;
`;

const StyledTitle = styled("p")`
	font-family: cursive;
	color: #fff7f7;
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	width: 10px;
	height: 20px;
	margin-bottom: -7px;
`;

const StyledPondButton = styled(Button)`
	margin-left: 37.5rem;
	margin-top: 1rem;
	width: 120px;
	height: 33px;
`;

const StyledButtonThee = styled(Button)`
	margin-left: 37.5rem;
	margin-top: -8rem;
	width: 120px;
	height: 33px;
`;
