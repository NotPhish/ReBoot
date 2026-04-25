import Counter from "@/container/counter";

let isRunning: boolean = false;
let numberOfStarts: number = 0;

// If first called,

export default function TimerLogic() {
  startTimer();
  alert(numberOfStarts);
}

function startTimer() {
  numberOfStarts++;
  return <Counter isRunning={true} numberOfStarts={numberOfStarts}></Counter>;
}

function stopTimer() {
  return <Counter isRunning={false}></Counter>;
}
