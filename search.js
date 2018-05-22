var fetch = require("node-fetch");

if (process.argv.length <= 3) {
    console.log("Usage: " + __filename + " STREAM_NAME VIEWER_NAME");
    process.exit(-1);
}

fetch("http://tmi.twitch.tv/group/user/" + process.argv[2] + "/chatters")
  .then(res => res.json())
  .then(out => {
    if (out.chatters.viewers.includes(process.argv[3])) {
      console.log("Yes :)");
    } else {
      console.log("No :(");
    }
  })
  .catch(err => {
    console.error(err);
  });
