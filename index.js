// 1

 function getLeapYears (start, end) {
    let answer = [];
    for (let i = start; i < end; i++) {
        if(i % 4 == 0) {
            answer.push(i);
        }
    }
    console.log(answer);

 }

 getLeapYears(2002, 2025);

//  2
let arr1 = [17, 31, 7, 2002, 5, 88];
let arr2 = [23, 13, 1981, 1975, 25];

function calculateNums (first, second) {
    let answer = [];
    for (let i = 0; i < first.length ; i++) {
        answer.push(arr1[i] + arr2[i]);
        // if (arr1.length > arr2.length) {
        //     answer.push(i)
        // }
    }
    console.log(answer);
}
calculateNums(arr1, arr2);

// 3

function str (string) {
    let answer = "";

    if (string.length > 50) {
        answer = string.slice (0, 47) 
    }
    console.log(answer + '...');
}

str("Приходит мужик в зоомагазин: - Есть у вас что-нибудь чтоб умело разговаривать? - Есть! Говорящая сороконожка. Приходит домой, накормил её и говорит: - Гулять идем? - Та молчит. - Гулять идем или нет? - снова молчит. Мужик в бешенстве: - Развели! Какая же ты говорящая сороконожка?! - Тихо, блин. Я обуваюсь...")

// 4

function textUp (string) {

}