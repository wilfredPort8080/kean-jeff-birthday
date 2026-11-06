import styled from "styled-components";
import { devices } from "../styles/breakpoints";
import { FaPaperPlane, FaShareNodes } from "react-icons/fa6";
import confetti from "canvas-confetti";
const ActionContainer = styled.div`
  margin-top: 2rem; /* mt-8 */

  display: flex;
  flex-direction: column;

  gap: 0.75rem; /* gap-3 */

  @media (min-width: ${devices.md}) {
    flex-direction: row;
  }
`;

const RSVPButton = styled.button`
  flex: 1;

  background: linear-gradient(to right, #facc15, #fbbf24, #eab308);

  color: #2e1065;

  font-weight: 900;
  font-size: 1.25rem; /* text-xl */

  padding: 1rem 1.5rem;

  border-radius: 1rem; /* rounded-2xl */
  border: 2px solid #fef08a;

  box-shadow: var(--shadow-lg);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  cursor: pointer;

  animation: pulseGlow 2.5s infinite;

  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #fde047, #fbbf24, #fcd34d);

    transform: translateY(-0.125rem); /* -translate-y-0.5 */
  }

  &:active {
    transform: translateY(0);
  }
`;
const ShareButton = styled.button`
  background-color: #581c87; /* purple-900 */
  color: #fde047; /* yellow-300 */

  padding: 1rem; /* p-4 */

  border-radius: 1rem; /* rounded-2xl */

  border: 2px solid #6b21a8; /* purple-700 */

  font-weight: 700;

  box-shadow: var(--shadow-md);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background-color: #6b21a8; /* purple-800 */
  }
`;

const ButtonReservation = ({ setIsTrue }) => {
  const triggerMascotReaction = () => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#facc15", "#a855f7", "#ffffff", "#ef4444"],
    });
  };

  const handleRsvp = () => {
    triggerMascotReaction();
    setIsTrue((c) => !c);
  };
  return (
    <ActionContainer>
      <RSVPButton onClick={handleRsvp}>
        <FaPaperPlane />
        <span>RSVP NOW!</span>
      </RSVPButton>

      <ShareButton>
        <FaShareNodes />
        <span>Share</span>
      </ShareButton>
    </ActionContainer>
  );
};

export default ButtonReservation;
