let smallimages = document.getElementById("smprod");
let bigshoe = document.querySelectorAll(".bigprodimg");
let smshoe = document.querySelectorAll(".smlimg");
let lsttxt = ['<span class="bstslr">Best Seller</span><br><span>$115</span>', '<span>$115</span>', '<span style="text-decoration: line-through;">$115</span><br><span style="color: green;">Best Seller</span>', '<span style="text-decoration: line-through;">$115</span><br><span style="color: green;">Best Seller</span>'];
let lsttxt2 = [
    "<span class='bstslr'>Best Seller</span><br><span>Nike Air Force 1 '07</span><br><span class='gtxt'>Men's Shoes</span><br><span class='gtxt'>4 Colors</span><br><span>$115</span>",
    "<span>Nike Air Force 1 '07</span><br><span class='gtxt'>Men's Shoes</span><br><span class='gtxt'>4 Colors</span><br><span>$115</span>",
    "<span>Nike Air Force 1 '07</span><br><span class='gtxt'>Men's Shoes</span><br><span class='gtxt'>4 Colors</span><br><span style='color: gray;text-decoration: line-through;'>$115</span><br><span style='color: green;'>See Price in Bag</span>", 
    "<span>Nike Air Force 1 '07</span><br><span class='gtxt'>Men's Shoes</span><br><span class='gtxt'>4 Colors</span><br><span style='color: gray;text-decoration: line-through;'>$115</span><br><span style='color: green;'>See Price in Bag</span>"
];

for (let i = 0; i < bigshoe.length; i++) {
    if (i != 0) {
        bigshoe[i].style.display = "none";
    }
}

document.getElementById("content").addEventListener("mouseover", () => {
    smallimages.style.display = "block";
    for (let i = 0; i < smshoe.length; i++) {
        smshoe[i].addEventListener("mouseover", () => {
            bigshoe[i].style.display = "block";
            document.getElementById("smtxt").innerHTML = lsttxt[i];
            document.getElementById("content").addEventListener("mouseout", () => {
                document.getElementById("smtxt").innerHTML = lsttxt2[i];
            });
            for (let j = 0; j < bigshoe.length; j++) {
                if (j != i) {
                    bigshoe[j].style.display = "none";
                }
            }
        });
    }
    document.getElementById("content").addEventListener("mouseout", () => {
        smallimages.style.display = "none";
    });
});