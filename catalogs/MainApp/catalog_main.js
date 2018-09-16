var api = require("api");

var __quest_author   = null;
var __quest_permlink = null;

function start_quest(data) {
    timeout(2, function() {
        api.start_quest({ 
            "author":__quest_author, 
            "permlink":__quest_permlink 
        }); 
    });

    __quest_author   = data["author"];
    __quest_permlink = data["permlink"];

    document.value("QUEST_MODE", true);
}

function finish_quest(data) {
    api.finish_quest({ 
        "author":__quest_author, 
        "permlink":__quest_permlink,
        "comment":data["comment"]
    }, function(result) {
        timeout(1, function() {
            controller.action("app-close");
        });
    });
}
