function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return;

  function handleOnClick() {
    let obj = {};
    if (index < numQuestions - 1) obj = { type: "nextQuestion" };
    else {
      console.log("type: finish");
      obj = { type: "finish" };
    }

    dispatch(obj);
  }

  return (
    <button className="btn btn-ui btn-mt" onClick={handleOnClick}>
      {index < numQuestions - 1 ? "Next" : "Finish"}
    </button>
  );
}

export default NextButton;
