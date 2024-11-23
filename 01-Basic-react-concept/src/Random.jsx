function RandomNum() {

  let number = Math.random() * 100;

  return <h2 style={{ 'backgroundColor': 'royalblue' }}>
    Random Number is : {Math.round(number)}
  </h2>
}

export default RandomNum;