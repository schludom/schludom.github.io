import Countdown from "../components/countdown/Countdown"

const Subpage = () => {

  const targetDate = '2025-07-04T00:00:00';

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countdown to Event</h1>
        <Countdown targetDate={targetDate} />
      </header>
    </div>
  )
}

export default Subpage