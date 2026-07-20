function launchBrower(browserName) {
if(browserName=="chrome"){
    console.log("Browser name chrome");
}
else if(browserName=="firefox"){
    console.log("Browser name firefox");
}
else if(browserName=="edge"){
    console.log("Browser name edge");
}
else if(browserName=="safari"){
    console.log("Browser name safari");
}
else if(browserName=="opera"){
    console.log("Browser name opera");
}
else if(browserName=="ie"){
    console.log("Browser name ie");
}
else if(browserName=="brave"){
    console.log("Browser name brave");
}   
else{
    console.log("others");
}
}

function runTests(testType){
    switch(testType){
    case "smoke":
        console.log("Smoke test cases"); 
        break;
    case "sanity":
        console.log("Sanity test cases");
        break;
    case "regression":
        console.log("Regression test cases");
        break;                  
    case "functional":
        console.log("Functional test cases");
        break;
    case "integration":
        console.log("Integration test cases");
        break;
    case "system":
        console.log("System test cases");
        break;
    case "acceptance":
        console.log("Acceptance test cases");   
        break;
    case "performance":
        console.log("Performance test cases");
        break;
    case "load":
        console.log("Load test cases"); 
    case "stress":
        console.log("Stress test cases");  
        break; 
    default:
        console.log("Others test cases");
        break;
}
}

browserName="chrome";
launchBrower(browserName);
testType="smoke";
runTests(testType);