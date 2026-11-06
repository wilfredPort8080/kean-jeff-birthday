import styled from "styled-components";
import { devices } from "../styles/breakpoints";
import confetti from "canvas-confetti";
const MascotContainer = styled.div`
  position: relative;

  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  width: 100%;

  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Mascot = styled.div`
  width: 20rem; /* w-64 */
  height: 20rem; /* h-64 */

  position: relative;

  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))
    drop-shadow(0 0 35px rgba(168, 85, 247, 0.5));

  transition: transform 0.3s ease;

  @media (min-width: ${devices.md}) {
    width: 40rem; /* w-80 */
    height: 40rem; /* h-80 */
  }
`;

const MascotWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover ${Mascot} {
    transform: scale(1.05);
  }
`;

const MascotSvg = styled.svg`
  width: 100%;
  height: 100%;

  filter: drop-shadow(0 20px 25px rgba(0, 0, 0, 0.15));
`;

const SpeechBubble = styled.div`
  position: absolute;

  top: -1rem; /* -top-4 */
  right: -9.5rem; /* -right-2 */

  background-color: #fff;
  color: #2e1065;

  font-weight: 700;

  padding: 0.375rem 0.75rem; /* py-1.5 px-3 */

  border-radius: 1rem; /* rounded-2xl */
  border-bottom-left-radius: 0;

  border: 2px solid #facc15;

  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);

  font-size: 0.75rem; /* text-xs */

  display: flex;
  align-items: center;
  gap: 0.25rem;

  animation: bounce 1s infinite;

  @media (min-width: ${devices.md}) {
    font-size: 1.875rem; /* text-sm */
  }
`;

const MascotKean = () => {
  const triggerMascotReaction = () => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#facc15", "#a855f7", "#ffffff", "#ef4444"],
    });
  };

  return (
    <MascotContainer onClick={triggerMascotReaction}>
      <MascotWrapper>
        <Mascot>
          <MascotSvg viewBox="0 0 300 320">
            <g transform="translate(100, 5) rotate(-8)">
              <polygon
                points="40,0 5,90 75,90"
                fill="#facc15"
                stroke="#ca8a04"
                stroke-width="3"
              />

              <path
                d="M 15 65 L 65 65"
                stroke="#ffffff"
                stroke-width="8"
                stroke-linecap="round"
              />
              <path
                d="M 23 45 L 57 45"
                stroke="#ffffff"
                stroke-width="8"
                stroke-linecap="round"
              />
              <path
                d="M 30 25 L 50 25"
                stroke="#ffffff"
                stroke-width="8"
                stroke-linecap="round"
              />

              <circle cx="40" cy="0" r="10" fill="#ffffff" />
            </g>

            <path
              d="M 80,120 
                                         C 50,150 40,210 50,260 
                                         C 60,300 90,310 150,310 
                                         C 210,310 240,300 250,260 
                                         C 260,210 250,150 220,120 
                                         C 190,95 170,90 150,90 
                                         C 130,90 110,95 80,120 Z"
              fill="#7e22ce"
              stroke="#581c87"
              stroke-width="6"
            />

            <path
              d="M 105 130 Q 125 120 135 135"
              stroke="#1e1b4b"
              stroke-width="7"
              fill="none"
              stroke-linecap="round"
            />
            <path
              d="M 165 135 Q 175 120 195 130"
              stroke="#1e1b4b"
              stroke-width="7"
              fill="none"
              stroke-linecap="round"
            />

            <ellipse cx="120" cy="155" rx="14" ry="18" fill="#ffffff" />
            <ellipse cx="180" cy="155" rx="14" ry="18" fill="#ffffff" />

            <circle cx="122" cy="156" r="8" fill="#0f172a" />
            <circle cx="178" cy="156" r="8" fill="#0f172a" />

            <circle cx="125" cy="152" r="3" fill="#ffffff" />
            <circle cx="181" cy="152" r="3" fill="#ffffff" />

            <path
              d="M 106 148 Q 120 140 134 148"
              stroke="#38bdf8"
              stroke-width="4"
              fill="none"
            />
            <path
              d="M 166 148 Q 180 140 194 148"
              stroke="#38bdf8"
              stroke-width="4"
              fill="none"
            />

            <path
              d="M 110 190 Q 150 230 190 190 Z"
              fill="#991b1b"
              stroke="#1e1b4b"
              stroke-width="4"
            />

            <path
              d="M 130 202 Q 150 190 170 202 Q 150 225 130 202 Z"
              fill="#ef4444"
            />

            <path
              d="M 60 210 Q 35 195 45 175 C 55 160 70 180 75 195"
              fill="#7e22ce"
              stroke="#581c87"
              stroke-width="5"
            />

            <path
              d="M 235 200 C 265 190 280 160 265 145 C 250 135 240 165 225 185"
              fill="#7e22ce"
              stroke="#581c87"
              stroke-width="5"
            />

            <g transform="translate(20, 160) rotate(-10)">
              <rect
                x="0"
                y="0"
                width="45"
                height="32"
                rx="6"
                fill="#fef08a"
                stroke="#ca8a04"
                stroke-width="2"
              />
              <rect x="12" y="-5" width="16" height="6" rx="2" fill="#ef4444" />
              <circle
                cx="22.5"
                cy="16"
                r="9"
                fill="#334155"
                stroke="#ffffff"
                stroke-width="2"
              />
              <circle cx="35" cy="8" r="3" fill="#38bdf8" />
            </g>
          </MascotSvg>

          <SpeechBubble>
            <span> Click here! 🎂 Happy Birthday Kean Jeff! 🎉</span>
          </SpeechBubble>
        </Mascot>
      </MascotWrapper>
    </MascotContainer>
  );
};

export default MascotKean;
