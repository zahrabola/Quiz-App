//https://opentdb.com/api.php?amount=20&category=11&type=multiple

async function loadQuestion() {
  const APIUrl =
    "https://opentdb.com/api.php?amount=20&category=11&type=multiple";
  const result = await fetch("${ApiUrl}");
  const data = await result.json();
  console.log(data);
}
