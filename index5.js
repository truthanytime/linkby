// for (var i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }

/*
    In adove function we only show 5 number's 5
    So the issue is because of `var`, var hasn't closer.
    So we can use `let` instead `var`
*/

for (let i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000 );
}

