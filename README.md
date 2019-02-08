Blah blah blah. Usual stuff.

Try it out live @ http://thomasoniii.github.io/synchronous-sagas

Honestly, the code isn't that interesting. It just creates a simple redux store with a single value ("bucket"), that has
four keys off of it. When you click the big red button, it'll synchronously increment the alfa, bravo, charlie, and delta keys.
Two are fired after the other in the event handler, and two are done via redux-saga.

The sagas fire synchronously in the same event loop. So the handle calls incrementAlfa, which fires a saga to call incrementCharlie.
We come back to the handler and call incrementBravo, which in turn fires a saga to call incrementDelta.

Of course, if you're doing something explicitly asynchronous, then all bets are off as usual.
