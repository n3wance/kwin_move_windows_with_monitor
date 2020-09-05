
workspace.screenResized.connect(move_if_2160);

function move_if_2160() {
    var h = workspace.workspaceHeight;
    print(h);
    // move down if new height tall
    if (h == 2160) {
        move_clients(0, 1080);
    }
}

// move_clients(0, 1080);
function move_clients(x, y) {
    var clients = workspace.clientList();
    for (var i=0; i<clients.length; i++) {
        var client = clients[i];
        if (client.caption != "Plasma") {
            print(client.caption);
            client.geometry = {
                x: client.x,+ x
                y: client.y + y,
                width: client.width,
                height: client.height
            };
        }
    }
}
