/**
 * Created by qiushili on 1/6/16.
 */
// timer function is being called somewhere within setTimeout
function wait(message) {
	setTimeout(function timer() {
		console.log(message)
	}, 1000);
}

wait("Hello closure");