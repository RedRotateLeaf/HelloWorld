var line = 3;
Paint(3);
function Paint(n) {
    var i = 0;
    for (i = 0; i < n; i++) {
        var front = "";
        var kong = " ";
        for (var j = 0; j < n - 1 - i; j++) {
            front = front + kong;
        }
        var star = "*";
        var starx = "";
        for (var k = 0; k < 2 * i + 1; k++) {
            starx = starx + star;
        }
        console.log(front + starx);
    }
}
