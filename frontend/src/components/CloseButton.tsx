import React from "react";
import { ReactNode } from "react";

interface Props {
  position: string;
  onClick: () => void;
}

const CloseButton = ({ position, onClick }: Props) => {
  return (
    <div className={position}>
      <button type="button" className="btn-close" onClick={onClick}>
        {" "}
      </button>
    </div>
  );
};

export default CloseButton;
