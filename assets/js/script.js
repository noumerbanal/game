$(document).ready(() => {
    let score = 0;
    let level = 1;

    levelReload();

    $('#check').click(()=>{
        let ans1 = Number($('#input1').val());
        let ans2 = Number($('#input2').val());
        let ans3 = Number($('#input3').val());
        let ans4 = Number($('#input4').val());
    
        if( ans1 + ans3 == Number($('#sum1').html()) && ans2 + ans4 == Number($('#sum2').html()) && ans1 + ans2 == Number($('#sum3').html()) && ans3 + ans4 == Number($('#sum4').html())){
            score += 5;
            level += 1;
            $('#score').html(score);
            $('#level').html(level);
            console.log(level)
            levelReload();
        } else if (ans1 > 4 || ans2 > 4 || ans3 > 4 || ans4 > 4){
            levelReload();
            $('.note > li:nth-child(2)').css('color','darkred');
        } else{
            levelReload();
            $('.note > li:nth-child(1)').css('color','darkred');
        }		
    });
});


const shuffleNum = (a) => {
    for(let b, c, d = a.length; d; b = parseInt(Math.random() * d), c = a[--d], a[d] = a[b], a[b] = c);
    return a;
};

const levelReload = () => {
    $('li').css('color','white');
    let addends = [1,2,3,4];
    let randNums = shuffleNum(addends);
    $('input').val('');
    $('#sum1').html(randNums[0] + randNums[2]);
    $('#sum2').html(randNums[1]+ randNums[3]);
    $('#sum3').html(randNums[0] + randNums[1]);
    $('#sum4').html(randNums[2] + randNums[3]);
}
