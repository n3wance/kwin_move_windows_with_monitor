
function move_clients(yval) {
    var clients = workspace.clientList();
    for (var i=0; i<clients.length; i++) {
        var client = clients[i];
        if (client.caption != "Plasma") {
            print(client.caption);
            client.geometry = {
                x: client.x,
                y: client.y + yval,
                width: client.width,
                height: client.height
            };
        }
    }
}

function move_if_2160() {
    var h = workspace.workspaceHeight;
    print(h);
    // move down if new height tall
    if (h == 2160) {
        move_clients(1080);
    }
}

move_clients(5);

// workspace.screenResized.connect(move_if_2160);


