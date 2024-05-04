interface WindowContainerProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const OIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="9"
    viewBox="0 0 9 9"
    fill="none"
    style={{
      marginRight: "6px",
    }}
  >
    <path
      d="M7.77272 4.30331C7.77272 6.22812 6.15926 7.81451 4.13636 7.81451C2.11346 7.81451 0.5 6.22812 0.5 4.30331C0.5 2.3785 2.11346 0.792114 4.13636 0.792114C6.15926 0.792114 7.77272 2.3785 7.77272 4.30331Z"
      stroke="#3A3A3A"
    />
  </svg>
);

const MinimizeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="2"
    viewBox="0 0 9 2"
    fill="none"
    style={{
      margin: "5px 4px 0 0",
    }}
  >
    <path
      d="M0.181763 0.0223999H8.45448V1.16846H0.181763V0.0223999Z"
      fill="#3A3A3A"
    />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="12"
    viewBox="0 0 13 12"
    fill="none"
  >
    <rect
      width="1.46575"
      height="8.79453"
      transform="matrix(0.731126 -0.682243 0.731126 0.682243 2.81897 3.50027)"
      fill="#3A3A3A"
    />
    <rect
      width="8.79453"
      height="1.46575"
      transform="matrix(0.731126 -0.682243 0.731126 0.682243 2.81897 8.49969)"
      fill="#3A3A3A"
    />
  </svg>
);

const WindowContainer = ({ children, style }: WindowContainerProps) => {
  return (
    <div className={"border-2 border-[#3a3a3a]"} style={style}>
      <div
        className={
          "p-[3px] flex justify-end items-center w-full border-b-2 border-[#3a3a3a] bg-[#e7e7e7]"
        }
      >
        <OIcon />
        <MinimizeIcon />
        <XIcon />
      </div>

      {children}
    </div>
  );
};

export default WindowContainer;
