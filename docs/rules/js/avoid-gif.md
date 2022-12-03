# Use less than 3 Gif

## Rule Details

This rule aims to avoid tu use more than 3 Gif:

A gif is still a video, in that case it still use a lot of resources (such as need: request to be loaded, need processor resources to be displayed ).
So if you replace a video by a gif, it will be OK to ignore the rule. But in any other cases it would be aberrant to use more than 3 Gifs

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