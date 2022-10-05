import { Modal, ModalBox, ModalButton, ModalLink } from "./LayoutStyles";

export const NewModal = ({ closeModal }) => {
  return (
    <Modal>
      <ModalBox>
        Hey There! Thanks for visiting my site, I have recently made a new
        portfolio to replace this one!
        <br /> <br />
        Please feel free to check it out. 😄
        <ModalLink href="https://sandonl.vercel.app/" target="_blank">
          Take me there!
        </ModalLink>
        <ModalButton onClick={closeModal}> View this site instead </ModalButton>
      </ModalBox>
    </Modal>
  );
};

export default NewModal;
