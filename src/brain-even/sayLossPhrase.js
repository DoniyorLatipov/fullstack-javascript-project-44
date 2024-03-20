function sayLossPhrase(currect, name) {
  return (
    `${
      currect === 'yes' ? "'no'" : "'yes'"
    } is wrong answer ;(. Correct answer was ${
      currect === 'yes' ? "'yes'" : "'no'"
    }.` + `\nLet's try again, ${name}!`
  );
}

export default sayLossPhrase;
