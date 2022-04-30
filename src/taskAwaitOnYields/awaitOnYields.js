export default function awaitOnYields(generatorToProcess) {
	let g = generatorToProcess();
  function callNext() {
    let v = g.next();
    if (v.done === false) {
      v.value.then((res) => {
        awaitResults.push(res);
        callNext(g);
      });
    }
  }
  let awaitResults = [];
  callNext(g);

  return awaitResults;
}