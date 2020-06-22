function pushDownloadDataToDatabase () {
    var storageRef = firebase.storage.ref();
    var locationAudio = storageRef.child ('audio');
    var storedAudio = locationAudio.child();

    var downloadLink = '' + storedAudio.fullPath;
    
    db.collection (music_pool).set({
        name: downloadLink
    })

}