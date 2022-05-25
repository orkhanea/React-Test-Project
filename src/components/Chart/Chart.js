import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {
                props.dataPoints.map(dataPoints =>
                    <ChartBar
                        key={dataPoints.label}
                        maxValue={totalMax}
                        value={dataPoints.value}
                        label={dataPoints.label}
                    />
                )
            }
        </div>
    )
}
export default Chart;
