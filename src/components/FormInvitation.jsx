import styled from "styled-components";
import { devices } from "../styles/breakpoints";
import { FaCalendarDay, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ButtonReservation from "./ButtonReservation";

const RightSection = styled.div`
  width: 100%;

  @media (min-width: ${devices.md}) {
    grid-column: span 6 / span 6;
  }
`;

const InvitationCard = styled.div`
  background: rgba(254, 240, 138, 0.92);
  backdrop-filter: blur(12px);

  border: 4px solid #facc15;
  border-radius: 1.5rem;

  box-shadow: var(--shadow-double);

  padding: 1.5rem;
  position: relative;
  color: #2e1065;

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }

  @media (min-width: ${devices.md}) {
    padding: 2rem;
  }
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 2px solid rgba(234, 179, 8, 0.3);

  padding-bottom: 1rem;
  margin-bottom: 1.5rem;

  & > div {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    & span {
      font-size: 4rem;
      line-height: 1;
    }
    & h2 {
      font-size: 1.5rem;
      line-height: 1.2;
      font-weight: 900;
      letter-spacing: 0.05rem;
      color: var(--color-purple-900);
      text-transform: uppercase;
    }
  }
`;

const InvitationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem; /* gap-2 */

  background: rgba(255, 255, 255, 0.8);

  padding: 0.875rem; /* p-3.5 */

  border-radius: 1rem; /* rounded-2xl */

  border: 2px solid rgba(253, 224, 71, 0.8);

  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

  @media (min-width: ${devices.md}) {
    flex-direction: row;
    align-items: center;

    gap: 1rem; /* gap-4 */
  }
`;

const CalenderIcon = styled(FaCalendarDay)`
  color: var(--color-amber-500);
  font-size: 1.4rem;
`;

const ClockIcon = styled(FaLocationDot)`
  color: var(--color-amber-500);
  font-size: 1.4rem;
`;

const VenueIcon = styled(FaClock)`
  color: var(--color-amber-500);
  font-size: 1.4rem;
`;

const Input = styled.input`
  width: 100%;

  background: transparent;

  font-weight: 700;
  font-size: 2.125rem; /* text-lg */
  font-family: inherit;
  color: #2e1065; /* text-purple-950 */

  border: none;

  border-radius: 0.5rem; /* rounded-lg */

  padding: 0.25rem 0.5rem; /* py-1 px-2 */

  transition: all 0.2s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #7e22ce; /* focus:ring-2 focus:ring-purple-600 */
  }

  &:disabled {
    opacity: 0.9;
  }
`;

const TwoColumnGrid = styled.div`
  display: grid;

  grid-template-columns: 1fr;

  gap: 1rem;

  @media (min-width: ${devices.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Label = styled.label`
  font-weight: 900; /* font-black */

  color: var(--color-purple-900); /* text-purple-900 */

  text-transform: uppercase;

  letter-spacing: 0.05em; /* tracking-wider */

  font-size: 0.75rem; /* text-xs */

  display: flex;
  align-items: center;

  gap: 0.375rem; /* gap-1.5 */
`;

const FormInvitation = ({ setIsTrue }) => {
  return (
    <RightSection>
      <InvitationCard>
        <CardHeader>
          <div>
            <span>🎁</span>
            <h2>Party Details</h2>
          </div>
        </CardHeader>

        <InvitationForm>
          <FormRow>
            <Input
              type="text"
              id="inputTo"
              value="Best Friend & Family!"
              readonly
            />
          </FormRow>

          <TwoColumnGrid>
            <FormRow>
              <Label>
                <CalenderIcon />
                Date:
              </Label>
              <Input
                type="text"
                id="inputDate"
                value="November 30, 2026"
                readonly
              />
            </FormRow>

            <FormRow>
              <Label>
                <ClockIcon />
                Time:
              </Label>
              <Input
                type="text"
                id="inputTime"
                value="9:00 am - 11:00 am "
                readonly
              />
            </FormRow>
          </TwoColumnGrid>

          <FormRow>
            <Label>
              <VenueIcon />
              Venue:
            </Label>
            <Input
              type="text"
              id="inputVenue"
              value="Mcdo, Rizal Avenue. San Carlos City, Pangasinan"
              readonly
            />
          </FormRow>
        </InvitationForm>

        <ButtonReservation setIsTrue={setIsTrue} />
      </InvitationCard>
    </RightSection>
  );
};

export default FormInvitation;
