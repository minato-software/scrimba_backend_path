// upload a file
function uploadFile(){
    console.log('Step 1: Uploading file...')
    setTimeout(()=> {
        processFile()
    }, 1000)
}
// process a file
function processFile(){
    console.log('Step 2: Processing file...')
    setTimeout(()=> {
        notifyUser()
    }, 1000)
}
// notify a user
function notifyUser(){
    console.log('Step 3: Notifying user...')
    setTimeout(()=> {
        allSteps()
    }, 1000)
}

function allSteps() {
    console.log('All Steps completed')
}
/* 
Challenge:
1. Try to invoke these functions so they run in sequence. 
   The callback function passed to the final function (notifyUser) 
   can just be an anonymous function that logs 'All steps completed!'
   
   You will come up against a gotcha here! 
   hint.md is here to help!
*/

uploadFile(()=> {
    processFile( ()=> {
        notifyUser( ()=> {
            console.log('All steps completed!')
        })
    })
})
// expected output:

// Step 1: Uploading file...
// Step 2: Processing file...
// Step 3: Notifying user...
// All steps completed!