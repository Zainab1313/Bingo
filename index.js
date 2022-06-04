var available_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
var entered_num = [];
var rows = 0;
var num_allocation = Math.floor(Math.random() * 25) + 1;
var check = [false, false, false, false, false,
    false, false, false, false, false,
    false, false, false, false, false,
    false, false, false, false, false,
    false, false, false, false, false]
var row_checked = [false, false, false, false, false, false, false, false, false, false, false, false]
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function remove_element(arr, element) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            arr.splice(i, 1);
            i--;
        }
    }
}


shuffle(available_num)
var shuffled = available_num

for (var i = 0; i < 25; i++) {
    var currentclass = ".btn".concat(i);

    $(currentclass).text("  ".concat(shuffled[i]))
}

$("button").on("click", function () {
    var theClass = this.className;
    var newClass = '.'.concat(theClass)
    $(newClass).attr("disabled", "disabled")
    let result = theClass.slice(3,);
    check[result] = true;
    new_num = shuffled[result]
    entered_num.push(new_num);
    row_count()
    if (rows === 5) {
        alert("You have won");
    }


    $(".array").text("Elements Entered: ".concat(entered_num));
});



// $(".btn").text((win / attempt) * 100 + "%");


function row_count() {
    if (check[0] && check[1] && check[2] && check[3] && check[4] && (!row_checked[0])) {
        rows += 1;
        row_checked[0] = true;
        for (var j=0; j<5;j++){
            $(".btn".concat(j)).css("background-color", "#d6299e");
        }
    }
    if (check[6] && check[7] && check[8] && check[9] && check[5] && (!row_checked[1])) {
        rows += 1;
        row_checked[1] = true;
        for (var j=6; j<10;j++){
            $(".btn".concat(j)).css("background-color", "#d6299e");
        }
    }
    if (check[11] && check[12] && check[13] && check[14] && check[10] && (!row_checked[2])) {
        rows += 1;
        row_checked[2] = true;
        for (var j=10; j<15;j++){
            $(".btn".concat(j)).css("background-color", "#d6299e");
        }
    }
    if (check[16] && check[17] && check[18] && check[19] && check[15] && (!row_checked[3])) {
        rows += 1;
        row_checked[3] = true;
        for (var j=15; j<20;j++){
            $(".btn".concat(j)).css("background-color", "#d6299e");
        }
    }
    if (check[20] && check[21] && check[22] && check[23] && check[24] && (!row_checked[4])) {
        rows += 1;
        row_checked[4] = true;
        for (var j=20; j<25;j++){
            $(".btn".concat(j)).css("background-color", "#d6299e");
        }
    }
    if (check[0] && check[5] && check[10] && check[15] && check[20] && (!row_checked[5])) {
        rows += 1;
        row_checked[5] = true;
        for (var j=0; j<21;j=j+5){
            $(".btn".concat(j)).css("background-color", "#d6299e");
        }
    }
    if (check[1] && check[6] && check[11] && check[16] && check[21] && (!row_checked[6])) {
        rows += 1;
        row_checked[6] = true;
        for (var j=1; j<22;j=j+5){
            $(".btn".concat(j)).css("background-color", "#d6299e");
        }
    }

    if (check[2] && check[7] && check[12] && check[17] && check[22] && (!row_checked[7])) {
        rows += 1;
        row_checked[7] = true;
        for (var j=2; j<23;j=j+5){
            $(".btn".concat(j)).css("background-color", "#d6299e");
        }
    }
    if (check[3] && check[8] && check[13] && check[18] && check[23] && (!row_checked[8])) {
        rows += 1;
        row_checked[8] = true;
        for (var j=3; j<24;j=j+5){
            $(".btn".concat(j)).css("background-color", "#d6299e");
        }
    }
    if (check[4] && check[9] && check[14] && check[19] && check[24] && (!row_checked[9])) {
        rows += 1;
        row_checked[9] = true;
        for (var j=4; j<25;j=j+5){
            $(".btn".concat(j)).css("background-color", "#d6299e");
        }
    }
    /////////////////////////
    if (check[0] && check[6] && check[12] && check[18] && check[24] && (!row_checked[10])) {
        rows += 1;
        row_checked[10] = true;
        for (var j=0; j<25;j=j+6){
            $(".btn".concat(j)).css("background-color", "#d6299e");
        }
    }
    if (check[4] && check[8] && check[12] && check[16] && check[20] && (!row_checked[11])) {
        rows += 1;
        row_checked[11] = true;
        for (var j=4; j<21;j=j+4){
            $(".btn".concat(j)).css("background-color", "#d6299e");
        }
    }

    $(".rowC").text("Rows Completed: ".concat(rows));
}
row_count();


