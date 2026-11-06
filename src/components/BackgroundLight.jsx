import styled from "styled-components";
import { devices } from "../styles/breakpoints";

const StyledBackgroundLight = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`;

const Balloon = styled.div`
  position: absolute;
  top: 2.5rem;
  left: -2.5rem;

  width: 11rem;
  height: 14rem; /* h-56 */

  background: linear-gradient(to top right, #eab308, #fcd34d, #fef9c3);

  border-radius: 9999px;

  filter: blur(1px);

  opacity: 0.9;

  transform: rotate(-12deg);

  display: flex;
  align-items: center;
  justify-content: center;

  animation: floatSlow 4s ease-in-out infinite;

  @media (min-width: ${devices.md}) {
    width: 16rem; /* w-64 */
    height: 20rem; /* h-80 */
  }

  & > div:first-child {
    width: 100%;
    height: 100%;
    position: relative;

    & > div {
      position: absolute;
      bottom: 0.5rem;
      left: 50%;

      transform: translateX(-50%);

      width: 0.75rem;
      height: 1rem;

      background-color: #d97706;

      clip-path: polygon(50% 100%, 0 0, 100% 0);
    }
  }
`;

const BallonR = styled.div`
  position: absolute;

  top: 3rem; /* -top-12 */
  right: -3rem; /* -right-12 */

  width: 12rem; /* w-48 */
  height: 15rem; /* h-60 */

  background: linear-gradient(
    to top left,
    #fbbf24,
    /* amber-400 */ #fde047,
    /* yellow-300 */ #fef3c7 /* amber-100 */
  );

  border-radius: 9999px;

  filter: blur(1px);
  opacity: 0.9;

  transform: rotate(12deg);

  animation: floatReverse 5s ease-in-out infinite 1s;

  @media (min-width: ${devices.md}) {
    width: 18rem; /* w-72 */
    height: 24rem; /* h-96 */
  }
`;

const Sparkle = styled.div`
  position: absolute;
  top: 26rem;
  left: 25%;

  color: #fde047;
  font-size: 2.875rem;

  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;
const PingStar = styled.div`
  position: absolute;
  top: 15rem;
  right: 33.333333%;

  color: #fde047;
  font-size: 2.5rem;

  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
`;

const BounceStar = styled.div`
  position: absolute;

  bottom: 8rem;
  left: 2.5rem;

  color: #facc15;

  font-size: 2.25rem;
  line-height: 2.5rem;

  animation: bounce 1s infinite;
`;

const BackgroundLight = () => {
  return (
    <StyledBackgroundLight>
      <Balloon>
        <div>
          <div></div>
        </div>
      </Balloon>
      <BallonR></BallonR>

      <Sparkle>✨</Sparkle>
      <PingStar>✨</PingStar>
      <BounceStar>✨</BounceStar>
    </StyledBackgroundLight>
  );
};

export default BackgroundLight;
