import '../src/App.css'
import { AppRoutes } from '../src/Routes.tsx'

function App() {

  // const [tweets, setTweets] = useState<string[]>([
  //   'Tweet 1',
  //   'Tweet 2',
  //   'Tweet 3',
  //   'Tweet 4'
  // ])

  // function createTweet() {
  //   setTweets([...tweets, 'Tweet 5'])
  // }

  return (
    <AppRoutes />
    // <>
    //   {
    //     tweets.map(tweet => {
    //       return <Tweet text={tweet} />
    //     })
    //   }

    //   <br />
    //   <button
    //     onClick={createTweet}
    //     style={
    //       {
    //         backgroundColor: "blueviolet",
    //         border: 0,
    //         padding: '6px 12px',
    //         color: '#fff'
    //       }
    //     }
    //   >Adicionar Tweet</button>
    // </>
  );
}

export default App
