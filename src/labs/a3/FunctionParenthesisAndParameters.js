function FunctionParenthesisAndParameters() {
  const square = (a) => a * a;
  const plusOne = (a) => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);

  return (
    <>
      <h3> func parenthesis and params </h3>
      twosquared = {twoSquared} <br />
      squre(2) = {square(2)}
      <br />
      threePlusOne = {threePlusOne}
      <br />
      plusOne(3) = {plusOne(3)}
      <br />
    </>
  );
}
export default FunctionParenthesisAndParameters;
