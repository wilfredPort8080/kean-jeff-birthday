import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);

  z-index: 50;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  transition: opacity 0.3s ease;
`;

const ModalCard = styled.div`
  position: relative;

  width: 100%;
  max-width: 28rem;

  padding: 1.5rem;

  background: #2e1065;

  border: 4px solid #facc15;
  border-radius: 1.5rem;

  text-align: center;

  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

  transform: scale(0.95);

  transition: transform 0.3s ease;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;

  top: 1rem;
  right: 1rem;

  width: 2.25rem;
  height: 2.25rem;

  border: none;
  border-radius: 999px;

  background: #581c87;
  color: #fde047;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background: #6b21a8;
  }
`;

const PartyEmoji = styled.div`
  width: 5rem;
  height: 5rem;

  background: #facc15;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.5rem;

  margin: 0 auto 1rem auto;

  box-shadow: var(--shadow-lg);

  animation: bounce 1s infinite;
`;

const Title = styled.h3`
  color: #fde047;

  font-weight: 900;

  text-transform: uppercase;

  letter-spacing: 0.025em;

  margin-bottom: 0.5rem;

  font-size: 2rem;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: #ddd6fe;
  margin-bottom: 1.5rem;
  font-size: 1.875rem;
`;

const DetailsCard = styled.div`
  background: rgba(88, 28, 135, 0.8);

  border: 1px solid #6b21a8;
  border-radius: 1rem;

  padding: 1rem;

  text-align: left;

  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  font-size: 0.75rem;
`;

const ConfirmButton = styled.button`
  width: 100%;

  padding: 0.75rem;

  border: none;
  border-radius: 0.75rem;

  background: linear-gradient(to right, #facc15, #f59e0b);

  color: #2e1065;

  font-weight: 900;

  cursor: pointer;

  transition: all 0.3s ease;

  box-shadow: var(--shadow-lg);

  &:hover {
    background: linear-gradient(to right, #fde047, #fbbf24);
  }
`;

const ModalReserved = ({ setIsTrue }) => {
  return (
    <ModalOverlay>
      <ModalCard>
        <CloseButton onClick={() => setIsTrue((c) => !c)}>✕</CloseButton>

        <PartyEmoji>🥳</PartyEmoji>

        <Title>YOU'RE ON THE LIST!</Title>

        <Description>
          Woohoo! We can't wait to celebrate together! Get ready for party
          explosion!
        </Description>

        <ConfirmButton>Awesome! See you there!</ConfirmButton>
      </ModalCard>
    </ModalOverlay>
  );
};

export default ModalReserved;
