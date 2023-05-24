const quotes = [
  'Aut viam inveniam aut faciam',
  'Fugit inreparabile tempus',
  'Quinon proficit deficit',
  'Omne ignotum pro magnifico',
  'Audentes fortuna iuvat',
  'Non omnia possumus omnes',
  'If you only do what you can do, you will never be more than you are now. - Master Oogway',
  'Nothing is impossible. - Master Oogway',
  'And those who were seen dancing were thought to be insane by those who could not hear the music. - Friedrich Nietzsche'
]

const getRandomQuotes = () => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

export default getRandomQuotes
