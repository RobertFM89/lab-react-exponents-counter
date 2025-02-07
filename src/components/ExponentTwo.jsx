const ExponentTwo = ({count}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}</p>
    <p className="exponent-result">{count} * 2 = <span className="total">{count * Math.pow(count, 1)}</span></p>
  </div>
);

export default ExponentTwo;