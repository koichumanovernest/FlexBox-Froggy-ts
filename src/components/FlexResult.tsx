import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Box, styled, keyframes } from "@mui/material";
import image from "../assets/icon/frog-green-color-assist.svg";
import image1 from "../assets/icon/frog-yellow.svg";
import image2 from "../assets/icon/frog-red.svg";
import { Props } from "../utils/index.d";
import icons from "../assets/icon/lilypad-green-color-assist.svg";
import icons1 from "../assets/icon/lilypad-yellow.svg";
import icons2 from "../assets/icon/lilypad-red.svg";

const FlexResult: FC<Props> = ({ currentLevel }) => {
	const inputValue = useSelector((state: RootState) => state.froggy.inputValue);

	console.log({ inputValue });

	const styleObject: Record<string, string> = {};
	inputValue.split(";").forEach((rule) => {
		const [property, value] = rule.trim().split(":");
		styleObject[property?.trim()] = value?.trim();
	});

	return (
		<StyledContainer>
			<FrogsContainer sx={styleObject}>
				<FrogsContent>
					{currentLevel === 0 ? (
						<Frog src={image} alt="Frog" />
					) : currentLevel === 1 ? (
						<StyledIconsFrog1 sx={styleObject}>
							<Frog1 src={image} alt="Frog" />
							<Frog2 src={image1} alt="Frog" />
						</StyledIconsFrog1>
					) : currentLevel === 2 ? (
						<StyledIconsFrog2 sx={styleObject}>
							<Frog3 src={image} alt="Frog" />
							<Frog4 src={image1} alt="Frog" />
							<Frog5 src={image2} alt="Frog" />
						</StyledIconsFrog2>
					) : currentLevel === 3 ? (
						<StyledIconsFrog3 sx={styleObject}>
							<Frog6 src={image} alt="Frog" />
							<Frog6 src={image1} alt="Frog" />
							<Frog6 src={image2} alt="Frog" />
						</StyledIconsFrog3>
					) : currentLevel === 4 ? (
						<StyledIconsFrog4 sx={styleObject}>
							<Frog9 src={image} alt="Frog" />
							<Frog9 src={image1} alt="Frog" />
							<Frog9 src={image2} alt="Frog" />
						</StyledIconsFrog4>
					) : currentLevel === 5 ? (
						<Frog12 src={image} alt="Frog" />
					) : currentLevel === 6 ? (
						<StyledIconsFrog5 sx={styleObject}>
							<Frog13 src={image} alt="Frog" />
							<Frog13 src={image1} alt="Frog" />
							<Frog13 src={image2} alt="Frog" />
						</StyledIconsFrog5>
					) : currentLevel === 7 ? (
						<StyledIconsFrog6 sx={styleObject}>
							<Frog14 src={image} alt="Frog" />
							<Frog14 src={image1} alt="Frog" />
							<Frog14 src={image2} alt="Frog" />
						</StyledIconsFrog6>
					) : currentLevel === 8 ? (
						<StyledIconsFrog7 sx={styleObject}>
							<Frog15 src={image} alt="Frog" />
							<Frog15 src={image1} alt="Frog" />
							<Frog15 src={image2} alt="Frog" />
						</StyledIconsFrog7>
					) : currentLevel === 9 ? (
						<StyledIconsFrog8 sx={styleObject}>
							<Frog16 src={image} alt="Frog" />
							<Frog16 src={image1} alt="Frog" />
							<Frog16 src={image2} alt="Frog" />
						</StyledIconsFrog8>
					) : currentLevel === 10 ? (
						<StyledIconsFrog9 sx={styleObject}>
							<Frog17 src={image} alt="Frog" />
							<Frog17 src={image1} alt="Frog" />
							<Frog17 src={image2} alt="Frog" />
						</StyledIconsFrog9>
					) : currentLevel === 11 ? (
						<StyledIconsFrog10 sx={styleObject}>
							<Frog18 src={image} alt="Frog" />
							<Frog18 src={image1} alt="Frog" />
							<Frog18 src={image2} alt="Frog" />
						</StyledIconsFrog10>
					) : currentLevel === 12 ? (
						<StyledIconsFrog11 sx={styleObject}>
							<Frog19 src={image} alt="Frog" />
							<Frog19 src={image1} alt="Frog" />
							<Frog19 src={image2} alt="Frog" />
						</StyledIconsFrog11>
					) : currentLevel === 13 ? (
						<StyledIconsFrog12 sx={styleObject}>
							<Frog20 src={image} alt="Frog" />
							<Frog20 src={image1} sx={styleObject} alt="Frog" />
							<Frog20 src={image2} alt="Frog" />
						</StyledIconsFrog12>
					) : currentLevel === 14 ? (
						<StyledIconsFrog13 sx={styleObject}>
                     <Frog21 src={image} alt="Frog" />
                     <Frog21 src={image} alt="Frog" />
                     <Frog21 src={image} alt="Frog" />
                     <Frog21 src={image2} sx={styleObject} alt="Frog" />
                     <Frog21 src={image} alt="Frog" />
                  </StyledIconsFrog13>
					) : currentLevel === 15 ? (
						<StyledIconsFrog14 sx={styleObject}>
                     <Frog22 src={image} alt="Frog" />
                     <Frog22 src={image} alt="Frog" />
                     <Frog23 src={image1}sx={styleObject} alt="Frog" />
                     <Frog22 src={image} alt="Frog" />
                     <Frog22 src={image} alt="Frog" />
                  </StyledIconsFrog14>
					) : null}
				</FrogsContent>
				<FrogsSheetContent>
					{currentLevel === 0 ? (
						<Lilypad1 src={icons} alt="Lilypad" />
					) : currentLevel === 1 ? (
						<>
							<Lilypad2 src={icons} alt="Lilypad" />
							<Lilypad3 src={icons1} alt="Lilypad" />
						</>
					) : currentLevel === 2 ? (
						<>
							<Lilypad4 src={icons} alt="Lilypad" />
							<Lilypad5 src={icons1} alt="Lilypad" />
							<Lilypad6 src={icons2} alt="Lilypad" />
						</>
					) : currentLevel === 3 ? (
						<StyleSheetContainer1>
							<Lilypad9 src={icons} alt="Lilypad" />
							<Lilypad9 src={icons1} alt="Lilypad" />
							<Lilypad9 src={icons2} alt="Lilypad" />
						</StyleSheetContainer1>
					) : currentLevel === 4 ? (
						<StyleSheetContainer2>
							<Lilypad10 src={icons} alt="Lilypad" />
							<Lilypad10 src={icons1} alt="Lilypad" />
							<Lilypad10 src={icons2} alt="Lilypad" />
						</StyleSheetContainer2>
					) : currentLevel === 5 ? (
						<Lilypad13 src={icons} alt="Lilypad" />
					) : currentLevel === 6 ? (
						<StyleSheetContainer3>
							<Lilypad14 src={icons} alt="Lilypad" />
							<Lilypad14 src={icons1} alt="Lilypad" />
							<Lilypad14 src={icons2} alt="Lilypad" />
						</StyleSheetContainer3>
					) : currentLevel === 7 ? (
						<StyleSheetContainer4>
							<Lilypad15 src={icons} alt="Lilypad" />
							<Lilypad15 src={icons1} alt="Lilypad" />
							<Lilypad15 src={icons2} alt="Lilypad" />
						</StyleSheetContainer4>
					) : currentLevel === 8 ? (
						<StyleSheetContainer5>
							<Lilypad16 src={icons} alt="Lilypad" />
							<Lilypad16 src={icons1} alt="Lilypad" />
							<Lilypad16 src={icons2} alt="Lilypad" />
						</StyleSheetContainer5>
					) : currentLevel === 9 ? (
						<StyleSheetContainer6>
							<Lilypad17 src={icons} alt="Lilypad" />
							<Lilypad17 src={icons1} alt="Lilypad" />
							<Lilypad17 src={icons2} alt="Lilypad" />
						</StyleSheetContainer6>
					) : currentLevel === 10 ? (
						<StyleSheetContainer7>
							<Lilypad18 src={icons} alt="Lilypad" />
							<Lilypad18 src={icons1} alt="Lilypad" />
							<Lilypad18 src={icons2} alt="Lilypad" />
						</StyleSheetContainer7>
					) : currentLevel === 11 ? (
						<StyleSheetContainer8>
							<Lilypad19 src={icons} alt="Lilypad" />
							<Lilypad19 src={icons1} alt="Lilypad" />
							<Lilypad19 src={icons2} alt="Lilypad" />
						</StyleSheetContainer8>
					) : currentLevel === 12 ? (
						<StyleSheetContainer9>
							<Lilypad20 src={icons} alt="Lilypad" />
							<Lilypad20 src={icons1} alt="Lilypad" />
							<Lilypad20 src={icons2} alt="Lilypad" />
						</StyleSheetContainer9>
					) : currentLevel === 13 ? (
						<StyleSheetContainer10 order={1}>
							<Lilypad21 src={icons} alt="Lilypad" />
							<Lilypad21 src={icons2} alt="Lilypad" />
							<Lilypad21 src={icons1} alt="Lilypad" />
						</StyleSheetContainer10>
					) : currentLevel === 14 ? (
						<StyleSheetContainer11>
                     <Lilypad22 src={icons2} alt="Lilypad" />
                     <Lilypad22 src={icons} alt="Lilypad" />
                     <Lilypad22 src={icons} alt="Lilypad" />
                     <Lilypad22 src={icons} alt="Lilypad" />
                     <Lilypad22 src={icons} alt="Lilypad" />
                  </StyleSheetContainer11>
					) : currentLevel === 15 ? (
						<StyleSheetContainer12>
                     <Lilypad23 src={icons} alt="Lilypad" />
                     <Lilypad23 src={icons} alt="Lilypad" />
                     <Lilypad24 src={icons1} alt="Lilypad" />
                     <Lilypad23 src={icons} alt="Lilypad" />
                     <Lilypad23 src={icons} alt="Lilypad" />
                  </StyleSheetContainer12>
					) :  null}
				</FrogsSheetContent>
			</FrogsContainer>
		</StyledContainer>
	);
};

export default FlexResult;
//!  Frogs Sheets  1
const FrogsContainer = styled(Box)({
	display: "flex",
	width: "42rem",
	height: "100%",
	backgroundColor: "#1f5768",
	marginTop: "110px",
	position: "absolute",
	left: "53rem",
	top: "-6.9rem",
	zIndex: 100,
});

const FrogsContent = styled(Box)({});

// ! StyledContainer
const StyledContainer = styled("div")({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
	height: "100%",
});

//  ! FrogsSheet
const FrogsSheetContent = styled(Box)({
	width: "140px",
});

const jumpAnimation = keyframes`
   0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	60% {transform: translateY(-15px);}
	40% {transform: translateY(-10px);}
`;

//!  StyledIconsFrogs

const StyledIconsFrog1 = styled(Box)`
	display: flex;
	width: 680px;
`;

const StyledIconsFrog2 = styled(Box)`
	display: flex;
	width: 680px;
`;

const StyledIconsFrog3 = styled(Box)`
	display: flex;
	width: 630px;
	animation: ${jumpAnimation} 2s infinite;
`;

const StyledIconsFrog4 = styled(Box)`
	animation: ${jumpAnimation} 2s infinite;
	width: 460px;
	display: flex;
	gap: 3rem;
	margin-bottom: 1.5rem;
`;

const StyledIconsFrog5 = styled(Box)`
	display: flex;
	gap: 1rem;
	width: 620px;
	position: relative;
	bottom: 30px;
`;

const StyledIconsFrog6 = styled(Box)`
	display: flex;
	gap: 2rem;
	width: 600px;
`;

const StyledIconsFrog7 = styled(Box)`
	display: flex;
	gap: 2rem;
	width: 600px;
	position: relative;
	left: 2rem;
`;

const StyledIconsFrog8 = styled(Box)`
	display: flex;
	gap: 3rem;
	width: 665px;
	position: relative;
	bottom: 1rem;
	left: 1rem;
`;

const StyledIconsFrog9 = styled(Box)`
	display: flex;
	gap: 2rem;
	width: 625px;
	position: relative;
	bottom: 2rem;
	left: 1.5rem;
`;
const StyledIconsFrog10 = styled(Box)`
	display: flex;
	gap: 2rem;
	width: 625px;
	height: 720px;
	position: relative;
	bottom: 2rem;
	left: 1.5rem;
`;
const StyledIconsFrog11 = styled(Box)`
	display: flex;
	gap: 3rem;
	width: 625px;
	height: 720px;
	position: relative;
	bottom: 2rem;
	left: 1.5rem;
`;
const StyledIconsFrog12 = styled(Box)`
	display: flex;
	gap: 3rem;
	width: 625px;
	height: 720px;
	position: relative;
	bottom: 2rem;
	left: 1.5rem;
`;
const StyledIconsFrog13 = styled(Box)`
	display: flex;
	gap: 3rem;
	width: 625px;
	height: 720px;
	position: relative;
	bottom: 2rem;
	left: 1.5rem;
`;
const StyledIconsFrog14 = styled(Box)`
	display: flex;
	gap: 3rem;
	width: 625px;
	height: 720px;
	position: relative;
	bottom: 2rem;
	left: 1.5rem;
`;

//!  StyledSheetContainers !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const StyleSheetContainer1 = styled(Box)`
	width: 580px;
	display: flex;
	gap: 6.5rem;
	z-index: 99;
	margin-left: -38.1rem;
`;
const StyleSheetContainer2 = styled(Box)`
	width: 480px;
	display: flex;
	gap: 1.5rem;
	margin-left: -28.9rem;
	margin-top: 36rem;
`;
const StyleSheetContainer3 = styled(Box)`
	width: 550px;
	display: flex;
	justify-content: space-around;
	align-items: end;
	gap: 4rem;
	margin-left: -36.5rem;
	margin-top: 36rem;
`;
const StyleSheetContainer4 = styled(Box)`
	width: 250px;
	height: 120px;
	display: flex;
	flex-direction: row-reverse;
	gap: 0.5rem;
	margin-left: -31.5rem;
	position: absolute;
	left: 58rem;
	top: 1.5rem;
`;

const StyleSheetContainer5 = styled(Box)`
	width: 150px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-left: -36.5rem;
	margin-top: 1rem;
	position: absolute;
	left: 37rem;
	bottom: 16rem;
`;

const StyleSheetContainer6 = styled(Box)`
	width: 420px;
	display: flex;
	flex-direction: row-reverse;
	gap: 1rem;
	margin-left: -34.5rem;
	margin-top: 1rem;
	position: absolute;
	left: 35rem;
	/* bottom: 1rem; */
`;

const StyleSheetContainer7 = styled(Box)`
	width: 130px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-left: -34.5rem;
	/* margin-top: 1rem; */
	position: absolute;
	left: 35rem;

	bottom: 1.2rem;
`;

const StyleSheetContainer8 = styled(Box)`
	width: 130px;
	height: 700px;
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-between;

	gap: 1rem;
	margin-left: -34.5rem;
	/* margin-top: 1rem; */
	position: absolute;
	left: 35rem;

	bottom: 1.2rem;
`;

const StyleSheetContainer9 = styled(Box)`
	width: 130px;
	height: 700px;
	display: flex;
	flex-direction: row-reverse;
	justify-content: center;
	align-items: flex-end;
	gap: 1rem;
	margin-left: -15.5rem;
	position: absolute;
	left: 35rem;
	bottom: 1.2rem;
`;
const StyleSheetContainer10 = styled(Box)`
	width: 130px;
	height: 700px;
	display: flex;

	align-items: flex-start;
	gap: 1rem;
	margin-left: -39rem;
	position: absolute;
	/* left: 35rem; */
	/* bottom: 1.2rem; */
`;
const StyleSheetContainer11 = styled(Box)`
	width: 130px;
	height: 700px;
	display: flex;

	align-items: flex-start;
	gap: 1rem;
	margin-left: -39rem;
	position: absolute;
	/* left: 35rem; */
	/* bottom: 1.2rem; */
`;
const StyleSheetContainer12 = styled(Box)`
	width: 130px;
	height: 700px;
	display: flex;

	align-items: flex-start;
	gap: 1rem;
	margin-left: -39rem;
	position: absolute;
	/* left: 35rem; */
	/* bottom: 1.2rem; */
`;

//!2

const Frog = styled("img")({
	width: "100px",
	cursor: "pointer",
	position: "absolute",
	zIndex: 100,
	marginTop: "50px",
	animation: `${jumpAnimation} 2s infinite`,
});

const Frog1 = styled("img")({
	width: "100px",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	/* marginLeft: "11rem", */
	animation: `${jumpAnimation} 2s infinite`,
});

const Frog2 = styled("img")({
	width: "100px",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	marginLeft: "3rem",
	animation: `${jumpAnimation} 2s infinite`,
});

const Frog3 = styled("img")({
	width: "100px",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	/* marginLeft: "3rem", */
	animation: `${jumpAnimation} 2s infinite`,
});

const Frog4 = styled("img")({
	width: "100px",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	/* marginLeft: "16rem", */
	animation: `${jumpAnimation} 2s infinite`,
});

const Frog5 = styled("img")({
	width: "100px",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	animation: `${jumpAnimation} 2s infinite`,
});

const Frog6 = styled("img")({
	width: "100px",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	display: "flex",
	marginTop: "50px",
	marginLeft: "2.300rem",
});

const Frog9 = styled("img")({
	width: "100px",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	marginLeft: "1rem",
});

const Frog12 = styled("img")({
	width: "100px",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	marginLeft: "4rem",
	animation: `${jumpAnimation} 2s infinite`,
});

const Frog13 = styled("img")({
	width: "100px",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	// marginLeft: "4rem",
	animation: `${jumpAnimation} 2s infinite`,
});

const Frog14 = styled("img")({
	width: "100px",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	// marginLeft: "4rem",
	animation: `${jumpAnimation} 2s infinite`,
});

const Frog15 = styled("img")({
	width: "100px",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	// marginLeft: "4rem",
	animation: `${jumpAnimation} 2s infinite`,
});

const Frog16 = styled("img")({
	width: "100px",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	// marginLeft: "4rem",
	animation: `${jumpAnimation} 2s infinite`,
});
const Frog17 = styled("img")({
	width: "100px",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	// marginLeft: "4rem",
	animation: `${jumpAnimation} 2s infinite`,
});
const Frog18 = styled("img")({
	width: "6rem",
	height: "6rem",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	// marginLeft: "4rem",
	animation: `${jumpAnimation} 2s infinite`,
});
const Frog19 = styled("img")({
	width: "6rem",
	height: "6rem",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	// marginLeft: "4rem",
	animation: `${jumpAnimation} 2s infinite`,
});
const Frog20 = styled("img")({
	width: "6rem",
	height: "6rem",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	// marginLeft: "4rem",
	animation: `${jumpAnimation} 2s infinite`,
});
const Frog21 = styled("img")({
	width: "5.500rem",
	height: "5.500rem",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	// marginLeft: "4rem",
	animation: `${jumpAnimation} 2s infinite`,
});
const Frog22 = styled("img")({
	width: "5.500rem",
	height: "5.500rem",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	// marginLeft: "4rem",
	animation: `${jumpAnimation} 2s infinite`,
});
const Frog23 = styled("img")({
	width: "5.500rem",
	height: "5.500rem",
	cursor: "pointer",
	position: "relative",
	zIndex: 100,
	marginTop: "50px",
	// marginLeft: "4rem",
	animation: `${jumpAnimation} 2s infinite`,
});
//!!/1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const Lilypad1 = styled("img")({
	position: "absolute",
	zIndex: 99,
	left: "500px",
});

const Lilypad2 = styled("img")({
	position: "absolute",
	zIndex: 99,
	left: "11.100rem",
	width: "140px",
	top: "1rem",
	transform: "rotate(-30deg)",
});

const Lilypad3 = styled("img")({
	position: "absolute",
	zIndex: 99,
	left: "21rem",
	width: "140px",
	top: "1rem",
	transform: "rotate(90deg)",
});

const Lilypad4 = styled("img")({
	position: "absolute",
	zIndex: 99,
	left: "2.600rem",
	width: "140px",
	top: "1rem",
	transform: "rotate(240deg)",
});

const Lilypad5 = styled("img")({
	position: "absolute",
	zIndex: 99,
	left: "17rem",
	width: "140px",
	top: "1rem",
	transform: "rotate(263deg)",
});

const Lilypad6 = styled("img")({
	position: "absolute",
	zIndex: 99,
	left: "31.400rem",
	width: "140px",
	top: "1rem",
	transform: "rotate(210deg)",
});

const Lilypad10 = styled("img")(() => ({
	width: "140px",
}));

const Lilypad9 = styled("img")(() => ({
	width: "140px",
}));

const Lilypad13 = styled("img")({
	width: "140px",
	position: "absolute",
	zIndex: 99,
	left: "14.200rem",
	top: "19.200rem",
	transform: "rotate(73deg)",
});

const Lilypad14 = styled("img")({
	width: "140px",
});

const Lilypad15 = styled("img")({
	width: "140px",
});

const Lilypad16 = styled("img")({
	width: "140px",
});

const Lilypad17 = styled("img")({
	width: "130px",
});

const Lilypad18 = styled("img")({
	width: "130px",
});

const Lilypad19 = styled("img")({
	width: "130px",
});

const Lilypad20 = styled("img")({
	width: "130px",
});

const Lilypad21 = styled("img")({
	width: "130px",
});

const Lilypad22 = styled("img")({
	width: "120px",
});

const Lilypad23 = styled("img")({
	width: "120px",
});

const Lilypad24 = styled("img")({
	width: "120px",
	position: "relative",
   top:"37rem"
});
