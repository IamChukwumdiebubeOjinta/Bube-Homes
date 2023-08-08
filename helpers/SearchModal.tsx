import { Modal } from "antd";
import { FC } from "react";

interface SearchModalProps {
  title: React.ReactNode;
  centered: boolean;
  open: boolean;
  onCancel: () => void;
  onOk: () => void;
}

const SearchModal: FC<SearchModalProps> = ({
  title,
  centered,
  onCancel,
  onOk,
  open,
}) => (
  <Modal
    title={title}
    centered={centered}
    open={open}
    onOk={onOk}
    onCancel={onCancel}
  >
    <p>some contents...</p>
    <p>some contents...</p>
    <p>some contents...</p>
  </Modal>
);

export default SearchModal;
