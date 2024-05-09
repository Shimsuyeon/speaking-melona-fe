import { useNavigate } from "react-router-dom";
import Flex from "src/atoms/containers/flex/Flex";
import Text from "src/atoms/text/Text";
import Modal from "src/components/modal/Modal";
import Font from "src/styles/font";
interface FailureModalProps {
  onClose?: () => void;
}

const ScanFailModal = ({ onClose }: FailureModalProps) => {
  return (
    <Modal
      onClose={onClose}
      wrapperStyle={{
        width: "50%",
        maxWidth: "400px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Flex
        flexDirection={"column"}
        gap={"24px"}
        style={{
          width: "70%",
        }}
      >
        <Text size={"4rem"} textAlign={"center"}>
          😭
        </Text>

        <Text font={Font.SemiBold} size={"2rem"} textAlign={"center"}>
          Scan Failed
        </Text>
      </Flex>
    </Modal>
  );
};

export default ScanFailModal;
