import Quagga from "@ericblade/quagga2";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useRecoilState } from "recoil";
import { charactersState } from "src/store";

import Scanner from "./Scanner";

interface ScanningModalProps {
  onClose: () => void;
}

const ScanningModal = ({ onClose }: ScanningModalProps) => {
  const [cameras, setCameras] = useState<MediaDeviceInfo[]>([]); // array of available cameras, as returned by Quagga.CameraAccess.enumerateVideoDevices()
  const scannerRef = useRef(null); // reference to the scanner element in the DOM

  const [, setCharacters] = useRecoilState(charactersState);

  useEffect(() => {
    const handleMobileBackEvent = () => {
      onClose();
    };

    window.addEventListener("popstate", handleMobileBackEvent);

    return () => {
      window.removeEventListener("popstate", handleMobileBackEvent);
    };
  }, []);

  useEffect(() => {
    const init = async () => {
      const enableCamera = async () => {
        await Quagga.CameraAccess.request(null, {});
      };
      const disableCamera = async () => {
        await Quagga.CameraAccess.release();
      };
      const enumerateCameras = async () => {
        const cameras = await Quagga.CameraAccess.enumerateVideoDevices();

        return cameras;
      };
      enableCamera()
        .then(disableCamera)
        .then(enumerateCameras)
        .then((cameras) => setCameras(cameras))
        .then(() => Quagga.CameraAccess.disableTorch()) // disable torch at start, in case it was enabled before and we hot-reloaded
        .catch((err) => {
          toast.error("Failed to access camera: " + err);
        });
      return () => disableCamera();
    };
    init();
  }, []);

  const handleBarcodeDetected = async (result: string) => {
    setCharacters((prev) => [...prev, result]);

    onClose();
  };

  return (
    <div className={"absolute top-0 left-0 w-full"}>
      <div ref={scannerRef} style={{ position: "relative" }}>
        {/* <video style={{ width: window.innerWidth, height: 480, border: '3px solid orange' }}/> */}
        <canvas // 왠지 모르겠지만 없으면 Quagga가 캔버스를 만드는 듯
          className="drawingBuffer"
          style={{
            position: "absolute",
            top: "0px",
            // left: '0px',
            // height: '100%',
            // width: '100%',
          }}
          width="0"
          height="0"
        />
        <Scanner
          constraints={{
            width: window.innerWidth,
            height: 480,
          }}
          scannerRef={scannerRef}
          cameraId={cameras[cameras.length - 1]?.deviceId} // 마지막 카메라 선택. 스마트폰에 카메라가 여러개인 경우 일반적으로 마지막 카메라가 성능이 좋음
          onDetected={handleBarcodeDetected}
        />
      </div>
    </div>
  );
};

export default ScanningModal;
