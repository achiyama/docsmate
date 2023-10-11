type SVGIconProps = {
  type: SVGIconType;
  color: string;
  size: number;
};

type SVGIconType = "checkmark" | "prohibition";

export const SVGIcon = (props: SVGIconProps) => {
  const className = `dt-w-${props.size} dt-h-${props.size}`;
  return (
    <div>
      {props.type === "checkmark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          fill="currentColor"
          className="dt-w-6 dt-h-6"
          color={props.color}
          viewBox="0 0 200 200">
          <path
            d="M113.626,263a100,100,0,1,0,100,100,100,100,0,0,0-100-100Zm52.351,46.256a14.621,14.621,0,0,1,11.965,23.865L113,414.961a14.621,14.621,0,0,1-23.328-.562L45,352.159a14.621,14.621,0,1,1,23.753-17.043l33.377,46.5,52.908-66.669a14.621,14.621,0,0,1,10.94-5.69Z"
            transform="translate(-13.626 -263.001)"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          fill="currentColor"
          className="dt-w-6 dt-h-6"
          color={props.color}
          viewBox="0 0 200 200">
          <path
            d="M113.1,262.472a100,100,0,1,0,100,100A100.2,100.2,0,0,0,113.1,262.472Zm0,26.74a73.075,73.075,0,0,1,42.785,13.714L53.547,405.252A73.343,73.343,0,0,1,113.1,289.212Zm61.3,33.011A73.355,73.355,0,0,1,72.849,423.768Z"
            transform="translate(-13.097 -262.472)"
          />
        </svg>
      )}
    </div>
  );
};
