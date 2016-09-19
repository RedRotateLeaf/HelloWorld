string line = 3;
Paint(3);
function Paint(n) {
    int i=0;
    for(i=0;i<n;i++) {
        string front = "";
        string kong = " "; 
        for(int j=0;j<n-1-i;j++) {
            front = front + kong;
        }
        string star = "*";
        string starx = "";
        for(int k=0;k<2*i+1;k++) {
            starx = starx + star;
        }
        console.log(front+starx);
    }
}
