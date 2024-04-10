import { FC } from "react";

interface OverlayTypes {
  loading: boolean;
  setOpenVideo: (value: React.SetStateAction<boolean>) => void,
}

const Overlay: FC<OverlayTypes> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="bg-black opacity-60 fixed inset-0 z-50 w-full h-full"></div>
  );
};

export default Overlay;
