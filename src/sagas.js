import {takeEvery,all} from 'redux-saga/effects';

function* test(){
	var xmlHttp;
	xmlHttp=new XMLHttpRequest();
	xmlHttp.open("GET","https://www.apiopen.top/weatherApi?city=成都",true);
	xmlHttp.send(null);
	xmlHttp.onreadystatechange=function(){
		if(xmlHttp.readyState==4 && xmlHttp.status==200){
			console.log(xmlHttp.responseText);
		}
	}
}
function * watchTest(){
	yield takeEvery('test-saga',test);
}
export default function* rootSaga(){
	yield all([
			watchTest()
		])
}