import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";

import CopyCode from "reveal.js-copycode/plugin/copycode/copycode.esm.js";

let deck = new Reveal({
  plugins: [Markdown, Highlight, RevealNotes, CopyCode],
});

deck.initialize();
