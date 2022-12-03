# Use less than 3 Gif

## Rule Details

This rule aims to avoid tu use more than 3 Gif:

Examples of **incorrect** code for this rule:

````js
const Page = (props) => {
  return (<div>
          <img src="https://media.giphy.com/media/uA8WItRYSRkfm/giphy.gif" alt="loading..." />
          <img src="https://media.giphy.com/media/uA8WItRYSRkfn/giphy.gif" alt="loading..." />
          <img src="https://media.giphy.com/media/uA8WItRYSRkfm/giphy.gif" alt="loading..." />
          <img src="https://media.giphy.com/media/uA8WItRYSRkfm/giphy.gif" alt="loading..." />
        </div>);
}
````

Examples of **correct** code for this rule:

````js
const Page = (props) => {
  return (<div>
          <img src="https://media.giphy.com/media/uA8WItRYSRkfm/giphy.gif" alt="loading..." />
          <img src="https://media.giphy.com/media/uA8WItRYSRkfn/giphy.gif" alt="loading..." />
          <img src="https://media.giphy.com/media/uA8WItRYSRkfm/giphy.gif" alt="loading..." />
        </div>);
}
````