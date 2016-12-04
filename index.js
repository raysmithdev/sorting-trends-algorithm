const lastMentioned = (a,b) => a.last_mention - b.last_mention

const mentions = (a,b) => {
  if(a.mentions === b.mentions)
    return a.last_mention - b.last_mention
    
  return false
}

// TODO: change trendings array with actual data from Twitter API for example

const trendings= [
    {name: "christmas", mentions: 56, last_mention: 12},
    {name: "spring", mentions: 89, last_mention: 11},
    {name: "halloween", mentions: 64, last_mention: 34},
    {name:"summer", mentions: 200, last_mention: 4}
]

trendings.sort(lastMentioned)
trendings.sort(mentions)

console.log(trendings)
