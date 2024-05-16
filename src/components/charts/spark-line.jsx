import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import PropTypes from "prop-types";

export const SparkLine = ({
  id,
  height,
  width,
  color,
  data,
  type,
  currentColor,
}) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: "${x} : data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

SparkLine.propTypes = {
  id: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  data: PropTypes.array,
  type: PropTypes.string,
  currentColor: PropTypes.string,
};
