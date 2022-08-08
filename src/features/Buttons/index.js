import { ActionButtons, ActionButton } from "./styled";

const Buttons = ({ query, onClick, disabled }) => {

  return (
    <ActionButtons>
      <ActionButton onClick={onClick} disabled={disabled}>
        {query}
      </ActionButton>
    </ActionButtons>

  )
};

export default Buttons;