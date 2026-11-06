import styled from "styled-components";
import { devices } from "../styles/breakpoints";
import MascotKean from "./MascotKean";
import FormInvitation from "./FormInvitation";

const StyledMainContainer = styled.div`
  position: relative;
  z-index: 10;

  max-width: 80%; /* max-w-5xl */
  margin: 0 auto;

  padding-left: 1rem;
  padding-right: 1rem;

  padding-top: 1.5rem; /* pt-6 */

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${devices.md}) {
    padding-top: 2.5rem; /* pt-10 */
  }
`;

const StyledHeader = styled.header`
  text-align: center;

  margin-bottom: 1.5rem;
  margin-top: 3rem;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLogo = styled.div`
  color: var(--color-grey-0);
  background: linear-gradient(
    to right,
    var(--color-red-500),
    var(--color-red-600),
    var(--color-amber-500)
  );
  padding: 0.625rem 1.5rem;
  border-radius: var(--border-radius-lg);

  border: 2px solid var(--color-yellow-300);

  box-shadow: var(--shadow-double);

  transform: rotate(-2deg);
  transition: transform 300ms ease;

  &:hover {
    transform: rotate(0deg);
  }
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-weight: 800;

  & > span:first-child {
    font-size: 3rem;
    line-height: 1;
    letter-spacing: 0.1rem;
    filter: var(--filter-sm);
    @media (max-width: ${devices.md}) {
      font-size: 2rem; /* pt-10 */
    }
    @media (max-width: ${devices.sm}) {
      font-size: 1.5rem; /* pt-10 */
    }
  }
  & > span:nth-child(2) {
    color: var(--color-yellow-300);
    font-family: "Baloo 2", cursive;
    font-style: italic;
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: 0.05rem;
    @media (max-width: ${devices.md}) {
      font-size: 1.5rem; /* pt-10 */
    }
    @media (max-width: ${devices.sm}) {
      font-size: 1rem; /* pt-10 */
    }
  }
`;

const StyledMain = styled.main`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  gap: 2rem;
  align-items: center;

  margin-top: 0.5rem;

  @media (min-width: ${devices.md}) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

const LeftSection = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;

  @media (min-width: ${devices.md}) {
    grid-column: span 6 / span 6;

    align-items: flex-start;
    text-align: left;
  }

  & > p {
    color: #ddd6fe; /* purple-200 */

    font-size: 0.875rem; /* text-sm */
    font-weight: 500; /* font-medium */

    @media (min-width: ${devices.md}) {
      font-size: 2rem; /* text-base */
    }
  }
`;

const HeroTextWrapper = styled.div`
  position: relative;

  width: 100%;

  text-transform: uppercase;
  font-weight: 900;

  letter-spacing: -0.025em;
  line-height: 1;

  user-select: none;

  margin-bottom: 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 4.8rem; /* text-5xl */

  font-weight: 800; /* font-extrabold */

  color: #facc15; /* text-yellow-400 */

  letter-spacing: 0.025em; /* tracking-wide */

  transform: rotate(-1deg);

  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.8));

  @media (min-width: ${devices.sm}) {
    font-size: 6rem; /* text-6xl */
  }

  @media (min-width: ${devices.md}) {
    font-size: 7.2rem; /* text-7xl */
  }
`;

const OutlineText = styled.div`
  font-size: 3.6rem; /* text-4xl */

  color: transparent;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.4);

  opacity: ${(props) =>
    (props.$opacity === "low" && "0.2") ||
    (props.$opacity === "medium" && "0.4") ||
    (props.$opacity === "high" && "0.6") ||
    "1"};

  margin-top: -0.5rem; /* -mt-2 */

  transform: rotate(-1deg);

  padding-left: 0.25rem; /* pl-1 */

  @media (min-width: ${devices.sm}) {
    font-size: 4.8rem; /* text-5xl */
    margin-top: -0.75rem; /* -mt-3 */
  }

  @media (min-width: ${devices.md}) {
    font-size: 6rem; /* text-6xl */
  }
`;

const Container = ({ setIsTrue }) => {
  return (
    <StyledMainContainer>
      <StyledHeader>
        <StyledLogo>
          <span>
            kean's 7<sup>th</sup>
          </span>
          <span>Birthday Celebration</span>
        </StyledLogo>
      </StyledHeader>

      <StyledMain>
        <LeftSection>
          <HeroTextWrapper>
            <HeroTitle>JOIN MY PARTY!</HeroTitle>
            <OutlineText $opacity="high">JOIN MY PARTY!</OutlineText>
            <OutlineText $opacity="medium">JOIN MY PARTY!</OutlineText>
            <OutlineText $opacity="low">JOIN MY PARTY!</OutlineText>
          </HeroTextWrapper>

          <MascotKean />

          <p>
            Get ready for delicious treats, awesome games, and endless fun!
            reserved your invitation details below and confirm your spot!
          </p>
        </LeftSection>

        <FormInvitation setIsTrue={setIsTrue} />
      </StyledMain>
    </StyledMainContainer>
  );
};

export default Container;
