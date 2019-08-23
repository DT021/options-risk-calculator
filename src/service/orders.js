const breakEven = ({strike, premium, callOrPut}) => callOrPut === 'call' ? premium + strike : strike - premium

export default {
  breakEven
}
